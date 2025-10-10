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
cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '', 
fun: '', 
utility: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] +=`*┃◈* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `
*╭━━━〔 ✦𝐔𝐒𝐌𝐀𝐍-𝐌𝐃✦ 〕━━━┈⊷*
*┃★╭──────────────•*
*┃★│* ʀᴜɴᴛɪᴍᴇ : *${runtime(process.uptime())}*
*┃★│* ʀᴀᴍ ᴜꜱᴀɢᴇ : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┃★│* ᴍᴏᴅᴇ : *[${config.MODE}]*
*┃★│* ᴘʀᴇғɪx : *[${config.PREFIX}]*
*┃★╰──────────────•*
*╰━━━━━━━━━━━━━━━┈⊷*

*•═━┈┈━═〔 •ᴄᴍᴅ-ᴍᴇɴᴜ• 〕═━┈┈━═•*

*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*

*╭┈───────────────•*
${menu.download}
*╰┈───────────────•*

*[ • 🪩 MAIN-CMD 🪩 ‎• ]*

*╭┈───────────────•*
${menu.main}
*╰┈───────────────•*

*[ • 👥 GROUP-CMD 👥 ‎• ]*

*╭┈───────────────•*
${menu.group}
*╰┈───────────────•*

*[ • 👨‍💻 OWNER-CMD 👨‍💻 ‎• ]*

*╭┈───────────────•*
${menu.owner}
*╰┈───────────────•*

*[ • 🎡 CONVERTER-CMD 🎡 ‎• ]*

*╭┈───────────────•*
${menu.convert}
*╰┈───────────────•*

*[ • 🌐 SEARCH-CMD 🌐 ‎• ]*

*╭┈───────────────•*
${menu.search}
*╰┈───────────────•*

*[ • 👻 FUN - CMD 👻 ‎• ]*

*╭┈───────────────•*
${menu.fun}
*╰┈───────────────•*

*[ • 💌 UTILITY-CMD 💌 ‎• ]*

*╭┈───────────────•*
${menu.utility}
*╰┈───────────────•*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

*•────────────•⟢*
> © 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐔𝐒𝐌𝐀𝐍-𝐌𝐃
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu,
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
    }, {
      quoted: mek
    })

    // Send audio
    await conn.sendMessage(from, {
      audio: {
        url: 'https://github.com/usmanser71/USMAN-MD-DATABASE/raw/refs/heads/main/AUTO_VOICE/AUD-20250309-WA0019.m4a'
      },
      mimetype: 'audio/mpeg',
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
    }, {
      quoted: mek
    })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
