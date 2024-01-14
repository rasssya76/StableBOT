import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import scrapy from "node-scrapy"
import fs from 'fs'
let handler = async (m, { conn, text }) => {
const model = ['tr:nth-child(1) td']
fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
let result = scrapy.extract(body, model)
let waktu = result[1] || "Tidak ada data"
let lintang = result[2] || "Tidak ada data"
let bujur = result[3] || "Tidak ada data";
let magnitudo = result[4] || "Tidak ada data"
let kedalaman = result[5] || "Tidak ada data"
let lokasi = result[6] || "Tidak ada data"
let teks = `*INFORMASI GEMPA TERBARU*\n\n◦️ Waktu: *${waktu}*\n◦️ Bujur: *${bujur}*\n◦️ Lintang: *${lintang}*\n◦️ Magnitudo: *${magnitudo}*\n◦️ Kedalaman: *${kedalaman}*\n◦️ Lokasi: *${lokasi}*`.trim()
m.reply(teks)
 })
 }
handler.help = ['infogempa']
handler.tags = ['misc']
 handler.command = /^(infogempa|gempa)$/i
export default handler
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }