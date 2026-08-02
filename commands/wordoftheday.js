const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const words = [
    { word: "Serendipity", def: "The occurrence of finding something good without looking for it." },
    { word: "Petrichor", def: "The pleasant smell after rain." },
    { word: "Ephemeral", def: "Lasting for a very short time." },
    { word: "Mellifluous", def: "Sweet or musical sounding." },
    { word: "Sonder", def: "The realization that everyone has a life as complex as your own." },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("wordoftheday")
        .setDescription("Get a random interesting word and its meaning")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const entry = words[Math.floor(Math.random() * words.length)];
        await interaction.reply(`${entry.word}: ${entry.def}`);
    },
};
