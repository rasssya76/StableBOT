import fetch from 'node-fetch'
import axios from 'axios'
//import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
  //try {
	if (!text) throw 'Format Url?'	
	try{
	m.reply(wait)
    let res = (await axios.get(`https://xzn.wtf/api/krakendl?url=${text}&apikey=Sayasukahentai`)).data;
	var s = res.url
	var t = res.file_name
	var title = res.file_name
	return conn.sendFile(m.chat, s, title, "", m, null, {
    asDocument: true
    })
  } catch (e) {
    console.log(e)
    throw eror
  }
}
handler.help = handler.command = ['krakendl','kraken']
handler.tags = ['downloader']
//handler.premium = true
handler.limit = 5

export default handler