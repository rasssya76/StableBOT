import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendMessage(m.chat, { image: { url : cita }, caption: `Nih kartun lu`}, {quoted:m})
 //conn.sendButton(m.chat, `Nihh ${command}nya @${m.sender.split('@')[0]}`, wm, cita, [[`🔁Next🔁`, `${usedPrefix}${command}`]], m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
handler.tags = ['random']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i
handler.limit = true
export default handler