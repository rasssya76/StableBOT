import axios from 'axios' 
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `Text?`
try{
m.reply(wait)
var a = await axios.get(`https://xzn.wtf/api/paraphraser?text=${text}&apikey=${apikey}`)   
var b = a.data.content
m.reply(b)
} catch(e) {
throw `minimal 200 huruf`
}
}
handler.help = ['ringkas']
handler.tags = ['tools']
handler.limit = true
handler.command = ['ringkas','meringkas']
export default handler