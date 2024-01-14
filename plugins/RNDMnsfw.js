import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'trap':
let waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: command, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'milf': 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await fetchBuffer(wipi)                                  
conn.sendMessage(m.chat, { image: kentir, caption: `${wm}`},{ quoted: m })
break  
case 'hentai-neko':
case 'hneko':
let waifuddd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: command, image: { url:waifuddd.data.url } }, { quoted: m })
break
case 'hentai-waifu':
case 'nwaifu':
let waifudsd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: command, image: { url:waifudsd.data.url } }, { quoted: m })
break
case 'gasm':			
let gasm = await axios.get(`https://nekos.life/api/v2/img/${command}`)
conn.sendMessage(m.chat, { caption: command, image: { url:gasm.data.url } }, { quoted: m })
break  
case 'animespank':
let spank = await axios.get(`https://nekos.life/api/v2/img/spank`)     
await conn.sendMessage(m.chat, { caption: command, image: {url:spank.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'ahegao':
var ahegaonsfw = JSON.parse(fs.readFileSync('./ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
var ahegaonsfw = JSON.parse(fs.readFileSync('./ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
var ahegaonsfw = JSON.parse(fs.readFileSync('./bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
var ahegaonsfw = JSON.parse(fs.readFileSync('./blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
var ahegaonsfw = JSON.parse(fs.readFileSync('./cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
var ahegaonsfw = JSON.parse(fs.readFileSync('./cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
var ahegaonsfw = JSON.parse(fs.readFileSync('./eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
var ahegaonsfw = JSON.parse(fs.readFileSync('./ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
var ahegaonsfw = JSON.parse(fs.readFileSync('./femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
var ahegaonsfw = JSON.parse(fs.readFileSync('./foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
var ahegaonsfw = JSON.parse(fs.readFileSync('./gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
var ahegaonsfw = JSON.parse(fs.readFileSync('./glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
var ahegaonsfw = JSON.parse(fs.readFileSync('./hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
var ahegaonsfw = JSON.parse(fs.readFileSync('./jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
var ahegaonsfw = JSON.parse(fs.readFileSync('./manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
var ahegaonsfw = JSON.parse(fs.readFileSync('./masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
var ahegaonsfw = JSON.parse(fs.readFileSync('./neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
var ahegaonsfw = JSON.parse(fs.readFileSync('./nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
var ahegaonsfw = JSON.parse(fs.readFileSync('./orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
var ahegaonsfw = JSON.parse(fs.readFileSync('./panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
var ahegaonsfw = JSON.parse(fs.readFileSync('./pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
var ahegaonsfw = JSON.parse(fs.readFileSync('./tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thights':
var ahegaonsfw = JSON.parse(fs.readFileSync('./thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
var ahegaonsfw = JSON.parse(fs.readFileSync('./yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
var ahegaonsfw = JSON.parse(fs.readFileSync('./zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: command, image: { url: xeonyresult.url } }, { quoted: m })
break
    case 'gifblowjob':
    let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifhentai':
    var ahegaonsfw = JSON.parse(fs.readFileSync('./gifs.json'))
    var xeonyresultx = pickRandom(ahegaonsfw)
    await conn.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break     
default:
 }
}

handler.help = ['trap','hentai-neko','hneko','hentai-waifu','nwaifu','gasm','animespank','ahegao','ass','bdsm','blowjob','cuckold','cum','eba','ero','femdom','gangbang','glasses','hentai','jahy','manga','masturbation','neko-hentai','neko-hentai2','nsfwloli','orgy','panties','pussy','tentacles','thights','yuri','zettai','gifblowjob','gifhentai','gifs','foot','milf']
handler.tags = ['nsfw']
handler.command = /^(trap|hentai-neko|hneko|hentai-waifu|nwaifu|gasm|animespank|ahegao|ass|bdsm|blowjob|cuckold|cum|eba|ero|femdom|gangbang|glasses|hentai|jahy|manga|masturbation|neko-hentai|neko-hentai2|nsfwloli|orgy|panties|pussy|tentacles|thights|yuri|zettai|gifblowjob|gifhentai|milf)$/i
handler.premium = true
export default handler


function pickRandoms(list) {
  return list[Math.floor(list.length * Math.random())]
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
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

const fetchBuffer = async (url, options) => {
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