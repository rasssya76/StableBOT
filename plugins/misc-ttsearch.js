import fetch from 'node-fetch'
import axios from 'axios'
//import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Teks??'	
	try{
	m.reply(wait)
    let res = (await axios.get(xzn+`api/ttsearch?search=${text}&apikey=`+apikey)).data;
	var s = res.play
	var t = res.title
	return conn.sendFile(m.chat, s, '', t, m)	 
  } catch (e) {
    console.log(e)
    throw eror
  }
}
handler.help = handler.command = ['ttsearch','tiktoksearch','tags']
handler.tags = ['misc']
handler.premium = true
//handler.limit = 5

export default handler