const cooldown = 86800000
let handler = async(m, { conn, args, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let ctimer = (new Date - user.lastcode)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
var jumlahHari = 86400000 * 1
var now = new Date() * 1
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    let kodes = args[0] == ''
    if (kodes) {
   if (user.lastcode < cooldown) {
    conn.reply(m.chat, `*SELAMAT!*\n\nKamu telah mendapatkan\nPremium 1Hari\nKetik ${usedPrefix}cekprem untuk mengecek`, m)
   // user.premiumTime += now + jumlahHari
    //user.premium = true
    user.lastcode = new Date * 1
   } else {
   return m.reply(`Code Hanya bisa di Tukar 1kali`.trim())
   }
   } else {
   return m.reply(' KODE SALAH ')
   }
}
handler.help = ['redeem']
handler.tags = ['rpg']
handler.command = /^(redemcode|coderedem|redeem)$/i

handler.cooldown = cooldown
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}