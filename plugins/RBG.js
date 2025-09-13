const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require("path");
const { cmd } = require("../command");

cmd({
  pattern: "remini",
  alias: ["enhance", "hd", "clair"],
  react: '✨',
  desc: "Enhance photo quality using Remini AI",
  category: "utility",
  use: ".remini [reply to image]",
  filename: __filename
}, async (client, message, { reply, quoted }) => {
  try {
    // Check if quoted message exists and has media
    const quotedMsg = quoted || message;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType || !mimeType.startsWith('image/')) {
      return reply("Please reply to an image file (JPEG/PNG)");
    }

    // Download the media
    const mediaBuffer = await quotedMsg.download();
    
    // Get file extension based on mime type
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else {
      return reply("Unsupported image format. Please use JPEG or PNG");
    }

    // Create temp file
    const tempFilePath = path.join(os.tmpdir(), `remini_input_${Date.now()}${extension}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // Upload to Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), `image${extension}`);
    form.append('reqtype', 'fileupload');

    const uploadResponse = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    const imageUrl = uploadResponse.data;
    fs.unlinkSync(tempFilePath); // Clean up temp file

    if (!imageUrl) {
      throw "Failed to upload image to Catbox";
    }

    // Enhance image using Remini API
    const apiUrl = `https://apis.davidcyriltech.my.id/remini?url=${encodeURIComponent(imageUrl)}`;
    const response = await axios.get(apiUrl, { 
      responseType: 'arraybuffer',
      timeout: 60000 // 1 minute timeout
    });

    // Check if response is valid image
    if (!response.data || response.data.length < 100) {
      throw "API returned invalid image data";
    }

    // Save enhanced image
    const outputPath = path.join(os.tmpdir(), `remini_output_${Date.now()}.jpg`);
    fs.writeFileSync(outputPath, response.data);

    // Send the enhanced image with loading message
    await reply("*🔄 DARK-SILENCE-MD ENHANCING YOUR IMAGE QUALITY...🚀*");
    await client.sendMessage(message.chat, {
      image: fs.readFileSync(outputPath),
      caption: "*✅ YOUR IMAGE ENHANCED SUCCESSFULLY! BY DARK-SILENCE-MD",
    }, { quoted: message });

    // Clean up
    fs.unlinkSync(outputPath);

  } catch (error) {
    console.error('Remini Error:', error);
    await reply(`❌ Error: ${error.message || "Failed to enhance image. The image might be too large or the API is unavailable."}`);
  }
});


cmd({
  pattern: "removebg",
  alias: ["rbg", "nobg", "transparentbg", "rmbg"],
  react: '🖼️',
  desc: "Remove background from an image",
  category: "utility",
  use: ".removebg [reply to image]",
  filename: __filename
}, async (client, message, { reply, quoted }) => {
  try {
    // Check if quoted message exists and has media
    const quotedMsg = quoted || message;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType || !mimeType.startsWith('image/')) {
      return reply("Please reply to an image file (JPEG/PNG)");
    }

    // Download the media
    const mediaBuffer = await quotedMsg.download();
    
    // Get file extension based on mime type
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else {
      return reply("Unsupported image format. Please use JPEG or PNG");
    }

    // Create temp file
    const tempFilePath = path.join(os.tmpdir(), `removebg_${Date.now()}${extension}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // Upload to Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), `image${extension}`);
    form.append('reqtype', 'fileupload');

    const uploadResponse = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    const imageUrl = uploadResponse.data;
    fs.unlinkSync(tempFilePath); // Clean up temp file

    if (!imageUrl) {
      throw "Failed to upload image to Catbox";
    }

    // Remove background using API
    const apiUrl = `https://apis.davidcyriltech.my.id/removebg?url=${encodeURIComponent(imageUrl)}`;
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

    // Check if response is valid image
    if (!response.data || response.data.length < 100) { // Minimum size check
      throw "API returned invalid image data";
    }

    // Save processed image
    const outputPath = path.join(os.tmpdir(), `removebg_output_${Date.now()}.png`);
    fs.writeFileSync(outputPath, response.data);

    // Send the processed image
    await client.sendMessage(message.chat, {
      image: fs.readFileSync(outputPath),
      caption: "*BACKGROUND REMOVED SUCCESSFULLY! POWERD BY SILENTLOVER432",
    }, { quoted: message });

    // Clean up
    fs.unlinkSync(outputPath);

  } catch (error) {
    console.error('RemoveBG Error:', error);
    await reply(`❌ Error: ${error.message || error}`);
  }
});
