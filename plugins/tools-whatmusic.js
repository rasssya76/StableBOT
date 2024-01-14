import acrcloud from 'acrcloud'
let acr = new acrcloud({
	host: "identify-eu-west-1.acrcloud.com",
    access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
    access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
})

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video|audio/.test(mime)) {
		let buffer = await q.download()
		await m.reply(wait)
		let { status, metadata } = await acr.identify(buffer)
		if (status.code !== 0) throw status.msg 
		let { title, artists, album, genres, release_date } = metadata.music[0]
		let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
		txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		txt += `*• Release Date:* ${release_date}`
		await conn.sendMessage(m.chat, {
  text: txt.trim(),
  contextInfo: {
  externalAdReply: {
  title: ``,
  thumbnailUrl: `https://telegra.ph/file/8a83c6eb3e12b7a1c704b.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
        //conn.sendMessage(m.chat, { text: txt.trim()}, { quoted: m })
		// m.reply(txt.trim())
	} else throw `Reply audio/video with command ${usedPrefix + command}`
}
handler.help = handler.alias = ['whatmusic']
handler.tags = ['tools']
handler.command = /^(whatmusic)$/i

export default handler