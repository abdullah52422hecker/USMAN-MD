/*/*
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






const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DARK-SILENCE-MD~KEtxnIIb#q8CCCbReBNCri9tHAWA_dN4RsBXWJPNfzuHzoTfXvWE",
    CAPTION: process.env.CAPTION || "POWERED BY USMAN-MD",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/y8ByTMKf/Screenshot-20250908-015049-01.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M USMAN-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    BAD_NUMBER_BLOCKER: process.env.BAD_NUMBER_BLOCKER || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923351300389",
    OWNER_NAME: process.env.OWNER_NAME || "USMAN SER",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "USMAN-MD",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү υѕмαη-м∂`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_VV: process.env.ANTI_VV || "true",// true for anti once view 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};
