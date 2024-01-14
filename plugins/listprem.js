let handler = async (m, { conn, args, command }) => {   
  let name = '📌 Premium'
  let pp = flaaa.getRandom()
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var premiumTime = global.db.data.users[m.sender].premiumTime
  let prem = global.db.data.users[m.sender].premium
  //let waktu = clockString(`${premTime - new Date() * 1} `)
  
  let fileBuffer = `*My Premium Time*
• *Name:* ${conn.getName(m.sender)}
${prem ? `${clockString (premiumTime - new Date() * 1)}` : '• *PremiumTime:* Expired/Notuserprem'}
`.trim()
conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: wm,
body: conn.user.name,
mediaType: 1,
renderLargerThumbnail : true,
thumbnailUrl: pp+command,
sourceUrl: `p`}}, 
text: fileBuffer}, { quoted: m })
//conn.sendFile(m.chat, pp + command, 'pp.jpg', fileBuffer, m)
setTimeout(() => {
    if (db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, db.data.chats[m.chat].deletemediaTime)
}

handler.help = ['cekprem']
handler.tags = ['info']
handler.command = /^(cekprem)$/i

export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┊ ', ye, ' *Years 🗓️*\n', '┊ ', mo, ' *Month 🌙*\n', '┊ ', d, ' *Days ☀️*\n', '┊ ', h, ' *Hours 🕐*\n', '┊ ', m, ' *Minute ⏰*\n', '┊ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}