import { sticker } from '../lib/sticker.js'
let { Sticker, 
StickerTypes } = await import('wa-sticker-formatter')
const {ttp,attp} = await import('../lib/text2picture.js')
import api from 'api-dylux';
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
await conn.reply(m.chat, global.wait, m)
let type = (command).toLowerCase()
switch (type) {
case 'attp':{
let aan = await attp(text)
let media = aan[0].url
const stiker = await sticker(false, media, global.packname, global.author);
    if (stiker) await conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
}
break


case 'ttp':{
const res = await api.ttp(text);
const stiker = await sticker(false, res.result, global.packname, global.author);
    if (stiker) await conn.sendFile(m.chat, stiker, "sticker.webp", "", m);
}
break
 
default:
}
// }
}

handler.help = handler.command =  ['attp','ttp']
handler.tags = ['misc']
handler.limit = true
export default handler