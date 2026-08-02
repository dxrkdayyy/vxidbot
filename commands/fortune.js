const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const fortunes = [
    "A great opportunity is closer than you think.",
    "Good things come to those who plan ahead.",
    "Your patience will soon be rewarded.",
    "An old friend will bring good news.",
    "Now is a good time to start that project.",
    "Trust the process, results are coming.",
    "A change of scenery will do you good.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fortune")
        .setDescription("Crack open a random fortune cookie")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        await interaction.reply(fortune);
    },
};
