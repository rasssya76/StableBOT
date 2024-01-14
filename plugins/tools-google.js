import googleIt from 'google-it'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
let msk = `Masukan query nya\n\nContoh: ${usedPrefix+command} apa itu bot WhatsApp`
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return conn.sendMessage(m.chat, {
text: msk,
contextInfo: { 
externalAdReply: { 
title: `   G O O G L E - S E A R C H`, 
body: "", 
thumbnailUrl: `https://telegra.ph/file/cbac889d30631627339ca.jpg`, 
sourceUrl: sgc, 
mediaType: 1, 
renderLargerThumbnail: true}}},{quoted:m})
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt({ query: text })
    let msg = search.map(({ title, link, snippet }) => { 
    return `*${title}*\n${link}\n_${snippet}_`}).join('\n\n')
conn.sendMessage(m.chat, {
text: msg,
contextInfo: { 
externalAdReply: { 
title: `   G O O G L E - S E A R C H`, 
body: "", 
thumbnailUrl: `https://telegra.ph/file/cbac889d30631627339ca.jpg`, 
sourceUrl: sgc, 
mediaType: 1, 
renderLargerThumbnail: true}}},{quoted:m})

}
handler.help = ['google'].map(v => v + ' *query*')
handler.tags = ['internet']
handler.command = /^(google)$/i
handler.limit = true

export default handler