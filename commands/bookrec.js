const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const books = [
    "Project Hail Mary", "The Hobbit", "Dune", "Atomic Habits",
    "The Name of the Wind", "Educated", "1984", "The Martian",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bookrec")
        .setDescription("Get a random book recommendation")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const book = books[Math.floor(Math.random() * books.length)];
        await interaction.reply(`Try reading: ${book}`);
    },
};
