const command = require('../Structures/Command.js')

module.exports = new command({
    name:"kick",
    description:"メンバーをキックします。",
    permission:"ADMINISTRATOR",

    async run(message,args,client){
        if(message.mentions.members.size !==1) return message.reply({
            content:'kickする人を選んでください', 
            ephemeral: true 
        });
        const member = message.mentions.members.first();
        if(!member.kicknable) return message.reply({ 
            content:"kickに失敗しました。", 
            ephemeral: true
        });
        await member.kick()
        await message.channel.send('kickに成功しました')
    }
})