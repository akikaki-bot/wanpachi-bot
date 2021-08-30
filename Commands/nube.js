const Command = require('../Structures/Command.js')

module.exports = new Command({
    name:"nube",
    description:"└(՞ةڼ◔)」",
    type: "BOTH",
    slashCommandOptions: [],
    permission: "SEND_MESSAGES",
    
    async run(message, args, client){
      message.channel.send('└(՞ةڼ◔)」')
    }
})