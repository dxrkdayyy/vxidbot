const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("iqcalc")
        .setDescription("Randomly calculate someone's IQ")
        .addUserOption(option => option.setName("user").setDescription("Who to check").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const iq = Math.floor(Math.random() * 121) + 60;
        await interaction.reply(`🧠 ${user.username}'s IQ is **${iq}**`);
    },
};
