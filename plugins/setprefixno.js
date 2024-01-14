let handler = async(m, { conn, text }) => {
  //if (!text) throw `Prefix tidak bisa kosong!`
  global.prefix = new RegExp('^[' + (opts['prefix'] || ``) + ']')
    await m.reply(`Prefix berhasil diubah menjadi *${text}*`)
}
handler.help = handler.command =  ['setprefixno']
handler.rowner = true

export default handler