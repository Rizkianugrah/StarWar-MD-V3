//=============『 Utama 』================== //
global.owner = ['6281387089252'] 
global.mods = ['6281387089252'] 
global.prems = ['6281387089252'] 

//=============『 Info Owner 』============== //
global.nameowner = '𝓜𝓪𝓾𝓵𝓪𝓷𝓪 𝓨𝓾𝓼𝓾𝓯'
global.numberowner = '6281387089252'
global.instagram = 'https://instagram.com/maulana_yusuf.id'
global.github = 'https://github.com/nisabot'
global.dana = '0895622463636'
global.pulsa = '081387089252'
global.gopay = ''

//=============『 Info Bot 』=================//
global.namebot = 'SKYWARBotzMD'
global.gc = 'https://chat.whatsapp.com/CWvL3sXIBPV1urCTauDTPZ'
global.web = 'https://youtube.com/channel/UCGAsDPrOq2irv9xqpG-NEuw' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = 'perbulan 15.000\n3 minggu 10.000\n2 Minggu 7.000\n5 Bulan 60.000'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/eabb6696cf296336effba.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/eabb6696cf296336effba.jpg' //ini juga ganti 
global.lolkey = 'annisabotlinewathsapp' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '❚█══SKYWAR 𝐁𝐎𝐓𝐙‖MD‖'
global.watermark = wm
global.wm2 = '                     「 SKYWAR 𝐎𝐅𝐅𝐂 あ⁩ 」'
global.wm3 = '⫹⫺ ❚█══SKYWAR‖MD‖'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/eabb6696cf296336effba.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*Stiker sedang dibuat*'
global.packname = 'Sticker By'
global.author = '© 𝓜𝓪𝓾𝓵𝓪𝓷𝓪 𝓨𝓾𝓼𝓾𝓯'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
    // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
}
global.APIKeys = { // APIKey Here
// 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': '2d118bcd18c4e779748a84b',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
