import fetch from "node-fetch"
import { readFileSync } from "fs"
export async function all(m) {
  //Kalo mau menggokil pake ini
 // let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  let stc = readFileSync('./ownrs.webp')
if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    // ketika ditag 
    try {
        if (m.mentionedJid.includes(`${nomorown}@s.whatsapp.net`) && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: thumb , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: swb,
title: 'Apa Tag tag Owner ku',
body: ``,
sourceUrl: '', thumbnailUrl: `https://telegra.ph/file/2fc0447356cc8c8940c68.jpg`
  }
 }}, { quoted: m })
        }
    } catch (e) {
    console.log(e)
        return
    }

                                
}