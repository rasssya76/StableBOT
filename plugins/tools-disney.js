import axios from 'axios'
let handler = async (m, { conn, args, text }) => {
if (!args[0]) throw 'Input Keyword'
try{
m.reply(wait)
return conn.sendFile(m.chat, `https://api.yanzbotz.my.id/api/text2img/disney?prompt=${text}`, wm, null, m)
} catch(e) {
console.log(e)
throw `Error In Getting Data!`
}
}
handler.help = ['disney']
handler.tags = ['tools']
handler.command = ['disney']
handler.limit = true

export default handler