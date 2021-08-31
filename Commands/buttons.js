const command = require('../Structures/Command.js')
const Discord = require('discord.js')

module.exports = new command({
 name:"button",
description:"",

 async run(message, args , client){
    const button = new Discord.MessageButton()
    button.setStyle("PRIMARY")
    .setCustomId("message")
    .setLabel("nube")
  await message.channel.send({ content : "This is button test.",
  components:[new Discord.MessageActionRow().addComponents(button)] });
 },

})