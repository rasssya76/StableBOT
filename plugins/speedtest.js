import NetworkSpeed from 'network-speed'
const test = new NetworkSpeed()
import { tmpdir } from 'os'
 
let handler = async (m) => {
let upload = await getNetworkUploadSpeedd()
let old = new Date()
let download = await getNetworkDownloadSpeed() 
let text = '◦ *Download* : ' + download.mbps + ' mbps\n'+'◦ *Upload* : ' + upload.mbps + ' mbps\n'+'◦ *Response* : ' + ((new Date - old) * 1) + ' ms'
conn.replyV2(m.chat, text, m)
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest|p)$/i

export default handler

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