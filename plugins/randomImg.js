import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)
let type = (command).toLowerCase()
switch (type) {
            case 'aesthetic':
            case 'anjing':
            case 'blackpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {         
                let annu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                var resultz = annu[Math.floor(Math.random() * annu.length)]                                               
                let buttonMessagee = {
                    image: { url: resultz },
                    caption: me                  
                }
                conn.sendMessage(m.chat, buttonMessagee, { quoted: m })
            }
            break
            case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {                   
                let aanu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                var resultt = aanu[Math.floor(Math.random() * aanu.length)]                               
                let buttonMesssage = {
                    image: { url: resultt },
                    caption: me                  
                }
                conn.sendMessage(m.chat, buttonMesssage, { quoted: m })
            }
            break
default:
 }
}
handler.help = ['cyberspace','mountain','programming','technology','aesthetic','anjing','blackpink','boneka','darkjokes','hekel','justina','kpop','kucing','mobil','motor','pubg','rose','ryujin','wallhp']
handler.tags = ['random']
handler.command = /^(cyberspace|mountain|programming|technology|aesthetic|anjing|blackpink|boneka|darkjokes|hekel|justina|kpop|kucing|mobil|motor|pubg|rose|ryujin|wallhp)$/i
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