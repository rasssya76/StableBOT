import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text }) => {	 
if (!text) throw `Exp: ${usedPrefix+command} Poster Pixar Disney dengan pemeran seorang gadis remaja yang memakai helm`
try{
m.reply(wait)
var data = (await axios.get(`https://image.tamsisxcode.repl.co/generate/${text}`)).data.result
for (let i = 0; i < data.length; i++) {
conn.sendMessage(m.chat, { image: { url: data[i] }, caption: text }, { quoted: m })
//conn.sendFile(m.chat, data[i], text,"",m)
 }
} catch(e) {
console.log(e)
throw eror
}
}
handler.help = ['bing-img']
handler.tags = ['tools']
handler.premium = true
handler.command = ['bing','bing-img']

export default handler
/*import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text }) => {	 
if (!text) throw `Exp: ${usedPrefix+command} Poster Pixar Disney dengan pemeran seorang gadis remaja yang memakai helm`
try{
m.reply(wait)
var res = (await axios.post('https://skizo.tech/api/bing-chat?apikey='+apikey, {
text: text,
cookie:`MUID=078EF5FDC15A633A00B4E687C0F66281; _EDGE_V=1; MUIDB=078EF5FDC15A633A00B4E687C0F66281; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=E31662EA833A46658ED85E660B7B12F6&dmnchg=1; _UR=cdxcls=0&QS=0&TQS=0; MicrosoftApplicationsTelemetryDeviceId=40f7fda4-a632-4a12-ab2c-af1ea437a377; ANON=A=BDCC40DFB92631D76FAD76F2FFFFFFFF&E=1d22&W=1; PPLState=1; KievRPSSecAuth=FABaBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACLPiOg30Ipv7GAT36w7QxPmSehrKYUyLWef0Nlg8boNsJT43pLxP3cyg1+CZK5a6aLRCBZFHS3qYE/LZ+ANbywtNxlit+8RR+yKvcDFrlGhJHBE3ysuZ9tdZfkAM2ZRnFmElEWH0VrvHhqr4PDtB+3HLVORhZ36FhF0qRkJ0ym4LMedbc4O6HHjWsW93ZDURKrp+lJmq9DfMo1G7DbuuYCNOyap3J+hW2N5cUhvZ9S4QgJiUlO/RazZxbkVNlEIJWxapttZ52fxrNwUzQPfrch5uMbIzOVH+1RSBLy8hz1KIkhUtMIRrxOTgT+ikUkoUseQ9UAQ+C6g5C9goPQux/eMYriAwQ0xO7KinxgXrwtviO6J9W1ew2ZmFQYMT56Zoh7llkdR6ALpaYsu+PgP1u67iEhbieFiEkcXogNpmrrxRQynUSUv2E/dkyQSaaxwKcKXSDuTb+TFIrEvK6ZhpHssM5WAXsRarcdsSOm0JLTjqAqSfvxP4ZWAy/Jze3R0QpcpSKFknCJTp7N9iOvco2aVEejhmYLll7gONlcHFhcYxrKoBKkVikU0O2In7ByXnimog64C9Opwmk1sjPdCONUUh1yM3ZdrMI/2KWXHfj6BkNPr/YhBxMbrNKqHTGOYzJtJl0DzP5M1SJY8r6U1cU6b641iN/Vy/mmrLTKvAB6q35CRk0BLfRH9TdMdz2falxpkGZPPnYhg6oicqGTwlEXvlcU4wHP7Y6lr9CGr/IBQrkrATaB/dol1wzEtwnat0J6g6IYsMCNhLZISChwItFrBD3nRQLJNeTTco5qEvRHpDmvOS0SgpnPuv0isJe84eYBVHGyPkScVFh0m4KKAx/R6sKvwSkBRoXmE7FENSOVeOhcGH0bCH0VA12eFP7yk/UtSkZbjcAtC4wXMoKUmR4rRqrn/scZuDP69Md1Zw6T/qHLfY/TsVxwNG+gH07LHS9E+VJtamsDk+LXdHW5P2oKJvIT6sk0yo4bzdZOzlgNsQq1slGuaGaJqt/1Tqp3dx+BiAANtnvGmRmCScsAD6E8s2CpOY8T657hJ+bwB3mzgmSp7RzPmACF7TG9VLdtgT2cC43mN4hcJYN07BirylcncgZkNHJhXdtJGkRLb8wg0QPb+LlKVwKA9hwZ2JgqTn7+Q2goyufTJQQXP1iFHtYBbFylbuRdDXvIiU4YA3CFdqnCulGqPCKnXKWeXrwxrJyXFpQ+6Swbk4i4SJaUSIKm18jEZMxSCJYb+oCnf5gfFmmb9ZNFcvUExexg5DFQrcI6cTo2wVOBVsbKpSOi9rXHsH30VrXeaaZA52XwVKfI2FxgS6VKYSzjpxTqSSpCMN91FdteN6ytObqQJBEscNT7hs7Ja+T6E/NxTsVvnFxWuAR1i+vNiJDOmFcRJTCRalF/DnFAA+Sv8Nz2C6BOU1iaTX3cjDvdYP3Q==; _U=1rvAlRVMnnqGf71WAx-U18I-F6gcxdvnZUnqAf67F59B9e5srzmsdJ_KNW3wc1lJ8cd4aWmqX7TcaEXGO7NwzEuDyab3vPvAAFeHI9Bu0sbb8aofRZ6KlrwC8j0d_WVd7trMTkgViEqLXO78brYv7BLwxbxOV5h_OU-_EpFW5Csez8zu-ZoPHDyDS4_tXnV8IApYCR8B75JZRuNFfWuyeZA; WLID=SfkwA9hnG044qfXC5vH2GsSkwcwdVWMB1gUAAd/owrSImEUjm5NtKzPGBYdxPczptN4dfOzw49wZjIXF01soPvAK2NqKdy918QF7dhR1Wus=; _EDGE_S=SID=1FA6827DE2C06C3B005491A3E3F26D78; SRCHUSR=DOB=20231205; WLS=C=586c4417167cc529&N=Rama; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0xMi0wNVQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIlRucyI6MCwiRGZ0IjpudWxsLCJNdnMiOjAsIkZsdCI6MCwiSW1wIjoyLCJUb2JicyI6MH0=; SRCHHPGUSR=SRCHLANG=id&IG=E0522D3077E74F6C8F92CDBB8BF11133&CW=360&CH=678&SCW=360&SCH=678&BRW=MM&BRH=MT&DPR=2.0&UTC=420&DM=1&PV=8.1.0&HV=1701782361&HBOPEN=2; _Rwho=u=m; _SS=SID=1FA6827DE2C06C3B005491A3E3F26D78&R=0&RB=0&GB=0&RG=0&RP=0; _RwBf=mta=0&rc=0&rb=0&gb=0&rg=0&pc=0&mtu=0&rbb=0&g=0&cid=&clo=0&v=1&l=2023-12-05T08:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=0&p=MSAAUTOENROLL&c=MR000T&t=7193&s=2023-12-05T10:09:17.8366126+00:00&ts=2023-12-05T13:20:15.3280204+00:00&rwred=0&wls=2&wlb=0&ccp=0&lka=0&lkt=0&aad=0&TH=&e=jioHCSfrCRI3YQn0NPHhl1PAX8Yc12pH1jVSo32L5Ww5j3pitUukLsRjj_o41wYC0n16NDBoz4Hv_BDThAxHxA&A=BDCC40DFB92631D76FAD76F2FFFFFFFF`
})).data.generatedImage.data[0]
return conn.sendFile(m.chat, res, text,"",m)   
} catch(e) {
console.log(e)
throw `Error In getting data!`
}
}
handler.help = ['bing-img']
handler.tags = ['tools']
handler.premium = true
handler.command = ['bing','bing-img']

export default handler*/