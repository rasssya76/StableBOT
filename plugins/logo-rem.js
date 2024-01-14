import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Nama'
  m.reply(wait)
  let res = clph+`api/rem?nama=${response[0]}&apikey=`+clphkey
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i

export default handler