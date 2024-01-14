import axios from 'axios'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, text }) => {
	if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 	 
	try{
    m.reply(wait)
	let medfr = await mediafire(text)
    conn.sendMessage(m.chat, {document:{url:medfr.link},jpegThumbnail : thumb, fileName:`${medfr.judul}`, mimetype:`application/${medfr.mime}`},{quoted:m})
    } catch(e) {
    console.log(e)
    throw `🚩 Your file failed for sendding`
    }
}
handler.help = handler.alias = ['mediafire']
handler.tags = ['downloader']
handler.limit = 3
handler.command = /^(mediafire)$/i

export default handler

const mediafire = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
				const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
				const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
				const link = $('#downloadButton').attr('href')
				const hsil = {
					judul: link.split('/')[5],
					upload_date: upload_date,
					size: size,
					mime: link.split('/')[5].split('.')[1],
					link: link
				}
				resolve(hsil)
			})
			.catch(reject)
	})
}