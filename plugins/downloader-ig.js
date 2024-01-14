import {
    igdl
} from '../lib/igdl.js'
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(args[0])) throw `Use example ${usedPrefix}${command} link`
    try {
        m.reply(wait)
        var res = await igdl(args[0])
        var url = res.data[0]
        conn.sendFile(m.chat, url, 'error.mp4', me, m);
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|insta|instagram(dl)?)$/i

export default handler