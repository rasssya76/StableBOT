import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { text, usedPrefix, conn, command }) => {    
await conn.reply(m.chat, global.wait, m)
let type = (command).toLowerCase()
switch (type) {
case 'hentaivid':{
let wipu = (await axios.get(`https://raw.githubusercontent.com/RamaZYx/database/main/nsfw/hentaivid.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)     
conn.sendMessage(m.chat, { video: kentir, caption: `${wm}`},{ quoted: m })
}
break
}
}
handler.help = ['hentaivid']
handler.tags = ['nsfw']
handler.command = ['hentaivid']
handler.premium = true

export default handler

function pickRandoms(list) {
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