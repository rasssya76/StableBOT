import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {	 
	try{
	let q = m.quoted ? m.quoted : m
    m.reply(wait)	 
    let media = await q.download()
	let data = await uploadImage(media)
	//let dataimg = `https://api.caliph.biz.id/api/upscale?img=${data}&apikey=caliphkey`
	let p = (await axios.get(`https://xzn.wtf/api/aimirror?&apikey=Sayasukahentai&url=${data}&filter=cartoon_3d`)).data     
    let i = p.generated_image_addresses
    let o = p.time_processing
   return conn.sendFile(m.chat, i, '', `📩\t`+o, m)   
} catch(e) {
//m.reply(`🚩 Server not respone/Media invalid`)
m.reply(eror)
}
}
handler.help = handler.command = ["cartoon_3d"]
handler.tags = ['tools']
handler.limit = true

export default handler