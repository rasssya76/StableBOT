import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => m.replyV2(await truth())

handler.help = ['truth']
handler.tags = ['random']
handler.command = /^(truth)$/i

export default handler