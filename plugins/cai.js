import fetch from 'node-fetch';
import util from 'util';
let sessions = new Map();
let handler = async (m, { conn, args }) => {
    if (!args[0]) return conn.sendMessage(m.chat, {
  text: `Hello, I am Rias Gremory. I am a devil, so be careful or you might get hurt. *wink~*`,
  contextInfo: {
  externalAdReply: {
  title: `Hi iam Rias Gremory`,
  thumbnailUrl: `https://telegra.ph/file/398dea0860972ba4f28b4.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
    try{
    m.reply(`Typing....`)
    let url = `https://cruxx-c-ai.hf.space/api?characterId=_kvcCUxfU5zVA00JZLtpYm0LIHSVXjchcYNwlNAh9cs&text=${encodeURIComponent(args.join(' '))}`;     
    const res = await fetch(url);
    const json = await res.json();
    const str = typeof json.result.text === 'string' ? json.result.text.trim() : util.inspect(json.result.text.trim());  
   // await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '✅' } }, { messageId: m.key.id });
   const avtr = json.result.urlAvatar
   const usr = json.result.srcCharacterName
    return conn.sendMessage(m.chat, {
  text: str.trim(),
  contextInfo: {
  externalAdReply: {
  title: `Hi iam ${usr}`,
  thumbnailUrl: `https://telegra.ph/file/398dea0860972ba4f28b4.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  //m.reply(wtf);
     //m.reply(str.trim());
    } catch(e) {
    throw eror 
    }
};
handler.help = handler.alias = handler.command = ['cai']
handler.tags = ['misc']

export default handler
//export default sessions