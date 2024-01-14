let handler = async(m, { conn, text }) => {
 // if (!text) throw `Prefix tidak bisa kosong!`
  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
    await m.reply(`Prefix berhasil diubah menjadi *Multi*`)
}
handler.help = handler.command =  ['setprefixmulti']
handler.rowner = true

export default handler