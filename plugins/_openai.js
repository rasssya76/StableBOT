//const { Configuration, OpenAIApi } = await import("openai");
import fetch from 'node-fetch'
var c = `OPENAI`
let imgr = flaaa.getRandom()
let handler = async (m, { args, usedPrefix, command, text }) => {
  if(!text) return m.reply(`Masukkan teks yang mau ditanyakan ke OpenAI \nContoh: ${usedPrefix+command} Apa itu chat GPT?`)
  try{  
  m.reply(wait)
  let request = (await axios.get(`https://hercai.onrender.com/v3-beta/hercai?question=${text}`))
  let wtf = request.data.reply
  await conn.sendMessage(m.chat, {
  text: wtf,
  contextInfo: {
  externalAdReply: {
  title: `CHAT GPT3.5`,
  thumbnailUrl: `https://telegra.ph/file/8a2b4778c9413704297c5.png`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  //m.reply(wtf);
  } catch(e) {
  console.log(e)
  m.reply(`🚩 Tidak di temukan`)
  }
}
handler.help = ['openai']
handler.tags = ['tools']
handler.command = /^(ai|openai)$/i
handler.limit = true

export default handler