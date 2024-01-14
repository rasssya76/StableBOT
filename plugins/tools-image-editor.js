import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {	 
    try{
	let q = m.quoted ? m.quoted : m
	//if (!q) throw `Media?`
    m.reply(wait)	 
    let media = await q.download()
	let data = await uploadImage(media)
	/*if (!text) throw `Text?`	 
	if (!data) throw `Image?`
	try{*/
	m.reply(wait)	
	//let dataimg = `https://api.caliph.biz.id/api/upscale?img=${data}&apikey=caliphkey`
	let response = `https://xzn.wtf/api/image-editor?url=${data}&text=${text}&apikey=Sayasukahentai`
  conn.sendFile(m.chat, response, '', me, m)	 
} catch(e) {
//m.reply(`🚩 Server not respone/Media invalid`)
m.reply(eror)
}
}

handler.help = handler.command = ['image-editor']
handler.tags = ['tools']
handler.limit = true
 
export default handler