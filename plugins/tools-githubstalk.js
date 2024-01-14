import fetch from 'node-fetch'
import axios from 'axios'
import vm from 'node:vm'
//import { apivisit } from './kanghit.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Example ${usedPrefix+command} rasssya76`
	try{
    m.reply(wait)
    var aj = await githubstalk(text)
    let npms = `*/ Github Stalker \\*

• Username : ${aj.username}
• Nickname : ${aj.nickname}
• Bio : ${aj.bio}
• Id : ${aj.id}
• Nodeid : ${aj.nodeId}
• Url Profile : ${aj.profile_pic}
• Url Github : ${aj.url}
• Type : ${aj.type}
• Admin : ${aj.admin}
• Company : ${aj.company}
• Blog : ${aj.blog}
• Location : ${aj.location}
• Email : ${aj.email}
• Public Repo : ${aj.public_repo}
• Public Gists : ${aj.public_gists}
• Followers : ${aj.followers}
• Following : ${aj.following}
• Created At : ${aj.ceated_at}
• Updated At : ${aj.updated_at}`
  return conn.sendMessage(m.chat, {
  text: npms,
  contextInfo: {
  externalAdReply: {
  title: `GITHUB STALK`,
  thumbnailUrl: aj.profile_pic,
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m})
  } catch (e) {
    console.log(e)
    throw `🚩 Not found `
    //throw e
  }
}
handler.help = ['githubstalk']
handler.tags = ['tools']
handler.command = ['githubstalk', 'ghs']
export default handler


async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}