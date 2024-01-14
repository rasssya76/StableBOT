let handler = async (m, { conn, args, text }) => {
    if (!args || !args[0]) throw 'Yang mau di Unban siapa?'
    let mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.db.data.users)) throw 'User tidak terdaftar dalam DATABASE!!'
    let user = global.db.data.users[mention]
    if (!user.banned) throw 'User tidak Terbanned!!'
    user.banned = false
    user.BannedReason = ''
    user.warn = 0
    await m.reply('Berhasil unbanned!!')
    m.reply('Kamu telah di Unbanned!!', mention)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true
export default handler