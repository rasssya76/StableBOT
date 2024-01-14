import axios from 'axios' 
let handler = async ( m, {text, usedPrefix,  command} ) => {
if (!text) throw `*Exp: ${usedPrefix+command} 56977° * 768*`
try{
m.reply(wait)
var res = await (await axios.get('https://vihangayt.me/tools/mathssolve?q='+text))
var final = res.data.data
await conn.sendMessage(m.chat, {
  text: final,
  contextInfo: {
  externalAdReply: {
  title: `M A T H S A I`,
  thumbnailUrl: `https://telegra.ph/file/9578e9c3aa41c62283e55.png`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  } catch(e) {
  console.log(e)
  throw eror
  }
}
handler.help = handler.command = ['maths','mathsai','mtk']
handler.limit = true
export default handler