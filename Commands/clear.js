const command = require('../Structures/Command.js')
const { permission } = require('./buttons.js')

module.exports = new command ({
    name:"clear",
    description:"clear the message.",
    permission:"ADMINISTRATOR",

    async run (message,args,client){
        const amount = args[1]
        if(!amount || isNaN(amount)) return message.reply('数字が記入されていません。')
        const amountParsed = parseInt(amount);
        if(amountParsed > 100) return message.reply('100以上のメッセージは削除できません。')
        message.channel.bulkDelete(amountParsed, true);
       const msg = await message.channel.send(amountParsed+'個のメッセージを削除しました。')
        setTimeout(() => msg.delete(), 5000)   
    }
    
})