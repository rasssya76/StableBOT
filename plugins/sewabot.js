import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, args, text}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let caption = `👋 Hai *${name}*,

*SEWA BOT*

- 50k/MANEN
- 10k/BULAN
- 5k/2MINGGU

PAYMENT GOPAY,DANA,PULSA

${ppulsa} (PULSA)
${pdana} (DANA)
${pgopay} (GOPAY)
 
`
  await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: `10000`,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: caption,
      mentions: conn.parseMention(caption),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }
      }
      }
      }
      }
      }, 
      {})
}
handler.command = ['sewa', 'sewabot']

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }