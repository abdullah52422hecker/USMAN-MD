const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')
const fetch = require('node-fetch');

cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🐬",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return reply("*_You're not bot owner 🪄._*");
const {exec} = require("child_process")
reply("*_USMAN-MD RESTARTING...🚀_*")
await sleep(1500)
exec("pm2 restart all")
reply("*_USMAN-MD SUCCESSFULLY RESTART...✨_*")
}catch(e){
console.log(e)
reply(`${e}`)
}
});

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}
cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["setting","env"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.setting',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
if (!isOwner) return reply("You're not bot owner 🪄.");
const isEnabled = (value) => value && value.toString().toLowerCase() === "true";
let madeSetting =`
*[ •  𝕌𝕊𝕄𝔸ℕ-𝕄𝔻 - 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊‎ • ]*
*🂱━━━〔 📃 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 𝐋𝐈𝐒𝐓 📃 〕━━━🂱*
*[ •  🂱 𝐀𝐔𝐓𝐎 • 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 🂱  • ]*
*╭━━━━━━━━━━━━━━━━━┈⊷*
*┃★╭━━━━━━━━━━━┈⊷*
*┃◈┃•* *🂱 AUTO_READ_STATUS:* ➠ ${isEnabled(config.AUTO_READ_STATUS) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_REPLY_STATUS:* ➠ ${isEnabled(config.AUTO_REPLY_STATUS) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_VOICE:* ➠ ${isEnabled(config.AUTO_VOICE) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_STICKER:* ➠ ${isEnabled(config.AUTO_STICKER) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_REPLY:* ➠ ${isEnabled(config.AUTO_REPLY) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_REACT:* ➠ ${isEnabled(config.AUTO_REACT) ? "✅" : "❌"}
*┃◈┃•* *🂱 HEART_REACT:* ➠ ${isEnabled(config.HEART_REACT) ? "✅" : "❌"}
*┃◈┃•* *🂱 STATUS_REACT:* ➠ ${isEnabled(config.STATUS_REACT) ? "✅" : "❌"}
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
*[ •  🂱 𝐌𝐄𝐃𝐈𝐀 • 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 🂱  • ]*
*╭━━━━━━━━━━━━━━━━━┈⊷*
*┃★╭━━━━━━━━━━━┈⊷*
*┃◈┃•* *🂱 ALIVE_IMG:* ➠ ${config.ALIVE_IMG}
*┃◈┃•* *🂱 ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┃◈┃•* *🂱 BOT_NAME:* ➠ ${config.BOT_NAME}
*┃◈┃•* *🂱 CAPTION:* ➠ ${config.CAPTION}
*┃◈┃•* *🂱 STATUS_REPLY:* ➠ ${config.STATUS_REPLY}
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
*[ •  🂱 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 • 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 🂱  • ]*
*╭━━━━━━━━━━━━━━━━━┈⊷*
*┃★╭━━━━━━━━━━━┈⊷*
*┃◈┃•* *🂱 ALWAYS_ONLINE:* ➠ ${isEnabled(config.ALWAYS_ONLINE) ? "✅" : "❌"}
*┃◈┃•* *🂱 ANTI_LINK:* ➠ ${isEnabled(config.ANTI_LINK) ? "✅" : "❌"}
*┃◈┃•* *🂱 ANTI_CALL:* ➠ ${isEnabled(config.ANTI_CALL) ? "✅" : "❌"}
*┃◈┃•* *🂱 ANTI_BAD:* ➠ ${isEnabled(config.ANTI_BAD) ? "✅" : "❌"}
*┃◈┃•* *🂱 AUTO_BLOCK:* ➠ ${isEnabled(config.AUTO_BLOCK) ? "✅" : "❌"}
*┃◈┃•* *🂱 BAD_NUMBER_BLOCKER:* ➠ ${isEnabled(config.BAD_NUMBER_BLOCKER) ? "✅" : "❌"}
*┃◈┃•* *🂱 CURRENT_STATUS:* ➠ ${isEnabled(config.CURRENT_STATUS) ? "✅" : "❌"}
*┃◈┃•* *🂱 FAKE_RECORDING:* ➠ ${isEnabled(config.FAKE_RECORDING) ? "✅" : "❌"}
*┃◈┃•* *🂱 FAKE_TYPING:* ➠ ${isEnabled(config.FAKE_RECORDING) ? "✅" : "❌"}
*┃◈┃•* *🂱 READ_MESSAGE:* ➠ ${isEnabled(config.READ_MESSAGE) ? "✅" : "❌"}
*┃◈┃•* *🂱 READ_CMD:* ➠ ${isEnabled(config.READ_CMD) ? "✅" : "❌"}
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
*[ •  🂱 𝐒𝐘𝐒𝐓𝐄𝐌 • 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒 🂱  • ]*
*╭━━━━━━━━━━━━━━━━━┈⊷*
*┃★╭━━━━━━━━━━━┈⊷*
*┃◈┃•* *🂱 MODE:* ➠ ${config.MODE} 
*┃◈┃•* *🂱 PREFIX:* ➠ [${config.PREFIX}]
*┃◈┃•* *🂱 ANTI_DEL_PATH:* ➠ ${config.ANTI_DEL_PATH}
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
*•────────────•⟢*
> © 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐔𝐒𝐌𝐀𝐍-𝐌𝐃
*•────────────•⟢*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting, 
                             contextInfo: {

mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420473990639@newsletter',
                    newsletterName: '𝐔𝐒𝐌𝐀𝐍-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "uptime",
    alias: ["runtime", "up", "system", "os"],
    desc: "Show bot uptime with stylish formats",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const startTime = new Date(Date.now() - process.uptime() * 1000);
        
        // Style 1: Classic Box
        const style1 = `╭───『 USMAN-MD UPTIME 』───⳹
│
│ ⏱️ ${uptime}
│
│ 🚀 Started: ${startTime.toLocaleString()}
│
│ ♻️PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
│
╰────────────────⳹
${config.CAPTION}`;

        // Style 2: Minimalist
        const style2 = `•——[ USMAN-MD UPTIME ]——•
  │
  ├─ ⏳ ${uptime}
  ├─ 🕒 Since: ${startTime.toLocaleTimeString()}
  ├─ ♻️PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
  │
  •——[ ${config.BOT_NAME} ]——•`;

        // Style 3: Fancy Borders
        const style3 = `▄▀▄▀▄ USMAN-MD UPTIME ▄▀▄▀▄

  ♢ Running: ${uptime}
  ♢ Since: ${startTime.toLocaleDateString()}
  ♢ PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
  
${config.CAPTION}`;

        // Style 4: Code Style
        const style4 = `┌──────────────────────┐
│  ⚡USMAN-MD UPTIME STATUS ⚡  │
├──────────────────────┤
│ • Time: ${uptime}
│ • Started: ${startTime.toLocaleString()}
│ • PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
│ • Version: 4.0.0
└──────────────────────┘`;

        // Style 5: Modern Blocks
        const style5 = `▰▰▰▰▰ USMAN-MD UPTIME ▰▰▰▰▰

  ⏳ ${uptime}
  🕰️ ${startTime.toLocaleString()}
  ♻️PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
  
  ${config.CAPTION}`;

        // Style 6: Retro Terminal
        const style6 = `╔══════════════════════╗
║   ${config.BOT_NAME} UPTIME    ║
╠══════════════════════╣
║ > RUNTIME: ${uptime}
║ > SINCE: ${startTime.toLocaleString()}
║ > PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
╚══════════════════════╝`;

        // Style 7: Elegant
        const style7 = `┌───────────────┐
│  ⏱️ USMAN-MD UPTIME  │
└───────────────┘
│
│ ${uptime}
│
│ Since ${startTime.toLocaleDateString()}
│
│ PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
│
┌───────────────┐
│  ${config.BOT_NAME}  │
└───────────────┘`;

        // Style 8: Social Media Style
        const style8 = `⏱️ *USMAN-MD UPTIME REPORT* ⏱️

🟢 Online for: ${uptime}
📅 Since: ${startTime.toLocaleString()}
♻️PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}

${config.CAPTION}`;
        // Style 9: Fancy List
        const style9 = `╔♫═⏱️═♫══════════╗
   ${config.BOT_NAME} UPTIME
╚♫═⏱️═♫══════════╝

•・゜゜・* ✧  *・゜゜・•
 ✧ ${uptime}
 ✧ Since ${startTime.toLocaleDateString()}
 ✧ PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
•・゜゜・* ✧  *・゜゜・•`;

        // Style 10: Professional
        const style10 = `┏━━━━━━━━━━━━━━━━━━┓
┃  UPTIME ANALYSIS  ┃
┗━━━━━━━━━━━━━━━━━━┛

◈ Duration: ${uptime}
◈ Start Time: ${startTime.toLocaleString()}
✧ PLATFORM: ${process.env.DYNO ? "Heroku" : "Localhost"}
◈ Stability: 100%
◈ Version:  4.0.0

${config.CAPTION}`;

        const styles = [style1, style2, style3, style4, style5, style6, style7, style8, style9, style10];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:selectedStyle, 
                             contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420473990639@newsletter',
                    newsletterName: config.OWNER_NAME || '𝐔𝐒𝐌𝐀𝐍-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});


cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/usmanser71/USMAN-MD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*🂱 𝙐𝙎𝙈𝘼𝙉-𝙈𝘿 • 𝑺𝑪𝑹𝑰𝑷𝑻 🂱*\n\n> *_USMAN-MD IS THE LATAST VERSION OF USMAN-MD THIS BOT CREATED TO USE BAILEYS USMAN-MD WORLD BEST WHATSAPP BOT POWERD BY USMAN-SER💙🌍_*\n\n*[ 𝑩𝑶𝑻 • 𝑵𝑨𝑴𝑬:📦 ]*\n> ${repoData.name}\n\n*[ 𝑶𝑾𝑵𝑬𝑹 • 𝑵𝑨𝑴𝑬:🪩 ]*\n> USMAN-SER\n\n*[ 𝑩𝑶𝑻 • 𝑺𝑻𝑨𝑹𝑺:🌟 ]*\n> ${repoData.stargazers_count}\n\n*[ 𝑩𝑶𝑻 • 𝑭𝑶𝑹𝑲𝑺:🚀 ]*\n> ${repoData.forks_count}\n\n*[ 𝑮𝑰𝑻𝑯𝑼𝑩 • 𝑳𝑰𝑵𝑲:💫 ]*\n> ${repoData.html_url}\n\n*[ 𝑩𝑶𝑻 • 𝑫𝑬𝑺𝑪𝑹𝑷𝑻𝑰𝑶𝑵:🤖 ]*\n> ${repoData.description || '*𝑻𝒉𝒆 𝑾𝒐𝒓𝒍𝒅 🌍 𝑩𝒆𝒔𝒕 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑 𝑩𝒐𝒕 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐔𝐒𝐌𝐀𝐍-𝐒𝐄𝐑 ♥️*'}\n\n*DON'T FORGET TO STAR 🌟 AND FORK REPOSITORY 🚀*\n\n> *© POWERED BY USMAN-SER ♥️*`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.postimg.cc/zXgS2wx1/Whats-App-Image-2025-09-14-at-01-51-51-e16b7380.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420473990639@newsletter',
                    newsletterName: '𝐔𝐒𝐌𝐀𝐍-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/usmanser71/USMAN-MD-DATABASE/raw/refs/heads/main/AUTO_VOICE/AUD-20250309-WA0019.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420473990639@newsletter',
                    newsletterName: '𝐔𝐒𝐌𝐀𝐍-𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
