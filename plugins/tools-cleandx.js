import axios from 'axios'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Ex: ${usedPrefix + command} apa itu AI`	
m.reply(`Typing....`)
let request = (await axios.post('https://www.ai-yuxin.space/fastapi/api/chat', { user_id: 0, token: 0, msg: [{ role: 'user', content: text }], model: 'gpt-3.5-turbo' }).catch(e => e.response)).data
if (!request) throw eror
let result = ''
request.split('data: ').filter(x => x).map(x => (result += JSON.parse(x).choices[0].delta.content || ''))
await m.reply(result)
}
handler.command = ['cleandx']
handler.help = ['cleandx']
handler.tags = ['tools']
handler.limit = true

export default handler