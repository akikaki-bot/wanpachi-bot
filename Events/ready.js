const event = require('../Structures/event.js')
const config = require('../Data/config.json')

module.exports = new event('ready', (client) => {
console.log('bot is ready!')
client.user.setActivity({
    name:`${config.prefix}help | あきかきさーばーでべろっぱーぼっと`,
    type:"LISTENING"
})
})