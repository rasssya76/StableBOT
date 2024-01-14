import axios from 'axios';
let handler = async (m, { args, usedPrefix, command, text }) => {
var a = await (await axios.get(clph+`api/pinterestSearch?q=${text}&apikey=${clphkey}`)).data
var v = a.result
    let str = '*Pinterest Search*' + '\n\n'
    for (let i = 0; i < v.length; i++) {
      str += "Title: " + v[i].title + '\n'
      str += "image: " + v[i].image + '\n'
      str += "Link: " + v[i].url + '\n\n'      
    }
  await conn.sendMessage(m.chat, {
  text: str,
  contextInfo: {
  externalAdReply: {
  title: ``,
  thumbnailUrl: `https://telegra.ph/file/df3865472c2c848929f61.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
    //m.reply(str)
}

handler.help = handler.command =  ['pinsearch','pinterestsearch']
handler.tags = ['general']
handler.limit = true
export default handler