import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {
    const bars = [
      '▓▒▒▒▒▒▒▒▒▒ 10%',
      '▓▓▓▒▒▒▒▒▒▒ 30%',
      '▓▓▓▓▓▒▒▒▒▒ 50%',
      '▓▓▓▓▓▓▓▒▒▒ 70%',
      '▓▓▓▓▓▓▓▓▓▒ 90%',
      
      '▓▓▓▓▓▓▓▓▓▓ 100%',
      text
    ];

    conn.reply(m.chat, '▒▒▒▒▒▒▒▒▒▒ 0%', m.quoted).then(async v => {
      for (let i = 0; i < bars.length; i++) {
        setTimeout(async () => {
          const bar = bars[i];
          await conn.relayMessage(m.chat, {
            protocolMessage: {
              key: m.key,
              type: 14,
              editedMessage: {
                conversation: bar
              }
            }
          }, {});
        }, i * 2000);
      }
    });
}
//handler.help = handler.alias = ['gitclone']
//handler.tags = ['downloader']
handler.command = /^(wat)$/

export default handler