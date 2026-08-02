const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const titles = [
    [0, 20, "certified L rizz"],
    [20, 40, "mid rizz"],
    [40, 60, "decent rizz"],
    [60, 80, "unspoken rizz"],
    [80, 101, "W rizz god"],
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rizzcalc")
        .setDescription("Calculate someone's rizz level")
        .addUserOption(option => option.setName("user").setDescription("Who to check").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const percent = Math.floor(Math.random() * 101);
        const [, , title] = titles.find(([min, max]) => percent >= min && percent < max);
        await interaction.reply(`🎤 ${user.username} has **${percent}%** rizz — ${title}`);
    },
};
