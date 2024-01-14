import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {	 
	try{
	let q = m.quoted ? m.quoted : m
    m.reply(wait)	 
    let media = await q.download()
	let data = await uploadImage(media)
	//let dataimg = `https://api.caliph.biz.id/api/upscale?img=${data}&apikey=caliphkey`
	let p = xzn+`api/toanime?url=${data}&apikey=`+apikey
   return conn.sendFile(m.chat, p, '', wm, m)  
} catch(e) {
//m.reply(`🚩 Server not respone/Media invalid`)
m.reply(eror)
}
}
handler.help = handler.command = ["jadianime"]
handler.tags = ['general']
handler.limit = true

export default handler