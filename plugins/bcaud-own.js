import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fetch from 'node-fetch' 
import moment from 'moment-timezone'
import { toPTT } from '../lib/converter.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, participants  }) => {     
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    let psan = pesan
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5} detik`)
    let bcbg = `https://telegra.ph/file/c080917609684bf229cd3.jpg`
    let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? await m.getQuotedObj() : m.msg
  let media = await q.download?.()
  let audio = await toPTT(media, 'mp4')
  let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: null, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
  // console.log(msg)
    for (let i of anu) {
    await conn.sendFile(i, audio.data, ``, ``, ftroli, null, { fileLength: fsizedoc, seconds: `90000000`, contextInfo: {
            mimetype: 'audio/mp4',
          externalAdReply :{
    mediaUrl: '',
    mediaType: 1,
    description: wm, 
    title: '──•「 AUDIO BROADCAST 」•──',  
      body: '📢 Pesan owner :' + text,
    renderLargerThumbnail: true,
    thumbnailUrl: 'https://telegra.ph/file/8a47acd7bdb24bc38c8fe.jpg',
    sourceUrl: ''
     }}
  })
   //await conn.relayMessage(i, msg.message, { messageId: msg.key.id })
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.command = ['bcaudio']
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