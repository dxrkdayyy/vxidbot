const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("luckynumber")
        .setDescription("Get your lucky number for today")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const number = Math.floor(Math.random() * 100) + 1;
        await interaction.reply(`Your lucky number today is ${number}`);
    },
};
