import fetch from 'node-fetch'
import axios from 'axios'
import vm from 'node:vm'
//import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example ${usedPrefix+command} Baileys`
	try{
    m.reply(wait)
    var eha = await npmstalk(text)
    let npms = `*/ Npm Search \\*

• Name : ${eha.name}
• Version Latest : ${eha.versionLatest}
• Version Publish : ${eha.versionPublish}
• Version Update : ${eha.versionUpdate}
• Latest Dependencies : ${eha.latestDependencies}
• Publish Dependencies : ${eha.publishDependencies}
• Publish Time : ${eha.publishTime}
• Latest Publish Time : ${eha.latestPublishTime}`
  return conn.sendMessage(m.chat, {
  text: npms,
  contextInfo: {
  externalAdReply: {
  title: `NPM SEARCH`,
  thumbnailUrl: `https://telegra.ph/file/469768bcfce6987b861ed.png`,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  } catch (e) {
    console.log(e)
    throw `🚩 Not found `
    //throw e
  }
}
handler.help = ['npmstalk']
handler.tags = ['misc']
handler.command = /^(npm(s)?|npm(stalk)?)$/i
export default handler


async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}