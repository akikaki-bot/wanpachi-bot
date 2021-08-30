const event = require('../Structures/event.js')

module.exports = new event('ready', (client) => {
console.log('bot is ready!')
client.user.setActivity({
    name:"i.help | わんぱち",
    type:"LISTENING"
})
})