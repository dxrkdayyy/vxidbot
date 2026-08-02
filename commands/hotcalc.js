const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hotcalc")
        .setDescription("Just-for-fun random hotness meter")
        .addUserOption(option => option.setName("user").setDescription("Who to check").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const percent = Math.floor(Math.random() * 101);
        const bar = "🔥".repeat(Math.round(percent / 10)) + "❄️".repeat(10 - Math.round(percent / 10));
        await interaction.reply(`${user.username} is **${percent}%** hot\n${bar}`);
    },
};
