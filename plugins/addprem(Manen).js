let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `tag atau balas pesan yang mau dijadikan premium!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()     
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += Infinity
    else user.premiumTime = Infinity
    user.premium = true
    m.reply(`Berhasil!\n*${user.name}* sekarang sudah premium ${txt} hari.`)
}
handler.help = ['premmanen [@user] ']
handler.tags = ['owner']
handler.command = ['premmanen']

handler.rowner = true

export default handler