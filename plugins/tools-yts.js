import yts from "yt-search"
import axios from "axios"
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  try{
  let rus = await yts(text)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
const inithumb = await getBuffer(thumbnya)
let teks = `*───[  YOUTUBE SEARCH ]───*\n\n`
for (let i of res) {
teks += `• Title : ${i.title}
• Views : ${i.views}
• Upload : ${i.ago}
• Durasi : ${i.timestamp}
• Channel : ${i.author.name}
• Link : ${i.url}\n───────────────────\n`
}
let b = teks.trim()
  conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: wm,
body: conn.user.name,
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: inithumb,
sourceUrl: sgc,
}}, text: teks}, { quoted: m })  
} catch(err) {
m.reply(`🚩 Tolong berikan judul yang lebih spesifik`)
console.log(err)
}
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i


export default handler

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