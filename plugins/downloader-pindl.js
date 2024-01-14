var {
    pindl
} = await import('../lib/pindl.js')
let handler = async (m, {
    conn,
    args,
    text
}) => {
    if (!args[0]) throw 'Input URL'
    m.reply(wait)
    var res = await pindl(args[0])    
    return conn.sendFile(m.chat, res.url, wm, null, m)
}
handler.help = ['pinterestdl']
handler.tags = ['downloader']
handler.command = ['pindl', 'pinterestdl']

export default handler