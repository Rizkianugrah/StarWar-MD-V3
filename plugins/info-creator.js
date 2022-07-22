let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
function handler(m) {

const q = {

	"key": {

    "participants":"0@s.whatsapp.net",

		"remoteJid": "status@broadcast",

		"fromMe": false,

		"id": ""

	},

	"message": {

		"contactMessage": {

			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Yusuf-Bot;;;FN:Yusuf bot\nORG:Yusuf;\nTEL;type=CELL;type=VOICE;waid=6281387089252:+62 813-8708-9252\nEND:VCARD"

		}

	},

	"participant": "0@s.whatsapp.net"

}

conn.sendContact(m.chat, '6281387089252', 'Maulana Yusuf', m)

m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', q)

}

handler.help = ['owner', 'creator']

handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
