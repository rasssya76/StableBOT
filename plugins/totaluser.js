let handler = async (m, { conn, text, usedPrefix, command }) => {
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
m.replyV2(`${Object.keys(global.db.data.users).length} Orang yang menggunakan bot\nDan Ini user yang udah regis ${rtotalreg}User`)
}

handler.help = ['totaluser']
handler.tags = ['main']
handler.command = /^(totaluser|user)$/i

export default handler