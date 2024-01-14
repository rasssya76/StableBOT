//const { Configuration, OpenAIApi } = await import("openai");
import fetch from 'node-fetch'
let imgr = flaaa.getRandom()
let handler = async (m, { args, usedPrefix, command, text }) => {
  if(!text) return m.reply(`Masukkan teks yang mau ditanyakan ke blackbox \nContoh: ${usedPrefix+command} Apa itu Space x?`)
  try{
  m.reply(wait)
  const response = await axios.get(xzn+
  `api/blackbox?text=${text}&apikey=`
  +apikey
  );
  const wtf = response.data.result
  await conn.sendMessage(m.chat, {
  text: wtf,
  contextInfo: {
  externalAdReply: {
  title: `BLACKBOX`,
  thumbnailUrl: `https://telegra.ph/file/cecd0f3aec698b9232636.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  //m.reply(wtf);
  } catch(e) {
  console.log(e)
  m.reply(`🚩 Tidak di temukan`)
  }
}
handler.help = handler.command = ['blackbox']
handler.tags = ['tools']
handler.limit = true

export default handler