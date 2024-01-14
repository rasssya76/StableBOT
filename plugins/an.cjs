let handler = async function (m, { text, args, usedPrefix }) {
m.reply('ok')
}
handler.tags = ['owner']
handler.rowner = true
handler.command = /^(an)$/i
module.exports = handler