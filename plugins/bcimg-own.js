const {default: makeWASocket,
	makeWALegacySocket,
	extractMessageContent,
	makeInMemoryStore,
	proto,
	prepareWAMessageMedia,
	downloadContentFromMessage,
	getBinaryNodeChild,
	jidDecode,
	areJidsSameUser,
	generateWAMessage,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	WAMessageStubType,
	getContentType,
	relayMessage,
	WA_DEFAULT_EPHEMERAL
} = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, participants  }) => {     
    let _uptime = process.uptime() * 1000
    let _muptime
    let q = m.quoted ? m.quoted : m
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let media = await q.download()
    let data = await uploadImage(media)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    //batas
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    let bcbg = `https://telegra.ph/file/c080917609684bf229cd3.jpg`
    for (let i of anu) {
    conn.sendMessage(i, { image: { url: data }, caption: pesan+"\n"+readmore+"BROADCAST" })
 /* conn.sendMessage(i, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `R-BOT BROADCAST`,
body: conn.user.name,
mediaType: 1,
renderLargerThumbnail : true,
thumbnailUrl: data,
sourceUrl: `https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP`,
}}, text: `\n`+pesan+`\n`}, m)  */
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.command = /^(broadcast|bc)(img|image)$/i
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