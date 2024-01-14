let handler = async (m, { conn, text }) => {
	let user = db.data.users[m.sender]
	user.afk = + new Date
	user.afkReason = text
	m.reply(`${await conn.getName(m.sender)} sekarang sedang afk\n\nAlasan: ${text ? `${text}` : ''}\nPada Tanggal: ${new Date().toLocaleString('id-ID')}`)
}

handler.help = handler.command = ['afk']
handler.tags = ['group']

export default handler