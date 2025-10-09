
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["usmanser","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 USMAN-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ᴜꜱᴍᴀɴ-ᴍᴅ-ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ ᴜꜱᴍᴀɴ-ꜱᴇʀ*
*┃★│* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴜꜱᴍᴀɴ-ꜱᴇʀ*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴜꜱᴍᴀɴ-ꜱᴇʀ*
*┃★│* *ᴀɢᴇ➠ ᴇɪɢʜᴛᴇᴇɴ*
*┃★│* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴜꜱᴍᴀɴ-ꜱᴇʀ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.postimg.cc/vT7xmjVW/Whats-App-Image-2025-09-14-at-01-51-51-e16b7380.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363420473990639@newsletter',
      newsletterName: 'USMAN-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
