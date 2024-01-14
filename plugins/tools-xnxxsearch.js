import fetch from 'node-fetch';
var { xnxxSearch } = await import('../lib/xnxx.js')
let handler = async (m, { args, usedPrefix, command, text }) => {
    if (!text) throw `Exp: ${usedPrefix+command} Japanese `
    var data = await xnxxSearch(text)
    m.reply(wait)
    let str = '*ASUPAN 18+*' + '\n\n'
    for (let i = 0; i < data.result.length; i++) {
      str += "Title: " + data.result[i].title + '\n'      
      str += "View: " + data.result[i].views + '\n'
      str += "Quality: " + data.result[i].quality + '\n'
      str += "Durasi: " + data.result[i].duration + '\n'
      str += "Link: " + data.result[i].link + '\n\n'
    }
    await conn.sendMessage(m.chat, {
  text: str,
  contextInfo: {
  externalAdReply: {
  title: ``,
  thumbnailUrl: `https://telegra.ph/file/c6a46922a6ea13b3fb80c.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
}

handler.help = handler.command = ['xnsearch', 'bokep'];
handler.tags = ['tools'];
handler.premium = true

export default handler