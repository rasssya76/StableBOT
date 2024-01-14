import {
    generateWAMessageFromContent
} from '@adiwajshing/baileys'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
import moment from "moment-timezone"
const getFolderSize = (await import("get-folder-size")).default;
import {
    watchFile,
    unwatchFile,
    readFileSync
} from 'fs'
import fs from 'fs'
import {
    createRequire
} from 'module'
const require = createRequire(import.meta.url)
import NetworkSpeed from 'network-speed'
const test = new NetworkSpeed()
import {
    tmpdir
} from 'os'

let handler = async (m, {
    conn,
    usedPrefix: _p
}) => {

    let user = `@${m.sender.split('@')[0]}`
    let usrs = db.data.users[m.sender]
    let nams = m.pushName || conn.getName(m.sender)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let ttlreg = Object.keys(global.db.data.users)
        .length
    let tags = {}
    let imgr = flaaa.getRandom()
    let upload = await getNetworkUploadSpeedd()
    let old = new Date()
    let wibh = moment.tz('Asia/Jakarta')
        .format('HH')
    let wibm = moment.tz('Asia/Jakarta')
        .format('mm')
    let wibs = moment.tz('Asia/Jakarta')
        .format('ss')
    let wktuwib = `${wibh}.${wibm}`

    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let download = await getNetworkDownloadSpeed()
    //SET MENU DI SINI
    const defaultMenu = {
        before: ``,
        header: '```"%category"```',
        body: '```» %cmd %islimit%isPremium```',
        footer: ``,
        after: '',
    }

    try {
        let name = m.pushName || conn.getName(m.sender)
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Jakarta'
        })
        let time = d.toLocaleTimeString(locale, {
            timeZone: 'Asia/Jakarta'
        })
        time = time.replace(/[.]/g, ':')
        let _uptime
        if(process.send) {
            process.send('uptime')
            _uptime = await new Promise(resolve => {
                process.once('message', resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }

        let uptime = clockString(_uptime)
        let help = Object.values(global.plugins)
            .filter(plugin => !plugin.disabled)
            .map(plugin => {
                return {
                    help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                    tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                    prefix: 'customPrefix' in plugin,
                    limit: plugin.limit,
                    premium: plugin.premium,
                    enabled: !plugin.disabled,
                }
            })
        for(let plugin of help)
            if(plugin && 'tags' in plugin)
                for(let tag of plugin.tags)
                    if(!(tag in tags) && tag) tags[tag] = tag
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || defaultMenu.after
        let _text = [
            before




            , ...Object.keys(tags)
            .map(tag => {
                return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help)
                    .map(menu => {
                        return menu.help.map(help => {
                                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                                    .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                                    .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                                    .trim()
                            })
                            .join('\n')
                    })




                    , footer
                ].join('\n')
            })




            , after
        ].join('\n')
        let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
        let replace = {
            '%': '%',
            p: _p,
            uptime,
            me: conn.getName(conn.user.jid),
            name,
            date,
            time,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

        const vi = ['https://telegra.ph/file/067b2cb3312837533239c.mp4'




            , 'https://telegra.ph/file/e38881701692c74484a17.mp4'




            , 'https://telegra.ph/file/de776d34ef058b7d2ec12.mp4', 'https://telegra.ph/file/bc82653506c301b40679c.mp4', 'https://telegra.ph/file/7f10b3624991bbcee9ded.mp4', 'https://telegra.ph/file/51aa9701839dcc29066e9.mp4', 'https://telegra.ph/file/4f26132ac0296a34a45a8.mp4'
        ]

        var vid = vi[Math.floor(Math.random() * (vi.length))]
        let hi = `\n\n\t\t _Have a good day ${name}_ \t\t\n\n`
        const totag = {
            contextInfo: {
                mentionedJid: [text]
            }
        }
        let mtag = text + totag
        let ppl = await (await conn.profilePictureUrl(m.sender, 'image')
            .catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
        let ppb = await (await conn.profilePictureUrl(conn.user.jid, 'image')
            .catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
        /*await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '✅'  }}, { messageId: m.key.id })
        conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false,
        title: wm,
        body: conn.user.name,
        mediaType: 1,
        renderLargerThumbnail : true,
        thumbnailUrl: `https://telegra.ph/file/42749e70a16b3caa434ba.jpg`,
        sourceUrl: sgc,
        }
        }, 
        text: text.trim()
        }, 
        { quoted: m }
        )*/
        /*let buttonMessage= {
'document':{'url': 'http://s.id/re-md' },
'mimetype': 'application/pdf',
'fileName': `「  ${conn.getName(m.sender)}  」`,
'fileLength': 22222222222222,
'pageCount': 222,
'contextInfo':{
'externalAdReply':{
'mediaUrl': 'https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP',
'mediaType': 1,
'renderLargerThumbnail':true,
'previewType': 2,
'title': 'BOT -WHATSAPP SIMPLE',
'body': me,
'thumbnail': thumb,
'sourceUrl': 'https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP'}},
'caption': text.trim()}
    await conn.relayMessage(m.chat,buttonMessage, { quoted: m })*/
        /* var oh = {image: { url: `${imgr+ucapan()}`}, caption:`${text.trim()}`, contextInfo: { mentionedJid: [m.sender] }}
         conn.sendMessage(m.chat, oh, { quoted: m })*/
        /*conn.relayMessage(m.chat, {
extendedTextMessage: {
  text: text.trim(),
  previewType: 0,
  contextInfo: { externalAdReply: { showAdAttribution: false,
    mentionedJid: [],
    groupMentions: [],
    forwardingScore: 127,
    isForwarded: true,
    //{ mentionedJid: [m.sender], 
    title: wm,
    body: conn.user.name,
    mediaType: 1,
    renderLargerThumbnail : true,
    thumbnailUrl: `https://telegra.ph/file/42749e70a16b3caa434ba.jpg`,
    sourceUrl: sgc,               
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363144038483540@newsletter',
      serverMessageId: 0
    }
  },
  inviteLinkGroupTypeV2: 0
}
}, {})*/
        /*conn.relayMessage(m.chat,  {
            requestPaymentMessage: {
              currencyCodeIso4217: 'USD',
              amount1000: 50000000,
              requestFrom: m.sender,
              noteMessage: {
              extendedTextMessage: {
          text: wm,
          previewType: 0,
          contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            forwardingScore: 127,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363144038483540@newsletter',
              serverMessageId: 0
            }
          },
          inviteLinkGroupTypeV2: 0
        }
        }
        }
        }, {})*/
        //UBAH AJA ASAL JAN SAMPE ERROR
        /*conn.sendMessage(m.chat, {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    //{ mentionedJid: [m.sender], 
                    title: wm,
                    body: conn.user.name,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: thumbs,
                    sourceUrl: sgc,
                    //}
                }
            },
            text: text.trim()
        }, {
            quoted: m
        })*/
        conn.sendMessage(m.chat, {
            text: text.trim(),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "Click Here",
                    newsletterJid: "120363144038483540@newsletter",
                },
                externalAdReply: {
                    title: `Hii ${m.pushname}`,
                    body: '',
                    thumbnailUrl: thumbs,
                    sourceUrl: sgc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: m
        })
    } catch (e) {
        m.reply('An error occurred')
        m.reply(e)
    }
}
handler.help = ['menu']
handler.tags = ['general']
handler.alias = ['menu', 'help']
handler.command = /^(menu|help|\?)$/i
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if(/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString()
            .padStart(2, 0))
        .join(':')
}

function ucapan() {
    const time = moment.tz("Asia/Jakarta")
        .format("HH")
    let res = "Selamat Pagi!"
    if(time >= 4) {
        res = "Selamat Pagi!"
    }
    if(time >= 10) {
        res = "Selamat Siang!"
    }
    if(time >= 15) {
        res = "Selamat Sore!"
    }
    if(time >= 18) {
        res = "Selamat Malam!"
    }
    return res
}

async function getNetworkUploadSpeedd() {
    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: tmpdir(),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const fileSizeInBytes = 2000000
    const speed = await test.checkUploadSpeed(options, fileSizeInBytes)
    return speed
}

async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000'
    const fileSizeInBytes = 500000
    const speed = await test.checkDownloadSpeed(baseUrl, fileSizeInBytes)
    return speed
}