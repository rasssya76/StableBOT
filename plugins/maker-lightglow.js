import maker from 'mumaker'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let response = args.join(' ').split('|')
if (!text) throw `Teks Nya Banh?\nContoh : ${usedPrefix+command} Rama`
m.reply(wait)
let link = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
maker.textpro(link, [
    `${text}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data.image }, caption: `${command}` }, { quoted: m }))
}
handler.help = handler.command = ['lightglow']
handler.tags = ['maker']
handler.limit = true

export default handler