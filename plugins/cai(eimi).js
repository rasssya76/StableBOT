import fetch from 'node-fetch';
import util from 'util';
let sessions = new Map();
let handler = async (m, { conn, args }) => {
    conn.sendPresenceUpdate('composing', m.chat)
    if (!args[0]) return conn.sendMessage(m.chat, {
  text: `Hai aku, eimi fukada sapa aku dong \nexample\n#eimi hai`,
  contextInfo: {
  externalAdReply: {
  title: `Hi iam eimi fukada`,
  thumbnailUrl: `https://telegra.ph/file/715f1b74a9bea050165d2.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
    try{
    conn.sendPresenceUpdate('composing', m.chat)
    let url = `https://cruxx-c-ai.hf.space/api?characterId=dBewCr4VwmxDU0G7Z06SSaUXXi_F-ImVl4iTn6rMIXc&text=${encodeURIComponent(args.join(' '))}`;     
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
  thumbnailUrl: `https://telegra.ph/file/715f1b74a9bea050165d2.jpg`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  //m.reply(wtf);
     //m.reply(str.trim());
    } catch(e) {
    console.log(e)
    throw `Maksud mu gimana? Aku ga ngerti deh`
    }
};
handler.help = handler.alias = handler.command = ['eimi']
handler.tags = ['misc']
handler.private = true
export default handler
//export default sessions