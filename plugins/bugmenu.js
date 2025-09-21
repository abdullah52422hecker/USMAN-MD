const { cmd } = require('../command');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

cmd({
    pattern: "bugmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐁𝐔𝐆 𝐌𝐄𝐍𝐔* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 𝑪𝑹𝑨𝑺𝑯(+9213****)
┃◈┃• 𝑿𝑫(+9218****)
┃◈┃• 𝑶𝑻𝑷𝑳𝑶𝑪𝑲(+92313****)
┃◈┃• 𝑻𝑬𝑴𝑷𝑩𝑨𝑵(+92*****)
┃◈┃• 𝑮𝑪𝑪𝑹𝑨𝑺𝑯(𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
┃◈┃• 𝑮𝑪𝑪𝑹𝑨𝑺𝑯(𝑼𝑺𝑬 𝑻𝑯𝑰𝑺 𝑪𝑴𝑫 𝑰𝑵 𝑮𝑪)
┃◈┃• 𝑩𝑼𝑮(+9213******)
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7nf8cb.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363300351654980@newsletter',
                        newsletterName: 'ᴍᴀғɪᴀ ᴀᴅᴇᴇʟ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
