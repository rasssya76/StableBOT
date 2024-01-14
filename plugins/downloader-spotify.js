var {
    downloadTrack
} = await import('@nechlophomeriaa/spotifydl')
var {
    toAudio
} = await import('../lib/converter.js')
let handler = async (m, {
    conn,
    usedPrefix,
    command,
    text
}) => {
    if (!text) throw `Example; ${usedPrefix+command} https://open.spotify.com/track/7gHs73wELdeycvS48JfIos`
    m.reply(wait)
    var a = await downloadTrack(text)
    var media = a.audioBuffer
    let audio = await toAudio(media, 'mp4')
    conn.sendMessage(m.chat, {
        audio: audio.data,
        mimetype: 'audio/mpeg'
    }, {
        quoted: m
    })
}
handler.help = handler.command = ['spotifydl']
handler.tags = ['downloader']

export default handler