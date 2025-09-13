const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "pair",
    alias: ["register","link"],
    react: "🔢",
    desc: "pair",
    category: "download",
    use: '.pair +923351300389',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("*Example - :* .pair +923351300389")
const pair = await fetchJson(`https://paironrender.com/code?number=${q}`)
const done = `_*USMAN-MD NUMBER PAIRED SUCCESSFULLY...✅*_`

const pir = pair.code
m.reply(`${pir}\n\n${done}`)
} catch (e) {
console.log(e)
reply(e)
}}
)
