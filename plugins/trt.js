/*
 * Deobfuscated Code Analysis:
 * - This module defines a 'translate' command for a bot.
 * - It uses the 'axios' library for making HTTP requests.
 * - It uses the 'mymemory.translated.net' API for translation.
 */

const axios = require('axios');
// Assuming 'cmd' is a function from the bot's framework to register a command
const { cmd } = require('../command');

// Register the 'translate' command
cmd({
    'pattern': 'trt', // The command prefix, e.g., '.trt' or '.translate'
    'desc': '🌍 Translate text between languages',
    'react': '🌐',
    'category': 'convert', // Likely a command category like 'Utility'
    'filename': __filename
}, async (message, text, metadata, { from: sender, q: query, reply: sendReply }) => {

    try {
        const parts = query.split(' ');

        // 1. Check for valid usage
        if (parts.length < 2) {
            return sendReply(
                '❗ Please provide a language code and text. Usage: .translate [language code] [text]'
            );
        }

        // 2. Extract language code and text
        const targetLanguageCode = parts[0];
        // The rest of the parts are the text to translate
        const textToTranslate = parts
            .slice(1) // Get all parts starting from the second one
            .join(' '); // Re-join them with a space

        // 3. Construct the API URL
        // Example API URL: https://api.mymemory.translated.net/get?q=hello&langpair=en|es
        const apiUrl = 'https://api.mymemory.translated.net/get?q=' +
            encodeURIComponent(textToTranslate) +
            '&langpair=en|' + // Note: The source language is HARDCODED as 'en' (English)!
            targetLanguageCode;

        // 4. Fetch the translation
        const response = await axios.get(apiUrl);

        // 5. Extract translated text from the response
        const translatedText = response.data.responseData.translatedText;

        // 6. Format the final reply message
        const replyMessage =
            '\n🌍 *Translation* 🌍' +
            '\n\n🔤 *Original*: ' + textToTranslate +
            '\n\n🔠 *Translated*: ' + translatedText +
            '\n\n🌐 *Language*: ' + targetLanguageCode.toUpperCase() +
            '\n\n> *© 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐔𝐒𝐌𝐀𝐍-𝐌𝐃*';

        return sendReply(replyMessage);

    } catch (error) {
        // Log the error for the bot maintainer
        console.log(error);

        // Send a user-friendly error message (which is also obfuscated in the original)
        return sendReply(
            '⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.'
        );
    }
});
