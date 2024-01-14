import fetch from 'node-fetch'
let handler = async (m, { text, conn }) => {
  if (!text) throw 'Exp: /oploverzdl https://oploverz.top/oshi-no-ko-episode-01-subtitle-indonesia/';
  try {
    m.reply(`Searching....`)
    let wtf = await fetch(`https://xzn.wtf/api/oploverzdl?url=${text}&apikey=Sayasukahentai`);
    let fak = await wtf.json();
    let str = `Status: ${fak.status}\nTitle: ${fak.next}\n\n`
    let a = fak.download
    for (let i = 0; i < a.length; i++) {
      str += "*Format: " + a[i].format + '*\n'
 	    let b = a[i].resolutions
  	for (let i = 0; i < b.length; i++) {
  		str += "resolutions: " + b[i].name + '\n'
  		let c = b[i].servers
  	for (let i = 0; i < c.length; i++) {
  		str += "servers: " + c[i].name + '\n'
  		str += "url: " + c[i].link + '\n\n'
			}
		}		
   }
m.replyV2(str)
  } catch (e) {
    m.reply("🚩 Lu tadi cari anime appan njir")
  };
};
handler.help = handler.command = ['oploverlz'];
handler.tags = ['misc'];

export default handler