const fs = require('fs');
const path = require('path');
const {
    File
} = require('megajs');
const AdmZip = require('adm-zip');
const axios = require('axios');

// --- Directory Paths ---
const PLUGINS_DIR = './plugins';
const LIB_DIR = './lib';
const ZIP_DIR = './'; // Current directory
const auid = './auth_info_baileys';
const silsb = './silentlo_baileys';
const mydt = './my_data';

/**
 * Downloads a ZIP file from Mega.nz, extracts it, and runs the main script.
 */
async function downloadAndExtractZip() {
    try {
        // --- 1. Define Download URL ---
        const downloadUrl = 'https://mega.nz/file/jdgTWRaZ#s5p4O6Txt5kt_-bpu6E_J1ke047BnSqWDVWjjKQqiko';

        // --- 2. Create Necessary Directories (if they don't exist) ---
        const recursiveOptions = {
            recursive: true
        };
        if (!fs.existsSync(mydt)) {
            fs.mkdirSync(mydt, recursiveOptions);
        }
        if (!fs.existsSync(auid)) {
            fs.mkdirSync(auid, recursiveOptions);
        }
        if (!fs.existsSync(silsb)) {
            fs.mkdirSync(silsb, recursiveOptions);
        }
        if (!fs.existsSync(PLUGINS_DIR)) {
            fs.mkdirSync(PLUGINS_DIR, recursiveOptions);
        }
        if (!fs.existsSync(LIB_DIR)) {
            fs.mkdirSync(LIB_DIR, recursiveOptions);
        }

        console.log('FETCHING FILE FOR DARK-SILENCE-MD 🚀❤️');

        // --- 3. Download the File ---
        const megaFile = File.fromURL(downloadUrl);
        const bufferData = await megaFile.downloadBuffer();

        // --- 4. Save the File Locally ---
        const tempZipPath = path.join(__dirname, 'temp.zip');
        fs.writeFileSync(tempZipPath, bufferData);

        console.log('DARK-SILENCE-MD FILES DOWNLOADED SUCCESSFULLY ✅');

        // --- 5. Extract the ZIP File ---
        const zip = new AdmZip(tempZipPath);
        // Extracts all contents to the current directory (ZIP_DIR), overwriting existing files (true).
        zip.extractAllTo(ZIP_DIR, true); 

        console.log('DARK-SILENCE-MD SUCCESSFULLY CONNECTED ENJOY ❤️✅');

        // --- 6. Clean Up and Execute ---
        fs.unlinkSync(tempZipPath); // Delete the temporary ZIP file
        
        // Execute the main file of the downloaded project
        require('./index.js');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

downloadAndExtractZip();
