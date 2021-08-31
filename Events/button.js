const event = require('../Structures/event.js')

module.exports = new event('interactionCreate',(client, interaction) => {
    if (interaction.user.bot || !interaction.isCommand() || !interaction.guild)
    return;

    const args = [
    interaction.commandName,
    ...client.commands
        .find(cmd => cmd.name.toLowerCase() == interaction.commandName)
        .slashCommandOptions.map(v => `${interaction.options.get(v.name).value}`)
    ];

    const command = client.commands.find(cmd => cmd.name.toLowerCase() == interaction.commandName);

    if (!command) return interaction.reply("That is not a valid command!");

    const permission = interaction.member.permissions.has(command.permission);

    if (!permission)
    return interaction.reply(
        "You do not have the correct permissions to run this command!"
    );

    /**
     * @type ${costomId}
     */
 if (interaction.customId === "message") {
     interaction.defer(10000000);
            interaction.reply({
                content: "テスト成功！やったぁ！",
                ephemeral: true
            });
        }
    if (interaction.customId === "helpdel") {
       interaction.defer(10000000);
             interaction.reply({
                content: "テスト成功！やったぁ！",
                ephemeral: true
            });
        }
    command.run(interaction, args, client);
});  

