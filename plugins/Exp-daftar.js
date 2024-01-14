import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
var c = `REGISTER`
var r = `R-BOT`
let imgr = flaaa.getRandom()
let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let name = conn.getName(m.sender)
let md = `Hai ${name}, untuk mendaftar silahkan gunakan perintah ${usedPrefix}${command} namaAnda.umur
Contoh: ${usedPrefix}${command} rama.17

© `+me

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg SERIAL NUMBER*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, {
text: md,
contextInfo: {
externalAdReply: {
title: wm,
thumbnailUrl: `${imgr+r}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  let [_, nawm, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Hih tua banget cuy😂'
  if (age < 5) throw 'Cil cil mending lu sekolah aja sono 😂'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let caption = `─[ *Successful Registration!* ]─

• Nama: ${name}
• Umur: ${age} tahun
• SN: ${sn}

© `+me 
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: wm,
thumbnailUrl: `${imgr+c}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler