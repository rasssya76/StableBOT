const items = [
    'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Kamu sedang melakukan transfer!')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Use format ${usedPrefix}${command} [type] [value] [number]
example ${usedPrefix}${command} iron 9999 @user

 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('Tag salah satu, atau ketik Nomernya!!')
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
    let confirm = `
Are you sure you want to transfer *${count}* ${rpg.emoticon(type)}${type}${special(type)} to *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}*
Timeout *60* detik
`.trim()
 //   let c = global.wm
    conn.reply(m.chat, confirm, 'Yes\nNo', m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Timeout'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
    if (/^\u274c No$/i.test(txt)) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Reject')
    }
    if (/^\u2705 Yes$/i.test(txt)) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`Succes transfer *${count}* ${rpg.emoticon(type)}${type}${special(type)} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Failted to transfer *${count}* ${rpg.emoticon(type)}${type}${special(type)} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transferrpg', 'tfrpg'].map(v => v + ' [type] [jumlah] [@tag]')
handler.tags = ['rpg']
handler.command = /^(transferrpg|tfrpg)$/i

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}