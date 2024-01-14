let handler = m => m

handler.before = async function (m,{conn,text}) {
   if (m.sender.startsWith('212' || '212')) {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
   	global.db.data.users[m.sender].banned = true
    conn.updateBlockStatus(who, "block")
   }
   
   if (m.sender.startsWith('265' || '265')) {
   let whoo = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
   	global.db.data.users[m.sender].banned = true
    conn.updateBlockStatus(whoo, "block")
   }
    }

export default handler