/*
  ██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗      ███╗   ███╗██████╗ 
  ██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║     ████╗ ████║██╔══██╗
  ██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║███╗██╔████╔██║██║  ██║
  ██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚══╝██║╚██╔╝██║██║  ██║
  ╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║     ██║ ╚═╝ ██║██████╔╝
   ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝ 
                                                                       
created by USMAN SER 🕵
contact me 923351300388 ♻️
© Copy coder alert ⚠
*/


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
})

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
let madeSetting =`
*[ •  USMAN-MD - SETTINGS‎ • ]*
*╭━━━〔 SETTING-LIST 📃 〕━━━┈⊷*
*┃★╭──────────────*
*┃◈┃•* *♾️ AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┃◈┃•* *♾️ MODE:* ➠ ${config.MODE} 
*┃◈┃•* *♾️ AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┃◈┃•* *♾️ AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┃◈┃•* *♾️ AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┃◈┃•* *♾️ ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┃◈┃•* *♾️ ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┃◈┃•* *♾️ ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┃◈┃•* *♾️ ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┃◈┃•* *♾️ PREFIX:* ➠ [${config.PREFIX}]
*┃◈┃•* *♾️ FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING}
*┃◈┃•* *♾️ FAKE_TYPING:* ➠ ${config.FAKE_TYPING}
*┃◈┃•* *♾️ AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┃◈┃•* *♾️ HEART_REACT:* ➠ ${config.HEART_REACT} 
*┃◈┃•* *♾️ AUTO_REPLY_STATUS:* ➠ ${config.AUTO_REPLY_STATUS} 
*┃◈┃•* *♾️ BOT_NAME:* ➠ ${config.BOT_NAME}
*┃◈┃•* *♾️ READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*┃◈┃•* *♾️ READ_CMD:* ➠ ${config.READ_CMD}
*┃◈┃•* *♾️ CAPTION:* ➠ ${config.CAPTION}
*┃◈┃•* *♾️ ALWAYS_ONLINE:* ➠ ${config.ALWAYS_ONLINE}
*┃◈┃•* *♾️ CURRENT_STATUS:* ➠ ${config.CURRENT_STATUS}
*┃◈┃•* *♾️ STATUS_REPLY:* ➠ ${config.STATUS_REPLY}
*┃◈┃•* *♾️ STATUS_REACT:* ➠ ${config.STATUS_REACT}
*┃◈┃•* *♾️ ANTI_DEL_PATH:* ➠ ${config.ANTI_DEL_PATH}
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
        const formattedInfo = `> *_USMAN-MD IS THE LATAST VERSION OF USMAN-MD THIS BOT CREATED TO USE BAILEYS USMAN-MD WORLD BEST WHATSAPP BOT POWERD BY USMAN SER💙🌍_*\n\n*[ BOT • NAME:📦 ]*\n> ${repoData.name}\n\n*[ OWNER • NAME:🪩 ]*\n> USMAN SER\n\n*[ STARS:🌟 ]*\n> ${repoData.stargazers_count}\n\n*[ FORKS:🚀 ]*\n> ${repoData.forks_count}\n\n*[ GITHUB • LINK:💫 ]*\n> ${repoData.html_url}\n\n*[ DESCRIPTION:🤖 ]*\n> ${repoData.description || '*THE WORLD 🌍 BEST WHATSAPP BOT CREATED BY USMAN SER ♥️*'}\n\n*DON'T FORGET TO STAR 🌟 AND FORK REPOSITORY 🚀*\n\n> *© POWERED BY USMAN SER ♥️*`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/ubiq23` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420473990639@newsletter',
                    newsletterName: 'USMAN-MD',
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
                    newsletterName: 'USMAN-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
