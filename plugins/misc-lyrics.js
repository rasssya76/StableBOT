import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let imgr = flaaa.getRandom()
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} friends`
  try{
  await m.reply('Loading...')
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    let anu = `────[ LYRICS ]─────\nLyrics *${result.title}*\nAuthor ${result.author}\n───────────────\n`+readmore+`${result.lyrics}\n───────────────\nUrl ${result.link}\n\n© ${me}`
    await conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false,
    title: wm,
    body: conn.user.name,
    mediaType: 1,
    renderLargerThumbnail : true,
    thumbnailUrl: `${imgr + 'LYRIC'}`,
    sourceUrl: `p`}}, 
    text: anu}, { quoted: m })
} catch (e) {
console.log(e)
m.reply(`🚩 Your lyrics not found`)
}
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler