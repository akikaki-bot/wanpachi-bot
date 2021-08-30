const Command = require("../Structures/Command.js")
const Discord = require("discord.js")
const fs = require('fs')
const config = require('../Data/config.json')


module.exports = new Command({
    name:"help",
    description:"helpコマンドを表示します。",

    async run(message , client){
        fs.readdirSync('./Commands')
        .filter(file => file.endsWith('.js'))
        .forEach(file => {
            /**
             * @type {Command}
             */
        
        let commands_description = "";
        const command = require(`../Commands/${file}`)
        commands_description = ("> " + config.prefix + command.name + "\n``` " + command.description.replace(/\n/g, "\n> ") + "```\n");
        const embed = new Discord.MessageEmbed()
        embed.setTitle('[ｲﾇﾜﾜﾝ] helpコマンド')
       .setDescription(commands_description)

        message.channel.send({ embeds:[embed]})
})
        

    }
})
