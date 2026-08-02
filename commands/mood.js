const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const moods = ["chill", "energetic", "focused", "sleepy", "curious", "adventurous", "relaxed", "motivated"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mood")
        .setDescription("Get a random mood for today")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const mood = moods[Math.floor(Math.random() * moods.length)];
        await interaction.reply(`Today's mood: ${mood}`);
    },
};
