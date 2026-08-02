const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const toasts = [
    "To good friends and better memories.",
    "To showing up, even on the hard days.",
    "To the ones who make ordinary days better.",
    "To laughing until it hurts.",
    "To everyone here, may the good times keep coming.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("toast")
        .setDescription("Get a random toast line for a celebration")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const toast = toasts[Math.floor(Math.random() * toasts.length)];
        await interaction.reply(toast);
    },
};
