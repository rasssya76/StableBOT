import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)
let type = (command).toLowerCase()
switch (type) {
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam':                  
                let anuu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                var result = anuu[Math.floor(Math.random() * anuu.length)]                                                               
                conn.sendMessage(m.chat,
                                 {
                        image: { url: result },
                     caption: me                  
                }, { quoted: m
                  } 
                    )           
            break
default:
 }
}
handler.help = ['china','cogan','indonesia','japan','korea','malaysia','thailand','vietnam']
handler.tags = ['random']
handler.command = /^(china|cogan|indonesia|japan|korea|malaysia|thailand|vietnam)$/i
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

const fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})