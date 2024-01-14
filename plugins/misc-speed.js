import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
const getFolderSize = (await import("get-folder-size")).default;
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, isRowner}) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
  let muptime = clockString(_muptime)
  let storage = await getFolderSize.loose('.');
  let moduls = await getFolderSize.loose('./node_modules');
  let session = await getFolderSize.loose('./sessions')
  let databse = await getFolderSize.strict('./database.json');  
  let ttlreg = Object.keys(global.db.data.users).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  conn.relayMessage(m.chat, {
    reactionMessage: {
      key: m.key,
      text: `🚄`
    }
  }, {
    messageId: m.key.id
  });
  let neww = performance.now()
 // let session = fs.statSync(authFile)
  let speed = neww - old
  let runtt = `*SPEED TEST*
${Math.round(neww - old)} ms
${speed} ms

*SERVER*
• *Ram:* ${format(totalmem() - freemem())} / ${format(totalmem())}
• *Free Ram:* ${format(freemem())}
• *Platfrom:* ${os.platform()}
• *Hostname:* ${os.hostname()}
`
m.replyV2(runtt)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = ['ping', 'speed']

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '*Days️*', h, '*Hours*', m, '*Minute*', s, '*Second*'].map(v => v.toString().padStart(2, 0)).join('')
}