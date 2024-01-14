import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { text, conn }) => {
  if (!text) throw 'Exp: /dood https://dooood.com/d/xfozdxnzl4kq';
  try {
    m.reply(wait)
    let response = await fetch(`https://xzn.wtf/api/dood?url=${text}&apikey=Sayasukahentai`)
    let wtf = await response.json()
    if (/MB/.test(wtf.size) && parseInt(wtf.size) > 100) throw '🚩Ukuran nya di luar nalar njir'
    let axiosConfig = {
      responseType: 'arraybuffer',
      headers: {
        referer: 'https://dood.com/'
      }
    };
    let { data: buffer } = await axios.get(wtf.direct_link, axiosConfig);
    await conn.sendMessage(m.chat, { video: buffer, caption: wtf.title}, { quoted: m });
  } catch (e) {
    m.reply("🚩 Tobat Brander")
  };
};
handler.help = handler.command = ['dood'];
handler.tags = ['downloader'];
handler.premium = true

export default handler