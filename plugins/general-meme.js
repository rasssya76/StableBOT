import { Sticker } from 'wa-sticker-formatter'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Ex: ${usedPrefix + command}`
	try{
	let [t1, t2] = text.split`|`
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/.test(mime)) {
		let background = await webp2png(await q.download()),
			url = API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1 ? t1 : '_')}/${encodeURIComponent(t2 ? t2 : '_')}.png`, { background }),
			buffer = /s/.test(command) ? await (new Sticker(url)).toMessage() : { image: (await conn.getFile(url)).data }
		conn.sendMessage(m.chat, buffer, { quoted: m })
	} else throw 'Reply an image/sticker!'
	} catch(e) {
	console.log(e)
	m.reply(eror)
	}
}
handler.help = ['smeme']
handler.tags = ['general']
handler.command = /^(smeme)$/i

export default handler