const Command = require('../Structures/Command.js')
const { run } = require('./help.js')

module.exports = new Command({
    name:"suya",
    description:"すやぁbot..?なにそれ...?",

    async run(message) {
        message.channel.send('( ˘ω˘)ｽﾔｧ')
    }
})