import { fb } from '../lib/fbdl.js'
let handler = async (m, { conn, args, text }) => {
if (!text) throw `Link mana?`
try{
//conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: emojiwet}}, { messageId: m.key.id })
m.reply(wait)
var fbdl = await fb(args[0]);
let febe = '';
if (fbdl.urls && fbdl.urls.length > 0) {
febe = `${fbdl.urls[0]?.hd || fbdl.urls[1]?.sd || ''}`
}
conn.sendFile(m.chat, febe, 'error.mp4', fbdl.title, m)
} catch(e) {
throw eror
}
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.alias = ['fb', 'fbdl', 'facebook', 'facebookdl']
handler.command = /^((facebook|fb)(dl)?)$/i

export default handler