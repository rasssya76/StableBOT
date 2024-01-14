import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
import hx from 'hxz-api'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
	if (!text) return m.reply(`Mau Cari anime apa?\nContoh: ${usedPrefix + command} Mushoku Tensei`)
try{
m.reply(wait)
hx.otakudesu(text)
    .then(anu => {
     console.log(anu)
var ini_txt = `Title : ${anu.judul}\nOriginal Title : ${anu.jepang}\nRanting : ${anu.rate}\nProduser : ${anu.produser}\nType : ${anu.tipe}\nTotal Episode : ${anu.episode}\nDurasi : ${anu.durasi}\nWaktu rilis : ${anu.rilis}\nStudio : ${anu.studio}\nGendre : ${anu.genre}\nSinopsis : ${anu.desc}\n${anu.batch}`

conn.sendMessage(m.chat, { image: { url: anu.img }, caption: ini_txt }, { quoted: m})
});
} catch (err){
console.log(err)
m.reply("Anime tidak di temukan")
   }
}
handler.command = /^(anime|otaku|otakudesu)$/i
handler.help = ['anime']
handler.tags = ['tools']
handler.disabled = false
handler.limit = true

export default handler