async function handler(m, { conn, args }) {
    let user = global.db.data.users[m.sender]
    let count = (args[0] && Number(args[0]) ? Math.max(parseInt(args[0]), 1) : 1) * 1
    if ((user.money * 1) < count) return m.reply('💹 Uang kamu tidak cukup!!')
    let Bot = (Math.ceil(Math.random() * 91)) * 1
    let Kamu = (Math.floor(Math.random() * 71)) * 1
    let status = 'Kalah'
    if (Bot < Kamu) {
        user.money += count * 1
        status = 'Menang'
    } else if (Bot > Kamu) {
        user.money -= count * 1
    } else {
        status = 'Seri'
        user.money += (Math.floor(count / 1.5)) * 1
    }
    let judiTaruhan = `
*PLAYERS*     *POINT* 
*🤖 BOT:*      *${Bot}*
*👤 KAMU:*    *${Kamu}*

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${toSimpl(count * 2)}*` : status == 'Kalah' ? `Kehilangan *-${toSimpl(count * 1)}*` : `Mendapatkan *+${toSimpl(Math.floor(count / 1.5))}*`} Money 💹
`.trim()
await conn.sendMessage(m.chat, {
text: judiTaruhan,
contextInfo: {
externalAdReply: {
title: `BET777 BOTZ`,
thumbnailUrl: `https://telegra.ph/file/ca9f624f8e60b542f184e.jpg`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}

handler.help = ['judi [jumlah]']
handler.tags = ['game']
handler.command = /^(judi|bet)$/i

export default handler