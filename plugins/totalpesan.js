/*
   * Dann Peler
   * Instagram: @dannalwaysalone
*/
const handler = async (m, { conn }) => {
    const id = m.chat;
    const mCount = {};
    let totalM = 0;

    await loadAllMessages(id, (m) => {
        const user = m.key.fromMe ? conn.user.jid : m.participant ? m.participant : id.includes('g.us') ? '' : id;
        if (!user) return;

        if (user in mCount) {
            mCount[user]++;
        } else {
            mCount[user] = 1;
        }
        totalM++;
    }, 1000);

    const sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1]);
    const pesan = sorted.map((v) => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n');
    
    m.reply(`${totalM} Pesan terakhir\n${pesan}`, false, { contextInfo: { mentionedJid: sorted.map((v) => v[0]) } });
};

handler.help = ['totalpesan'];
handler.tags = ['group'];
handler.command = /^totalpesan$/i;

export default handler; // Export the handler function


const loadAllMessages = (messageID) => {
      return Object.entries(conn.chats)
      .filter(([_, { messages }]) => typeof messages === 'object')
      .find(([_, { messages }]) => Object.entries(messages)
      .find(([k, v]) => (k === messageID || v.key?.id === messageID)))
      ?.[1].messages?.[messageID]
    }