import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    try{
    m.reply(`Searching`)
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendMessage(
         m.chat,
             { image: 
                 { url: link }, 
                       caption: `
*GOOGLE IMAGE*
🔎 *Result:* ${text}
🌎 *Source:* Google
`
}, 
   {
     quoted:m
     }
   )
  } catch(err) {
  m.reply(`🚩 Tidak Ditemukan`)
}
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['tools']
handler.command = /^(gimage|image)$/i
handler.limit = 50

export default handler