import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'
import ameClient from "amethyste-api"
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
let handler = async (m, { conn, text, usedPrefix, command }) => {	 
try{
let q = m.quoted ? m.quoted : m
let media = await q.download()
let mime = (q.msg || q).mimetype || q.mediaType || ''
let data = await uploadImage(media)
//let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : data}).then(gambar => {
conn.sendMessage(m.chat, { image: gambar, caption: me }, { quoted: m })
fs.unlinkSync(ahah) 
})
} catch(e) {
m.reply("🚩 Your media not Valid Or Server no respone")
}
}
handler.help = ['3000years','approved','wanted','utatoo','unsharpen','thanos','sniper','sharpen','sepia','scary','rip','redple','rejected','posterize','ps4','pixelize','missionpassed','moustache','lookwhatkarenhave','jail','invert','greyscale','glitch','gay','frame','fire','distort','dictator','deepfry','ddungeon','circle','challenger','burn','brazzers','beautiful']
handler.tags = ['logo']
handler.command = /^(3000years|approved|wanted|utatoo|unsharpen|thanos|sniper|sharpen|sepia|scary|rip|redple|rejected|posterize|ps4|pixelize|missionpassed|moustache|lookwhatkarenhave|jail|invert|greyscale|glitch|gay|frame|fire|distort|dictator|deepfry|ddungeon|circle|challenger|burn|brazzers|beautiful)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}