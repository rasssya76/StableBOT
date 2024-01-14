import {
    watchFile,
    unwatchFile,
    readFileSync
} from 'fs'
import chalk from 'chalk'
import fs from "fs"
import {
    fileURLToPath
} from 'url'
import moment from 'moment-timezone'
import id from './lib/bahasa-indo.js'
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset    0 is  0.00
// Offset  420 is  7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, {
    weekday: 'long'
})
let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})
var more = String.fromCharCode(8206)
global.readmore = more.repeat(4001)
/*============== LINK ==============*/
global.sig = 'https://instagram.com/rasssya766'
global.syt = 'https://youtube.com/@RamaGans'
global.sgh = 'https://github.com/rasssya766'
global.sgc = 'https://t.me/siarannnnnn'
global.sdc = 'https://wa.me/62838726142300'
global.swa = 'wa.me/682214729677'
global.stel = 'https://t.me/rama4you'
global.swb = '-'
global.snh = '-' //Make ini aja gausah di ganti.
/*============== PAYMENT ==============*/
global.pdana = '0878-4058-8946'
global.povo = '0821-4210-8243'
global.pgopay = '0821-4210-8243'
global.ppulsa = '0878-4058-8946'
global.ppulsa2 = '-'
global.psaweria = '-'
/*============== NOMOR ==============*/
global.nomorbot = `6285955123886`
global.nomorown = '62859551238860'
global.own = ['6283895498718']
//global.own2 = ['6285724114549']
global.owner = [
    ['-', 'ZYKO MD', true],
    ['6282339438285', 'R', true],
    ['6285955123886', 'R', true],
    ['62838954987181', 'R', true],
    ['6283895498718', 'ISI KALAU ADA', true]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10

/*============== WATERMARK ==============*/
global.wm = 'Rama' //Main Watermark
global.wm2 = 'R?'
global.wm3 = 'Rama'
global.botdate = `⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}\n⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `⻝ 𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = `Rama © ʙʏ ${global.nameown}`
global.danied = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰'
global.ultahowner = 'Oktober 31 2023'
global.me = 'Made with Rama'
global.packname = wm
global.author = ''
global.nameB = 'Rama'
global.str = '-------------'
global.namebot = 'Rama'
global.nameown = 'R?'
global.l = '「'
global.r = '」'
global.wait = `Loading...\n${readmore}\nJika command Error Silahkan laporkan ke owner /bug nama fitur`
global.eror = '```Error Pas pengambilan Data```'
global.hbsl = `🚩 *Limit kamu tidak cukup untuk menggunakan fitur ini* \n *Silahkan ambil bonus* \n#claim\n#monthly\n\n Atau bisa join user premium untuk mendapatkan limit *unlimited* ketik #buyprem untuk info lebih lanjut\n`
global.stickauth = `Creating By ${namebot}\nThangks-To\n-Baileys(Menjalankan)\n-Ffmpeg(Addons)\n-Replit(Runing)\n-Nodejs(Powered)\n-My Friend(Surrport)`
global.stickpack = `Sticker Ini di buat pada\n${week}\t${date}\nNomor Bot\n${nomorbot}`
/*============== LOGO ==============*/
global.thumbs = `https://telegra.ph/file/f9e8347ffbf13690dff72.png`
global.imagebot = 'https://telegra.ph/file/06c4e93a3d3f388b2642d.jpg'
global.giflogo = 'https://ibb.co/3sJ0ybv'
global.thumbbc = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4' //For broadcast
global.giflogo = 'https://telegra.ph/file/99dc832b69682552788b3.mp4'
global.giflogo2 = 'https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg'
//global.thumbs = ['https://telegra.ph/file/7db49c83fd106a60741cd.jpg']
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.thumbBanned = 'https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg'
global.thumbWarn = 'https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg'
global.botintro = 'Hallo, Kenalin saya adalah Rama, perangkat lunak otomatis yang melakukan tugas berulang melalui jaringan. Saya juga dapat mengikuti instruksi khusus untuk meniru perilaku manusia tetapi lebih cepat dan lebih akurat lo. Saya juga dapat berjalan secara independen tanpa intervensi manusia.'
global.intro = 'https://telegra.ph/file/6ab4daac226292a112540.jpg'
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup
global.thumbnailUrl = [
    'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
    'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
    'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
    'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
    'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
// ZONA FAKE FAKE AN
/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.thumbdoc = 'https://telegra.ph/file/6fc98b67397beb0b1374d.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.flaaa = [
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
    'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]
//SEMUA APis 
global.uptime = `u2169181-edebb22efeba5247c1a689c9`
global.apikey = "Sayasukahentai"
global.xzn = 'https://skizo.tech/'
global.clph = 'https://api.caliph.biz.id/'
global.clphkey = 'caliphkey'
global.APIs = { // API Prefix
    // name: 'https://website'
    nrtm: 'https://nurutomo.herokuapp.com',
    bg: 'http://bochil.ddns.net',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    xzn: 'https://skizo.tech/',
    zeks: 'https://api.zeks.xyz',
    pencarikode: 'https://pencarikode.xyz',
    LeysCoder: 'https://leyscoders-api.herokuapp.com',
    violetics: 'https://violetics.pw',
    rrul: 'https://api-rull.herokuapp.com',
    hadi: 'http://hadi-api.herokuapp.com',
    males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
    // 'https://website': 'apikey'
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
    'https://skizo.tech/': 'Rijalkiw1',
    'https://pencarikode.xyz': 'pais',
    'https://leyscoders-api.herokuapp.com': 'dappakntlll',
    'https://violetics.pw': 'beta'
}
//BAGIAN FUNCTIONS 
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
global.isNumbe = isNumber
// fungsi nomor to simple biar gak panjang

function toSimple(number) {
    if (isNaN(parseFloat(number))) return number;
    if (parseFloat(number) === 0) return '0';
    number = parseFloat(number).toFixed(0);
    const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'N', 'Dc', 'Ud', 'Dd', 'Td', 'Qua', 'Qui', 'Sxd', 'Spd', 'Ocd', 'NoD', 'Vg'];
    const base = 1000;
    const exponent = Math.floor(Math.log10(Math.abs(number)) / 3);
    const suffix = suffixes[exponent] || '';
    const simplified = number / Math.pow(base, exponent);
    const formatter = Intl.NumberFormat('en', {
        maximumFractionDigits: 1
    });
    return formatter.format(simplified) + suffix;
}
// Jangan ubah
global.toSimpl = toSimple
global.fss = fs
global.lenguajeGB = id
global.support = {
    ffmpeg: true,
    ffprobe: true,
    ffmpegWebp: true,
    convert: true,
    magick: false,
    gm: false,
    find: false
}
/*============== EMOJI ==============*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            money: '💹',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            petFood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰'

        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}
//JANGAN UBAH!!!
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.cyanBright("Update 'config.js'"))
    import(`${file}?update=${Date.now()}`)
})