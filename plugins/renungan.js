let handler = async(m, { conn }) => {
  await conn.sendMessage(m.chat, {
text: `Jadikan untuk penuntun ke masa depan`,
contextInfo: {
externalAdReply: {
title: me,
thumbnailUrl: pickRandom(global.renungan),
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
   //conn.sendFile(m.chat, pickRandom(global.renungan), 'renungan.jpeg', 'Nih renunganmu, jangan lupa dijadikan pelajaran yah buat masa depan nanti...', m)
}
handler.help = ['renungan']
handler.tags = ['random']
handler.command = /^(renungan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.fail = null

handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.renungan = [
"https://telegra.ph/file/f52f8d6312f3ac2590727.jpg", 
"https://telegra.ph/file/35cb9decc525a3453ba87.jpg",
"https://telegra.ph/file/5996566cb5cd615f60f51.jpg",
"https://telegra.ph/file/87ecb0f385ae390c609e8.jpg",
"https://telegra.ph/file/7ca48dd2329937b7f86da.jpg", 
"https://telegra.ph/file/e2d603fa0ec9004ca9e2f.jpg",
"https://telegra.ph/file/f8f9ac3d38c9e3c9456ec.jpg",
"https://telegra.ph/file/9e1f626f4005b6f16d904.jpg",
"https://telegra.ph/file/6300478b6ffdf0c0001e9.jpg",
"https://telegra.ph/file/dca222749fb98ce0384f7.jpg",
"https://telegra.ph/file/295f6f6164794a2156d2e.jpg",
"https://telegra.ph/file/429cb39112f2870327398.jpg",
"https://telegra.ph/file/9d96d5fcc89c6f30e086f.jpg",
"https://telegra.ph/file/c396c9da3800536792139.jpg",
"https://telegra.ph/file/6d2fc9ac5c878fa93c43f.jpg",
"https://telegra.ph/file/09174bfbe94a756a90411.jpg",
"https://telegra.ph/file/2dcd363e5f9eb42d88cc0.jpg",
"https://telegra.ph/file/798daf4f7a87bbabc8694.jpg",
"https://telegra.ph/file/4052c388390385d9c79f3.jpg", 
"https://telegra.ph/file/d8f1a14f712d6a860b36c.jpg",
"https://telegra.ph/file/eed16ec2df3cc22102e7b.jpg",
"https://telegra.ph/file/0738833300f1620285b36.jpg",
"https://telegra.ph/file/dc464f93b5a579c279979.jpg",
"https://telegra.ph/file/0e0aa4e97675b2e649ddc.jpg",
"https://telegra.ph/file/2b58e9e63b38ac837e8cd.jpg",
"https://telegra.ph/file/49029a0e94ee5d710b6a9.jpg",
"https://telegra.ph/file/3a1ecc7774208670ec781.jpg",
"https://telegra.ph/file/46a125a6a3dc13cee931e.jpg",
"https://telegra.ph/file/37c358438489180b48723.jpg",
"https://telegra.ph/file/6287bc3f9b7876aeb5554.jpg",
"https://telegra.ph/file/684f268210c2de5d44bc6.jpg",
"https://telegra.ph/file/166b0d7fd1fcc55a09449.jpg",
"https://telegra.ph/file/f6713bdd595530bb38df9.jpg",
"https://telegra.ph/file/6738bff78091aa85a6cd7.jpg",
"https://telegra.ph/file/370d394c23fd162c6c9be.jpg",
"https://telegra.ph/file/38f2ceb0daf966fe7ddcf.jpg",
"https://telegra.ph/file/d23c4cedab7bf64915ba2.jpg",
"https://telegra.ph/file/3e72698c996538ee50ccf.jpg",
"https://telegra.ph/file/0379370add3bbae122008.jpg",
"https://telegra.ph/file/873d1b18acf16088786ca.jpg",
"https://telegra.ph/file/823e0664c7edec135b847.jpg",
"https://telegra.ph/file/8c8da910ab52c7a2b7ccf.jpg",
"https://telegra.ph/file/8037b52b84e8c39060f89.jpg",
"https://telegra.ph/file/e6da062c873aca03d25d4.jpg",
"https://telegra.ph/file/ef307b95c45e77defd0e1.jpg",
"https://telegra.ph/file/d66123bde1e967adf72b9.jpg",
"https://telegra.ph/file/7a2a376d1d152d382ae1a.jpg",
"https://telegra.ph/file/f8d0253bb97ea30e04275.jpg",
"https://telegra.ph/file/bbe65705f8dc9558eb177.jpg",
"https://telegra.ph/file/c7530031da08b4441ee9f.jpg",
"https://telegra.ph/file/5c1f7320f1b457911c3c2.jpg",
"https://telegra.ph/file/5a8600f4651e9497f6562.jpg",
"https://telegra.ph/file/053032e59ced4dac9ed3d.jpg",
"https://telegra.ph/file/ef61d077b685d47a11ff0.jpg",
"https://telegra.ph/file/c8a5cc9b9da57299a1f25.jpg",
"https://telegra.ph/file/2ed057545501fc3bc8de0.jpg",
"https://telegra.ph/file/b3b7c0c22e7dba04cab03.jpg",
"https://telegra.ph/file/62579a62376550e6590b1.jpg",
"https://telegra.ph/file/d140b0791799af2f67315.jpg",
"https://telegra.ph/file/81fd213f74b1235ef18fc.jpg",
"https://telegra.ph/file/d00db1507843f4ead46d8.jpg",
"https://telegra.ph/file/dedfa2294f4eb845acac4.jpg",
"https://telegra.ph/file/2b3700178b39c9c01e9b4.jpg",
"https://telegra.ph/file/a7be3d06c7dd9b8475579.jpg",
"https://telegra.ph/file/f7d91295ec35c44af8c90.jpg",
"https://telegra.ph/file/01e42d9181311dd7d2d70.jpg",
"https://telegra.ph/file/e5cf6db288acbfbb13f2b.jpg",
"https://telegra.ph/file/5a6ee797141b96fcebcce.jpg",
"https://telegra.ph/file/88d5b22d7a40365f59fc4.jpg",
"https://telegra.ph/file/0de4de20e35f6c9b12af6.jpg",
"https://telegra.ph/file/6b60a05a32e7bdbb62c2d.jpg",
"https://telegra.ph/file/549e5a1dbd0aebbd909c6.jpg",
"https://telegra.ph/file/d9d0c658ef1ea088d3579.jpg",
"https://telegra.ph/file/4c8fa9809897b7bd3eb03.jpg",
"https://telegra.ph/file/a58ee2c51fdc6c78ed7f6.jpg",
"https://telegra.ph/file/f2253a885cb84af5d588c.jpg",
"https://telegra.ph/file/f17bd255b176da6943240.jpg",
"https://telegra.ph/file/279afb02b1fcf93abdae4.jpg",
"https://telegra.ph/file/8ba4a8f31cf0673f6aa87.jpg",
"https://telegra.ph/file/c842818563065460b022e.jpg",
"https://telegra.ph/file/99e10142aeef70961437a.jpg",
"https://telegra.ph/file/33da8321603f78cd165f4.jpg",
"https://telegra.ph/file/63678732998176b22fa96.jpg",
"https://telegra.ph/file/b79bb874be90a34cd5786.jpg",
"https://telegra.ph/file/148875b883f91ac8b42e6.jpg",
"https://telegra.ph/file/275d948e0ed99652b4c52.jpg",
"https://telegra.ph/file/dbfa4e1043d1bbc9441b2.jpg",
"https://telegra.ph/file/1ab030093aea5937e0468.jpg",
"https://telegra.ph/file/b5b64e5e5ee0df73bc5b5.jpg",
"https://telegra.ph/file/a7032cdd783d8f1656424.jpg",
"https://telegra.ph/file/5ea4218fedab8e124496b.jpg",
"https://telegra.ph/file/0e0fef10d278f886a5f4a.jpg",
"https://telegra.ph/file/09e81d73081d6f2811ca3.jpg",
"https://telegra.ph/file/816866bef7a307029e6b6.jpg",
"https://telegra.ph/file/5b5736027ae57a787d00c.jpg",
"https://telegra.ph/file/68899ab649fa4711905ce.jpg",
"https://telegra.ph/file/47b0c825cdf8ebaa90a05.jpg",
"https://telegra.ph/file/06aaa229521191de3895e.jpg",
"https://telegra.ph/file/68551e562c4e343efd965.jpg",
"https://telegra.ph/file/9487c11c728cd279b8da3.jpg"
]