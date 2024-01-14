import { 
    youtubedl,
    //youtubedlv2,
    // youtubedlv3
} from '@bochilteam/scraper'
import fetch from "node-fetch"
import axios from "axios"
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args[0]) return m.reply('Link?')
try{
let q = '128kbps'
let v = args[0]
// Kocak
const yt = await youtubedl(v)
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
    await conn.sendFile(m.chat, dl_url, ttl + '.mp3', ttl, m, null, {
    asDocument: true
    })
    } catch(err) {
     m.reply(`🚩 DownloadFailed.....`)     
    //m.reply(e)
  }
}


handler.command = /^(getaud|yta|ytmp3)$/i
handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.limit = true
export default handler

const fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})