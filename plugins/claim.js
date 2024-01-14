const rewards = {
  money: 500000,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${global.toSimpl(rewards[reward])}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
    m.replyV2(`*────[ CLAIM ]────*\n\n`+text.trim())
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['rpg']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler