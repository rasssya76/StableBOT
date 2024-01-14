import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text }) => {	 
if (!text) throw `Exp: ${usedPrefix+command} Apa itu Microsoft`
try{
m.reply(wait)
let res = await ChatGptBing(text)
await conn.sendMessage(m.chat, {
  text: res,
  contextInfo: {
  externalAdReply: {
  title: `BING-AI`,
  thumbnailUrl: `https://telegra.ph/file/6a5cccd5332484e9c1a2f.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
} catch(e) {
console.log(e)
throw `Error In getting data!`
}
}
handler.help = ['bingai']
handler.tags = ['tools']
handler.premium = true
handler.command = ['bingai','bing']

export default handler

async function ChatGptBing(prompt) {
  try {
    const response = await axios.post("https://copilot.github1s.tk/v1/chat/completions", {
      "model": "Dummy",
      "max_tokens": 100,
      "messages": [
        {
          "role": "system",
          "content": "Kamu adalah Bot Yang di ciptakan rama, kamu selalu menggunakan bahasa Indonesia kamu di ciptakan pada tahun 2021."
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    });
    return response.data.choices[0].message.content
  } catch (error) {
    console.error("Error in ChatGptBing:", error.message);
    throw error;
  }
}