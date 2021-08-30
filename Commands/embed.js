
/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "embed",
	description: "えむぶれど",
	type: "BOTH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		const user = message instanceof Discord.CommandInteraction ? message.user : message.author;

		embed
			.setTitle("This is a test embed")
			.setURL("https://ferotiq.dev")
			.setAuthor(
				user.username,
				user.avatarURL({ dynamic: true }),
				"https://ferotiq.dev/"
			)
			.setDescription(
				"this is some plain text,\nhere is a link: [this is a test link](https://ferotiq.dev)"
			)
			.setColor("BLURPLE")
			.setThumbnail(user.avatarURL({ dynamic: true }))
			.setTimestamp()
	     	.addFields(
				{
					name: "Bot Version",
					value: "1.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});