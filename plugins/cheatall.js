let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = 1000000000000
        //global.db.data.users[m.sender].limit = 1000000000000
        global.db.data.users[m.sender].common = 1000000000000
        global.db.data.users[m.sender].uncommon = 1000000000000
        global.db.data.users[m.sender].mythic = 1000000000000
        global.db.data.users[m.sender].legendary = 1000000000000
        global.db.data.users[m.sender].superior = 1000000000000
        global.db.data.users[m.sender].trash = 1000000000000
        global.db.data.users[m.sender].wood = 1000000000000
        global.db.data.users[m.sender].rock = 1000000000000
        global.db.data.users[m.sender].string = 1000000000000              
        global.db.data.users[m.sender].emerald = 1000000000000
        global.db.data.users[m.sender].diamond = 1000000000000
        global.db.data.users[m.sender].gold = 1000000000000
        global.db.data.users[m.sender].iron = 1000000000000
}
handler.command = /^(cheatall)$/i

handler.premium = true

export default handler