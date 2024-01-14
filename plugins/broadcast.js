import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants  }) => {         
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    let bcbg = `https://telegra.ph/file/c080917609684bf229cd3.jpg`
    for (let i of anu) {
  conn.sendMessage(i, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: `R-BOT BROADCAST`,
body: conn.user.name,
mediaType: 1,
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/5ee0d0d8105ce2389fb06.jpg`,
sourceUrl: `${sgc}`,
}}, text: `\n`+pesan+`\n`}, m)  
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

export default handler

function readMore() {
	return (String.fromCharCode(8206)).repeat(4001)
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }