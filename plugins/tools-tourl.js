import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|viewOnce|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let sk = `Sukses mengubah menjadi link
  
Link: ${link}
Size: ${media.length} Byte
Expired: ${isTele ? 'No Expired Date' : 'Unknown'}\n\n`
  conn.sendMessage(m.chat, {
text: sk,
contextInfo: { 
externalAdReply: { 
title: `Hai ${conn.getName(m.sender)}`, 
body: "", 
thumbnailUrl: `${thumbs}`, 
sourceUrl: `${sgc}`, 
mediaType: 1, 
renderLargerThumbnail: true}}})
}
handler.help = ['tourl'].map(v => v + ' (reply media)')
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i

export default handler