import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = clph+`api/sadboy?nama=${response[0]}&nama2=${response[1]}&apikey=`+clphkey
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['logosadboy'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logosadboy)$/i

export default handler