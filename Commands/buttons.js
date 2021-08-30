const command = require('../Structures/Command.js')
const Discord = require('discord.js')

module.exports = new command({
 name:"button",
 description:"button test",

 async run(message, args , client){
    const button = new Discord.MessageButton()
    .setStyle("PRIMARY")
    .setLabel("nube")
  await message.channel.send({ buttons: [button] });
 }


})