const { cmd, commands } = require('../command');
const yts = require('yt-search');
const { fetchJson } = require('../lib/functions');
const  { ytmp3 }= require('../lib/scrap')

// Function to extract the video ID from youtu.be or YouTube links
function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to convert any YouTube URL to a full YouTube watch URL
function convertYouTubeLink(q) {
    const videoId = extractYouTubeId(q);
    if (videoId) {
        return https://www.youtube.com/watch?v=${videoId};
    }
    return q;
}

cmd({
    pattern: "song",
    alias: ["play"],
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    
    const lipx = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        id: 'FAKE_META_ID_001',
        participant: '13135550002@s.whatsapp.net'
      },
      message: {
        contactMessage: {
          displayName: '© DARK-SILENCE-MD🥷',
          vcard: `BEGIN:VCARD
VERSION:3.0
N:Alip;;;;
FN:Alip
TEL;waid=13135550002:+1 313 555 0002
END:VCARD`
        }
      }
    };
        q = convertYouTubeLink(q);
        if (!q) return reply("*Need YT_URL or Title*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
┌────────────────⊷⦁⦂⦁
─⊷〔*DARK-SILENCE-MD MP3 FIND〕━⊷*
 ☘ Title: ${data.title} 🙇‍♂🫀🎧*\n
 ⏱ Duration: ${data.timestamp}
 📅 Uploaded: ${data.ago}
 🎭 Views: ${data.views}
└────────────────⊷⦁⦂⦁
🔢 Reply below number

 1 │❯◦ Audio 🎶          
 2 │❯◦ Document 📂     
 3 │❯◦ Voice Note 🎤   

㋛ POWERED BY DARK-SILENCE-MD🥷
`;
let info = `
> ㋛ POWERED BY DARK-SILENCE-MD🥷
 `;   
const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail},
            caption: desc,
  contextInfo: {
                mentionedJid: ['94742287793@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382823666763@newslette',
                    newsletterName: "DARK-SILENCE-MD🥷",
                    serverMessageId: 00
                }
            }
     }, {quoted: lipx});
     
     const messageID = sentMsg.key.id; // Save the message ID for later reference


        // Listen for the user's response
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const msg = messageUpdate.messages[0];
            if (!msg.message) return;
            const messageType = msg.message.conversation || msg.message.extendedTextMessage?.text;
            const from = msg.key.remoteJid;
            //const from = msg.key.participant || msg.key.remoteJid;

            // Check if the message is a reply to the previously sent message
            const isReplyToSentMsg = msg.message.extendedTextMessage && msg.message.extendedTextMessage.contextInfo.stanzaId === messageID;

            if (isReplyToSentMsg) {
                // React to the user's reply (the "1" or "2" message)

                // React to the upload (sending the file)
                

                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, { react: { text: '⬇', key: msg.key } });
                const result = await ytmp3(url, 'mp3');
        const downloadLink = result.downloadUrl;
                await conn.sendMessage(from, { react: { text: '⬆', key: msg.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downloadLink }, 
                        mimetype: "audio/mpeg" ,
                        contextInfo: {
                            externalAdReply: {
                                title: data.title,
                                body: data.videoId,
                                mediaType: 1,
                                sourceUrl: data.url,
                                thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                renderLargerThumbnail: true,
                                showAdAttribution: false
                            }
                        }
                    
                    }, { quoted: msg });
                    await conn.sendMessage(from,);
                
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, { react: { text: '⬇', key: msg.key } });
                    const result = await ytmp3(url, 'mp3');
        const downloadLink = result.downloadUrl;
                await conn.sendMessage(from, { react: { text: '⬆', key: msg.key } });
                    await conn.sendMessage(from, {
                        document: { url: downloadLink},
                        mimetype: "audio/mp3",
                        fileName: ${data.title}.mp3, // Ensure img.allmenu is a valid image URL or base64 encoded image
                        caption: info
                                            
                      }, { quoted: msg });
                      await conn.sendMessage(from, );
                     } else if (messageType === '3') {
                     await conn.sendMessage(from, { react: { text: '⬇', key: msg.key } });
                    const result = await ytmp3(url, 'mp3');
        const downloadLink = result.downloadUrl;
                await conn.sendMessage(from, { react: { text: '⬆', key: msg.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downloadLink }, 
                        mimetype: "audio/mpeg" ,
                        ptt: "true" ,
                        contextInfo: {
                            externalAdReply: {
                                title: data.title,
                                body: data.videoId,
                                mediaType: 1,
                                sourceUrl: data.url,
                                thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                renderLargerThumbnail: true,
                                showAdAttribution: false
                            }
                        }
                    
                    }, { quoted: msg });
                    await conn.sendMessage(from,); 
                }
            }
        });
    
        
 } catch (e) {
        console.log(e);
        reply(${e});
    }
});
