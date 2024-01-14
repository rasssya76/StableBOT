import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .removebg'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(xzn+`api/removebg?url=${url}&apikey=`+apikey)).buffer()
await conn.sendFile(m.chat, hasil, '', '2023 © '+wm, m)
	
}
handler.help = ['removebg']
handler.tags = ['tools']
handler.command = /^(removebg|nobg)$/i
handler.limit = true

export default handler