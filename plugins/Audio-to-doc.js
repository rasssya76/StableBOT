import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q || q.msg).mimetype || q.mediaType || ''
    if (!/video|audio/.test(mime)) throw `Reply video/voice note you want to convert to audio/mp3 with command *${usedPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Can\'t download media'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw 'Can\'t convert media to audio'
    conn.sendMessage(m.chat, { document: audio.data, fileName: `RamaGans.mp3`, mimetype: 'audio/mpeg'}, { quoted: m })
}
handler.help = ['toaudoc']
handler.tags = ['tools']
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(audoc|audiodoc)$/i

export default handler