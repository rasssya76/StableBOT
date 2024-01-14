import { sticker } from '../lib/sticker.js'
let { Sticker, createSticker, StickerTypes } = await import('wa-sticker-formatter')
let handler = async (m, { conn, text, command }) => {
let tekscuy = m.quoted && m.quoted.text ? m.quoted.text : text ? text : "";
        if (!tekscuy)
          throw `Cara Penggunaan\n${command} [teks]\n\nAtau kamu bisa reply pesan orang lain dengan perintah ${command}`;
        let jsonstik = {
          type: "quote",
          format: "webp",
          backgroundColor: "#111111",
          width: 512,
          height: 768,
          scale: 2,
          messages: [
            {
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: conn.getName(m.quoted ? m.quoted.sender : m.sender),
                photo: {
                  url: await conn
                    .profilePictureUrl(
                      m.quoted ? m.quoted.sender : m.sender,
                      "image"
                    )
                    .catch(
                      () =>
                        `https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`
                    ),
                },
              },
              text: tekscuy,
              replyMessage: {},
            },
          ],
        };
        axios
          .post(
            "https://quote-api.team-skizo.repl.co/generate",
            jsonstik,
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(async (res) => {
            const buffer = Buffer.from(res.data.result.image, "base64");

            await conn.sendMessage(
              m.chat,
              {
                sticker: await sticker(
                  buffer,
                  null,
                  'Request By'+conn.getName(m.sender),
                  packname
                ),
              },
              { quoted: m }
            );
          });
}          
handler.help = ['qc <teks>']
handler.tags = ['misc']
handler.command = /^(qc)$/i
handler.limit = true

export default handler