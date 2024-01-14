import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let chat = global.db.data.chats[m.chat]
 // if (chat.nsfw) {
  await conn.reply(m.chat, global.wait, m)
let type = (command).toLowerCase()
switch (type) {
case 'husbu': 
case 'cosplay2': 
case 'wallml':
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                                               
conn.sendMessage(m.chat, { image: kentir, caption: `${wm}`},{ quoted: m })
break  
default:
}
// }
}

handler.help = ['husbu','cosplay2','wallml']
handler.tags = ['random']
handler.command = /^(husbu|cosplay2|wallml)$/i
handler.limit = true
export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error in getBuffer: ${e}`)
	}
}