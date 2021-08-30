const Discord = require('discord.js')
const event = require('../Structures/event.js')


module.exports = new event('guildMemberAdd', (message , member) => {
const channel = member.guild.channels.cache.find(c => c.name == "welcome")
const embed = new Discord.MessageEmbed()
.setTitle('新たな犠牲者')
.setDescription(`どうしてこのサーバーに来ちゃったの？ \n **${member.user.tag} さんが\n **このサーバーに迷い込みました。**`)
channel.send({embeds:[embed]})
})