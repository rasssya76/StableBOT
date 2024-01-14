import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Teks Nya Banh?\nContoh: ${usedPrefix+command} Hai`
let pjr = await axios.get(`https://xzn.wtf/api/tts-ai?text=${text}&voice=Thando&apikey=${apikey}`)
var response = pjr.data.base64
var media = Buffer.from(response, 'base64');
 let audio = await toAudio(media, 'mp4')
return conn.sendMessage(m.chat,{ audio: audio.data },{quoted:m})
}
handler.help = ['ttsai']
handler.tags = ['general']
//handler.alias = ['tomp3', 'toaudio']
handler.command = ['ttsai','aivn']

export default handler