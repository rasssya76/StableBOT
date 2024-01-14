import fetch from 'node-fetch'

let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
try{
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', me, m, 0, { thumbnail: await (await fetch(img)).buffer() })
    } catch(e) {
    m.reply(`🚩 *Server Not Respone*`)
    }
}
handler.help = ['cecan']
handler.tags = ['random']
handler.limit = true
handler.command = /^(cecanrandom|cecan)$/i

export default handler