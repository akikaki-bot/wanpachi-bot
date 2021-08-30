/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "ping",
	description: "ぴんぐぽんぐ",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
     	const embed = new Discord.MessageEmbed();
		embed.setTitle('Pong:ping_pong:')
		.addField('API PING ',`${client.ws.ping} ms`)
		.addField('Ping',`${Date.now() - message.createdTimestamp}ms`)
		.setColor('AQUA')	
		message.channel.send({ embeds:[embed]})
		
	}
});