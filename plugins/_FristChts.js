export async function all(m) {
let anuu = global.opts
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group || anuu.gconly) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let caption = `Hai kak ${name}\n\nJika ingin mengakses bot silahkan join Grup di bawah\n${sgc}\n© ${me}`.trim()
    await m.replyV2(caption)
    user.pc = new Date * 1
}