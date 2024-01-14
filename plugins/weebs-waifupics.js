import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = (await axios.get('https://api.waifu.pics/sfw/waifu')).data
  conn.sendMessage(m.chat, { image: res, caption: `Jir Suka ama kartun`},  { quoted: m })
break
case 'neko':
  let _neko = (await axios.get('https://api.waifu.pics/sfw/neko')).data
  conn.sendMessage(m.chat, { image: _neko, caption: `Jir Suka ama kartun`},  { quoted: m })
  break
case 'megumin':
  let _megumin = (await axios.get('https://api.waifu.pics/sfw/megumin')).data
  conn.sendMessage(m.chat, { image: _megumin, caption: `Jir Suka ama kartun`},  { quoted: m })
  break    
default:
 }
}

handler.help = ['waifu', 'neko', 'megumin']
handler.tags = ['random']
handler.command = /^(waifu|neko|megumin)$/i
handler.limit = true
export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}