import axios from 'axios'
let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query'
	let ress = await (await axios.get('https://api.yanzbotz.my.id/api/cari/playstore?query='+text)).data
	let res = ress.result
	if (!res.length) throw `Query "${text}" not found :/`	
	let str = '';
        res.forEach(result => {
            str += `Nama: ${result.nama}\n`;
            str += `Rate: ${result.rate}\n`;
            str += `Link: ${result.link}\n`;
            str += `Developer: ${result.developer}\n`;
            str += `Score: ${result.rate2}\n\n`;
        });
	await conn.sendMessage(m.chat, {
  text: str,
  contextInfo: {
  externalAdReply: {
  title: res[0].nama,
  thumbnailUrl: `https://telegra.ph/file/94a044fbc6a7e29650df9.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
	
}
handler.help = ['apksearch']
handler.tags = ['tools']
handler.command = /^(apksearch)$/i

export default handler