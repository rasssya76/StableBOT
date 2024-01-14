import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

let handler = async (m, { conn, args, isPrems, isOwner }) => {
   if (!args[0]) return m.reply('Link?') 
   try{

  let qu = args[1] || '360'
  let q = qu + 'p'
  let v = args[0]

  let _thumb = {}
  try { _thumb = { jpegThumbnail: thumb2 } }
  catch (e) { }

// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendFile(m.chat, dl_url, ttl + '.mp4', ttl, m, null, {
    asDocument: true
    })
    } catch(err) {
m.reply(`🚩 *Gagal Dalam pengiriman video* | Mungkin ukuran video terlalu besar`)
  }
}


handler.command = /^(getvid|ytmp4|ytv)$/i
handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.limit = true
export default handler