const {default: 
WA_DEFAULT_EPHEMERAL
} = (await import('@adiwajshing/baileys')).default
 
let handler = async (m, { conn, text, participants  }) => {
await conn.sendMessage(
    m.jid, 
    // this is 1 week in seconds -- how long you want messages to appear for
    { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }
)     
}
handler.command = /^(pesan)(sementara)$/i
handler.owner = true

export default handler