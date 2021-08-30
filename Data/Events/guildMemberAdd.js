
const Discord = require('discord.js')
const Event = require('../Structures/event.js')

module.exports = new Event("guildMemberAdd", (client, member, message) => {
    const channel = member.guild.channels.cache.find(c => c.name == "welcome")
    if(!channel) return
    const embed = new Discord.MessageEmbed();
    embed.setTitle('New Member')
          .setAuthor(member.user.tag)
         .setDescription('にゅーな犠牲者')
         .addField('あたらしい犠牲者がやってまいりました。','みんなで歓迎しよう！')
         .setColor('#E8822A')
    channel.send({ embeds:[embed] })
})