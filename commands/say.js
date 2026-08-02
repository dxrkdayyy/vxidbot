const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType, MessageFlags } = require("discord.js");

const allContexts = [
    InteractionContextType.Guild,
    InteractionContextType.BotDM,
    InteractionContextType.PrivateChannel
];
const allIntegrationTypes = [
    ApplicationIntegrationType.GuildInstall,
    ApplicationIntegrationType.UserInstall
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Makes the bot say something")
        .addStringOption(option =>
            option.setName("message").setDescription("What the bot should say").setRequired(true))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const message = interaction.options.getString("message");
        await interaction.reply({ content: "Sent!", flags: MessageFlags.Ephemeral });
        try {
            await interaction.channel.send(message);
        } catch (err) {
            await interaction.followUp(message);
        }
    },
};
