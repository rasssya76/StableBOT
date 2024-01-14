import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = clph+`api/kaneki?nama=${response[0]}&apikey=`+clphkey
  conn.sendFile(m.chat, res, 'kaneki.jpg', wm, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i

export default handler