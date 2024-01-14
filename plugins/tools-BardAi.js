import fetch from 'node-fetch'
let handler = async (m, {
    args,
    usedPrefix,
    command,
    text
}) => {
    if (!text) return m.reply(`Masukkan teks yang mau ditanyakan ke OpenAI \nContoh: ${usedPrefix+command} Apa itu Google?`)
    try {
        m.reply(wait)
        const response = await fetchJson(
            xzn + `api/bard-ai?text=${text}&apikey=` + apikey
        );
        const wtf = response.content
        //const data = response.images
        await conn.sendMessage(m.chat, {
            text: wtf,
            contextInfo: {
                externalAdReply: {
                    title: `GOOGLE BARD`,
                    thumbnailUrl: `https://telegra.ph/file/0fbc4078937cf46c0d68b.jpg`,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        })        
    } catch (e) {
        console.log(e)
        m.reply(eror)
    }
}
handler.help = ['aibard']
handler.tags = ['tools']
handler.command = /^(aibard|bardai|bard)$/i
handler.limit = true

export default handler


const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})