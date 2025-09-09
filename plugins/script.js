const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *SOBIA BUTT*

> *SOBIA MD REPO:*
*|* *https://github.com/usmanser71/USMAN-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb6IIZI5vKA4u6OoF60z*
*╰──────────────●●►*

> *update command Done*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363420473990639@newsletter',
      newsletterName: "USMAN SER",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'USMAN-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/usmanser71/USMAN-MD" ,
thumbnailUrl: "https://i.postimg.cc/vZ1wZ287/20250909-004915.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
