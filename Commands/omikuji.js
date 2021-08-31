const command = require('../Structures/Command.js')

module.exports = new command ({
    name:"say",
    description:"ただのsayコマンド。",

    async run(message, args){
        if(args = null) return message.channel.send('ﾜﾝ! (因数が不正です。)')
        else {
        message.channel.send(args)
        message.delete()
        }
    }
})