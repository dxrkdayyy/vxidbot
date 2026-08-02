const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const games = [
    "Hades", "Celeste", "Stardew Valley", "Portal 2",
    "Hollow Knight", "Outer Wilds", "Minecraft", "Terraria",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gamerec")
        .setDescription("Get a random game recommendation")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const game = games[Math.floor(Math.random() * games.length)];
        await interaction.reply(`Try playing: ${game}`);
    },
};
