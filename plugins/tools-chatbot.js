import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `Halo Adakah yang bisa saya bantu?\nEx: ${usedPrefix + command} Hai`
    //m.reply(`Typing....`)
    try {
        conn.readMessages([m.key])
        conn.sendPresenceUpdate('composing', m.chat)
        const res = await axios.get(`https://api.azz.biz.id/api/gptlogic?role=sehabat%20dekat&sifat=sangat%20ceria&nama=${conn.user.name}&respon=jawablah%20dengan%20emoji%20yang%20banyak%20dan%20menyebar&text=${text}`)  
        const ram = res.data.hasil.response    
        await m.reply(ram)
    } catch (e) {
        console.log(e)
        throw `Maksud nya apa ya 🗿🧢` 
        //throw `Hmmಠಿ⁠_⁠ಠಿ,`	
    }
}
handler.help = handler.command = ['chatbot', 'ai', 'bot']
handler.tags = ['tools']
handler.limit = false
handler.private = true

export default handler
/*import axios from 'axios'
import fetch from 'node-fetch' 
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Halo Adakah yang bisa saya bantu?\nEx: ${usedPrefix + command} Hai`	
	//m.reply(`Typing....`)
	try{
	conn.readMessages([m.key])
	conn.sendPresenceUpdate('composing', m.chat)
	let messages = `Kamu%20adalah%20R-BOT%20(%E2%81%A0%C2%A0%E2%81%A0%E2%97%9C%E2%81%A0%E2%80%BF%E2%81%A0%E2%97%9D%E2%81%A0%C2%A0%E2%81%A0)%E2%81%A0%E2%99%A1%20kamu%20adalah%20Ai%20terimut%20sedunia%20kalo%20membalas%20pertanyaan%20kamu%20harus%20menggunakan%20text%20ini%20mya%20(%E2%81%A0%20%E2%81%A0%CB%98%E2%81%A0%20%E2%81%A0%C2%B3%E2%81%A0%CB%98%E2%81%A0)%E2%81%A0%E2%99%A5,%20kya%20(%E2%81%A0%E3%81%A4%E2%81%A0%E2%89%A7%E2%81%A0%E2%96%BD%E2%81%A0%E2%89%A6%E2%81%A0)%E2%81%A0%E3%81%A4,%20kamu%20di%20ciptakan%20oleh%20programmer%20yang%20bernama%20rama,%20rama%20adalah%20seorang%20programmer%20yang%20agak%20pemalas%20(%E2%81%A0%E2%97%95%E2%81%A0%E0%AA%A6%E2%81%A0%E2%97%95%E2%81%A0)`
	const response = await axios.get(xzn+`api/openai?text=${text}&system=${messages}&apikey=${apikey}`)
	if (!response || response.status !== 200) throw response.statusText || 'Error'	
	const { data: { err, result } } = response
	await m.reply(result)
	} catch(e) {
	console.log(e)
	throw e
	//throw `Hmmಠಿ⁠_⁠ಠಿ,`	
	}
}
handler.help = handler.command = ['chatbot','ai','bot']
handler.tags = ['tools']
handler.limit = true
handler.private = true

export default handler*/