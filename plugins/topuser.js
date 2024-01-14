import { areJidsSameUser } from '@adiwajshing/baileys'
const limit = [
  'limit'
]
let handler = async (m, { conn, args, participants, usedPrefix, command }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  //let leaderboard = limit.filter(v => v && users.filter(user => user && user[v]).length)
  let type = (args[0] || '').toLowerCase()
  const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 20)
 /* let wrong = `
Use format *${usedPrefix}${command} [type] [page]*
example *${usedPrefix}${command} money 1*

📍 Type list
${leaderboard.map(v => `
${rpg.emoticon(v)}${v}
`.trim()).join('\n')}
`.trim()*/
  //if (!leaderboard.includes(type)) return m.reply(wrong)
  let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(limit)) : 0
  let sortedItem = users.map(toNumber(limit)).sort(sort(limit))
  let userItem = sortedItem.map(enumGetKey)
  // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `*──────[ TOP USER ]──────*
( *🎫${limit} Leaderboard* )
*📑 Page:* ${page} of ${getPage(limit)}
*🎖️ You:* *${userItem.indexOf(m.sender) + 1}* of *${userItem.length}*

${sortedItem.slice(page * 20, page * 20 + 20).map((user, i) => ` > ${i + 1} ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `(${conn.getName(user.jid)}) wa.me/` : '@'}${user.jid.split`@`[0]}\n${toSimple(user[limit])} ${limit}🎫`).join`\n────────────────\n\n`}
`.trim()
  return m.replyV2(text, null, {
    mentions: [...userItem.slice(page * 20, page * 20 + 20)].filter(v => !participants.some(p => areJidsSameUser(v, p.id)))
  })
}
handler.help = ['topuser']
handler.tags = ['xp']
handler.command = ['leaderboard','lb','topuser']

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
// fungsi yang diperlukan untuk fungsi tosimple
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}

// fungsi nomor to simple biar gak panjang

function toSimple(number) {
  if (isNaN(parseFloat(number))) return number;
  if (parseFloat(number) === 0) return '0';
  number = parseFloat(number).toFixed(0);
  const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'N', 'Dc', 'Ud', 'Dd', 'Td', 'Qua', 'Qui', 'Sxd', 'Spd', 'Ocd', 'NoD', 'Vg'];
  const base = 1000;
  const exponent = Math.floor(Math.log10(Math.abs(number)) / 3);
  const suffix = suffixes[exponent] || '';
  const simplified = number / Math.pow(base, exponent);
  const formatter = Intl.NumberFormat('en', { maximumFractionDigits: 1 });
  return formatter.format(simplified) + suffix;
}