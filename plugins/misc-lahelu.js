import fetch from 'node-fetch';

const handler = async (m, { text, conn }) => {
  try {
    m.reply(wait);
    const response = await fetch(API('xzn', 'api/randommeme', {}, 'apikey'));
    const wtf = await response.json();
    if (!wtf.media) return wtf;
    return await conn.sendFile(m.chat, wtf.media, '', wtf.caption, m);
  } catch (e) {
    console.log(e);
    m.reply(eror);
  }
};

handler.help = handler.command = ['memevid', 'lahelu'];
handler.tags = ['weebs'];

export default handler;