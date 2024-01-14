let handler = async (m, { conn, text }) => {
    if (!text) throw 'Who wants to be banned ?'
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    if (!who) throw 'Hmmm'
    let users = global.db.data.users
    users[who].banned = true
    m.replyV2('Done!')
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.rowner = true

export default handler