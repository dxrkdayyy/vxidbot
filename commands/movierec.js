const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const movies = [
    "Inception", "The Grand Budapest Hotel", "Spirited Away", "Interstellar",
    "Parasite", "The Truman Show", "Whiplash", "Coco", "Arrival", "Knives Out",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("movierec")
        .setDescription("Get a random movie recommendation")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        await interaction.reply(`Try watching: ${movie}`);
    },
};
