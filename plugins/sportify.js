import fetch from 'node-fetch';
let handler = async (m, { args, usedPrefix, command, text }) => {
if (!text) throw `Cari apa?`
let v = await (await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)).json()
let res = v.result.data
    let str = '*SPOTIFY SEARCH*' + '\n\n'
    for (let i = 0; i < res.length; i++) {
      str += "Title: " + res[i].title + '\n'      
      str += "duration: " + res[i].duration + '\n'
      str += "popularity: " + res[i].popularity + '\n'
      str += "preview: " + res[i].preview + '\n'
      str += "link: " + res[i].url + '\n\n'
    }
   await conn.sendMessage(m.chat, {
  text: str,
  contextInfo: {
  externalAdReply: {
  title: ``,
  thumbnailUrl: `https://telegra.ph/file/dc998b39ef69fa19f4f01.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
}

handler.help = handler.command = ['spotify','spotifysearch']
handler.tags = ['tools']
handler.limit = true
export default handler