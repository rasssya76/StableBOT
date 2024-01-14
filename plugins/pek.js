import api from 'api-dylux';
import { sticker } from '../lib/sticker.js';
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
m.reply('P')
let buttons = [{ buttonText: { displayText: 'P' }, buttonId: `#menu` }]
if (!/menu$/i.test(args[1])) buttons.push({ buttonText: { displayText: 'P' }, buttonId: `#menu` })
}


handler.command = /^pek$/i;
export default handler;