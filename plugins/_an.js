let handler = async ( m, {conn} ) => {
m.reply('?')
conn.sendMessage(m.sender, { text: `Opo Ngab????` }, {quoted:m})
}

handler.command = /^(rama|ram)$/i
export default handler