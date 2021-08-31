const Command = require("../Structures/Command.js")
const Discord = require("discord.js")
const fs = require('fs')
const config = require('../Data/config.json')


module.exports = new Command({
    name:"help",
    description:"helpコマンドを表示します。",
    type:"BOTH",
    slashCommandOptions:[],

    async run(message , client){
        let commands_description = "";
        fs.readdirSync("./Commands")
        .filter(file => file.endsWith(".js"))      
        .forEach(file => {
            /**
             * @type {Command}
             */
        const commands = require(`../Commands/${file}`)
        if(commands.description == "") return
        commands_description += config.prefix + commands.name + "``` " + commands.description.replace(/\n/g, "``` ") + "```\n";
    })
        const embed = new Discord.MessageEmbed()
        embed.setTitle('[ｲﾇﾜﾜﾝ] helpコマンド')
       .setDescription(commands_description)
       .setColor("RANDOM");
       const button = new Discord.MessageButton()
       button.setStyle("DANGER")
       .setCustomId("helpdele")
       .setLabel("メッセージを削除する")
       message.channel.send({ embeds: [embed],
                            components:[new Discord.MessageActionRow().addComponents(button)] });


    }
})
