//let fetch = require ("node-fetch")
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args } ) => {
            if(!text && !text.startsWith("+")) return m.reply('*Error : Please Give Correct Format number* \n*Example :*.truecaller 62838726142300')
            try{
             await conn.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
              await conn.sendMessage(m.chat, { react: { text: `📞`, key: m.key }})
            const anu = await fetch(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
let api = await anu.json()
const msg = `*${m.pushName} Your Number Truecaller Restarts*

*• Name* ${api.data.data[0].name}
*• Access* ${api.data.data[0].access}
*• Score* ${api.data.data[0].score}
*• E164* ${api.data.data[0].phones[0].e164Format}
*• National* ${api.data.data[0].phones[0].nationalFormat}
*• D Code* ${api.data.data[0].phones[0].dialingCode}
*• Country Code* ${api.data.data[0].phones[0].countryCode}
*• Time Zone* ${api.data.data[0].addresses[0].timeZone}
*• Company* ${api.data.data[0].phones[0].carrier}
*• Type* ${api.data.data[0].phones[0].type}

*${wm}*`
const truei = await m.reply(msg)
 await conn.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
 } catch(e) {
 throw eror 
 }
            }
handler.help = ['ceknomor', 'truecaller']
handler.command = ['ceknomor', 'truecaller']
handler.tags = ['tools']
export default handler