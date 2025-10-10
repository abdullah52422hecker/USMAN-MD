/*
  ██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗    ███╗   ███╗██████╗ 
  ██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║    ████╗ ████║██╔══██╗
  ██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║███╗██╔████╔██║██║  ██║
  ██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚══╝██║╚██╔╝██║██║  ██║
  ╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║    ██║ ╚═╝ ██║██████╔╝
   ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═════╝ 
                                                                       
created by USMAN-SER 🕵
contact me 923097373710 ♻️
© Copy coder alert ⚠
*/





























































































































//Created By Sadeesha Coder and Silent lover 432 don't copy without permission of owner

const fs = require('fs');
const path = require("path");
const { File } = require("megajs");
const AdmZip = require("adm-zip");
const axios = require("axios");

const PLUGINS_DIR = './plugins'; // Directory where plugins will be extracted
const LIB_DIR = './lib';
const ZIP_DIR = './'
const auid = './auth_info_baileys'
const silsb = './silentlover'
const mydt = './my_data'

async function downloadAndExtractZip() {
  try {

  const MEGA_ZIP_LINK = 'https://mega.nz/file/WoBgAZIK';
  
    if (!fs.existsSync(mydt)) {
      fs.mkdirSync(mydt, { recursive: true });
    }
    if (!fs.existsSync(auid)) {
      fs.mkdirSync(auid, { recursive: true });
    }
    if (!fs.existsSync(silsb)) {
      fs.mkdirSync(silsb, { recursive: true });
    }
    if (!fs.existsSync(PLUGINS_DIR)) {
      fs.mkdirSync(PLUGINS_DIR, { recursive: true });
    }
    if (!fs.existsSync(LIB_DIR)) {
        fs.mkdirSync(LIB_DIR, { recursive: true });
      }

    console.log('FETCHING FILE FOR USMAN-MD 🚀❤');
    
    const file = File.fromURL(MEGA_ZIP_LINK);
    const fileData = await file.downloadBuffer();

    const tempZipPath = path.join(__dirname, 'temp.zip');
    fs.writeFileSync(tempZipPath, fileData);
    console.log(` USMAN-MD FILES DOWNLOADED SUCCESSFULLY ✅`);

    const zip = new AdmZip(tempZipPath);
    zip.extractAllTo(ZIP_DIR, true); 

    console.log('USMAN-MD SUCCESSFULLY CONNECTED ENJOY ❤✅');

    fs.unlinkSync(tempZipPath);
    require("./index.js");

  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadAndExtractZip();
