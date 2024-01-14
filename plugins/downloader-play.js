import { youtube } from '@xct007/frieren-scraper'
import { youtubeSearch, youtubedl } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix, args }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
  try{
  let vid = (await youtubeSearch(text)).video[0]
  m.reply(wait)
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `Title: ${title}
Url: ${url}
Publis: ${publishedTime}
Durasi: ${durationH}
View: ${viewH}

${readmore}
${description}

© ${wm}`
conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: wm,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await await youtubedl(url)     
  const link = await yt.audio['128kbps'].download()
  await conn.sendFile(m.chat, link, title + '.mp3', "", m, null, {
    asDocument: true
    })
    } catch(err) {
    console.log(err)
    m.reply('🚩 Not falid title data')
    }
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
//handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}