const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ageestimate")
        .setDescription("Randomly 'guess' someone's age (just for laughs, not accurate)")
        .addUserOption(option => option.setName("user").setDescription("Who to guess").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const age = Math.floor(Math.random() * 60) + 10;
        await interaction.reply(`🔮 My totally scientific guess: ${user.username} is **${age}** years old`);
    },
};
