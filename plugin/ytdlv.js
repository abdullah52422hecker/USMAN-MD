const { cmd } = require('../command');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const fetch = require('node-fetch');

cmd({
    pattern: "snaptube",
    alias: ["stube", "viddl"],
    react: "📲",
    desc: "Download videos like SnapTube (YT, FB, Insta, Twitter)",
    category: "download",
    use: ".snaptube <Video URL>",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q) return await reply("❌ براہ کرم کوئی ویڈیو لنک دیں!");

        let url = q.trim();
        let outputPath = path.join(__dirname, `../temp/${Date.now()}.mp4`);

        // ✅ YouTube
        if (ytdl.validateURL(url)) {
            const info = await ytdl.getInfo(url);
            const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
            await reply(`⏳ YouTube سے ویڈیو ڈاؤنلوڈ ہو رہی ہے: *${title}*`);

            const audio = ytdl(url, { quality: 'highestaudio' });
            const video = ytdl(url, { quality: 'highestvideo' });

            const audioPath = path.join(__dirname, `../temp/${Date.now()}_a.mp4`);
            const videoPath = path.join(__dirname, `../temp/${Date.now()}_v.mp4`);

            audio.pipe(fs.createWriteStream(audioPath));
            video.pipe(fs.createWriteStream(videoPath));

            video.on("end", () => {
                exec(`ffmpeg -i "${videoPath}" -i "${audioPath}" -c:v copy -c:a aac -strict experimental "${outputPath}" -y`,
                    async (err) => {
                        if (err) return await reply("❌ Merge Failed!");
                        await conn.sendMessage(from, { video: { url: outputPath }, caption: title }, { quoted: mek });
                        fs.unlinkSync(audioPath); fs.unlinkSync(videoPath); fs.unlinkSync(outputPath);
                    }
                );
            });
            return;
        }

        // ✅ Facebook
        if (url.includes("facebook.com")) {
            await reply("⏳ Facebook سے ویڈیو ڈاؤنلوڈ ہو رہی ہے...");
            let api = await fetch(`https://api.dapuhy.xyz/api/socialmedia/fbdown?url=${encodeURIComponent(url)}&apikey=socialfree`);
            let res = await api.json();
            if (!res?.result?.Normal_video) return await reply("❌ FB ویڈیو نہیں ملی!");
            await conn.sendMessage(from, { video: { url: res.result.Normal_video }, caption: "✅ Facebook Video" }, { quoted: mek });
            return;
        }

        // ✅ Instagram
        if (url.includes("instagram.com")) {
            await reply("⏳ Instagram سے ویڈیو ڈاؤنلوڈ ہو رہی ہے...");
            let api = await fetch(`https://api.dapuhy.xyz/api/socialmedia/igdowloader?url=${encodeURIComponent(url)}&apikey=socialfree`);
            let res = await api.json();
            if (!res?.result?.url[0]?.url) return await reply("❌ Insta ویڈیو نہیں ملی!");
            await conn.sendMessage(from, { video: { url: res.result.url[0].url }, caption: "✅ Instagram Video" }, { quoted: mek });
            return;
        }

        // ✅ Twitter
        if (url.includes("twitter.com") || url.includes("x.com")) {
            await reply("⏳ Twitter سے ویڈیو ڈاؤنلوڈ ہو رہی ہے...");
            let api = await fetch(`https://api.dapuhy.xyz/api/socialmedia/twitter?url=${encodeURIComponent(url)}&apikey=socialfree`);
            let res = await api.json();
            if (!res?.result?.HD) return await reply("❌ Twitter ویڈیو نہیں ملی!");
            await conn.sendMessage(from, { video: { url: res.result.HD }, caption: "✅ Twitter Video" }, { quoted: mek });
            return;
        }

        // اگر لنک unknown ہے
        return await reply("❌ یہ لنک سپورٹ نہیں کرتا! صرف YouTube, Facebook, Instagram, Twitter.");

    } catch (error) {
        console.error(error);
        await reply(`❌ Error: ${error.message}`);
    }
});
