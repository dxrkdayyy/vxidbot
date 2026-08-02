const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const excuses = [
    "My internet decided to take a personal day.",
    "I was busy debugging my life choices.",
    "My alarm and I had a disagreement.",
    "I got lost on the way, even though I've been there before.",
    "A very important nap happened.",
    "My cat sat on my keyboard and deleted everything.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("excusegen")
        .setDescription("Generate a random excuse for being late")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const excuse = excuses[Math.floor(Math.random() * excuses.length)];
        await interaction.reply(excuse);
    },
};
