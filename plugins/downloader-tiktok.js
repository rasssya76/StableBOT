import axios from 'axios'
import { tiktok } from '../lib/tiktokdl.js'
let handler = async (m, { conn, args, usedPrefix: _p, command, text }) => {
	if (!args[0]) throw 'Input URL' 
	if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(args[0])) throw 'Invalid URL'
	let { data, code, msg } = await tiktok(args[0])
	let your = await tiktok(args[0])
	if (code !== 0) throw msg
	//conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: emojiwet}}, { messageId: m.key.id })
	await m.reply(wait)
	if (data?.images?.length) {
		for (let x = 0; x < data.images.length; x++) {
			let capt = x == 0 ? data.title : ''
			await conn.sendMessage(m.sender, { image: { url: data.images[x] }, caption: capt }, { quoted: m }) 
    }
    let audd = `https://www.tikwm.com${data.music}`
            await conn.sendMessage(m.sender, { document: { url: audd}, fileName: data.music_info.title + '.mp3', mimetype: 'audio/mpeg'}, { quoted: m })
  
	} else {
		let vid = /hd$/i.test(args[1]) ? `https://www.tikwm.com${data.hdplay}` : `https://www.tikwm.com${data.play}`
        let aud = `https://www.tikwm.com${data.music}`
		let desc = `${formatK(data.digg_count)} Likes, ${formatK(data.comment_count)} Comments. TikTok video from ${data.author.nickname} (@${data.author.unique_id}): "${data.title}". ${data.music_info.title}.`
		let buttons = [{ buttonText: { displayText: 'Audio' }, buttonId: `${_p}tomp3` }]
		// if (!/hd$/i.test(args[1])) buttons.push({ buttonText: { displayText: 'HD Quality' }, buttonId: `${_p + command} ${args[0]} -hd` })
		await conn.sendMessage(m.chat, { video: { url: vid }, caption: desc }, { quoted: m })
        await conn.sendMessage(m.chat, { document: { url: aud}, fileName: data.music_info.title + '.mp3', mimetype: 'audio/mpeg'}, { quoted: m })
	}
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler

function formatK(num) {
	return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(num)
}

function shortUrl(url) {
	return axios.get(`https://tinyurl.com/api-create.php?url=${url}`).then(x => x.data).catch(console.log)
                                        }