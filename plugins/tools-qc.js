import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Lah kok ga bisa"
   if (!text) return m.reply('Mana Text?')
   if (text.length > 30) return m.reply('maksimal 30 Karakter!')
   let trimtext = text.length > 50 ? text.substring(0, 50 - 3) + "..." : text,
		trimqtext
	if (m.quoted && m.quoted.text) {
		trimqtext = m.quoted.text.length > 50 ? m.quoted.text.substring(0, 50 - 3) + "..." : m.quoted.text
	}
   let qwe = trimtext && m.quoted && m.quoted.text ? {
		qname: m.quoted.name,
		qtext: trimqtext
	} : {}
   let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#111111",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": { qwe }
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.stickpack, global.stickauth)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['general']
handler.command = /^(qc)$/i

export default handler