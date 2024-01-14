import fetch from 'node-fetch'
import maker from 'mumaker'
let handler = async (m, { conn, args, text, command }) => {
let response = args.join(' ').split('|')
  if (!text) throw `Teks Nya Banh?\nContoh :\!${command} tes|ttes`
m.reply(wait)
let q = text
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data.image }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
handler.help = ['pornhub'].map(v => v + ' <text1>|<teks2>')
handler.tags = ['maker']
handler.command = /^(pornhub)$/i

handler.limit = true

export default handler