import fetch from 'node-fetch'
import axios from 'axios'
//import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Negara??'	 
	m.reply(wait)
	try{
    let res = (await axios.get(xzn+`api/tttrending?region=${text}&apikey=`+apikey)).data;
	var s = res.play
	var t = wm
	return conn.sendFile(m.chat, s, '', t, m)	 
  } catch (e) {
    console.log(e)
    throw eror
  }
}
handler.help = handler.command = ['tttrend','tiktoktrend']
handler.tags = ['misc']
//handler.premium = true
handler.limit = 5

export default handler