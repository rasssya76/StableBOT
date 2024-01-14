import { areJidsSameUser } from '@adiwajshing/baileys'
import axios from "axios"
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Aku tidak ada di grup itu :('
    if (!me.admin) throw 'Aku bukan admin T_T'
    try {
var pp_grup = await conn.profilePictureUrl(m.chat, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
var ppGc = await getBuffer(pp_grup)
let _meta = await conn.groupMetadata(m.chat)
console.log(_meta)
var url = await conn.groupInviteCode(m.chat).catch(() => m.reply(mess.error.api))
let asu = `*Group Description :* \n\n${_meta.desc}\n\n*Link :* https://chat.whatsapp.com/`+url
conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: wm, body: wm, mediaType: 1,  renderLargerThumbnail : true,
thumbnail: ppGc,
sourceUrl: `https://chat.whatsapp.com/`+url,                
}								 
}, text: asu }, {quoted : m})
}
    //m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up|gc)?$/i


export default handler

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error in getBuffer: ${e}`)
	}
}