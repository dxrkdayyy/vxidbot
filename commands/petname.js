const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const names = ["Biscuit", "Nugget", "Waffles", "Peanut", "Mochi", "Pickle", "Noodle", "Bean", "Pepper", "Olive"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("petname")
        .setDescription("Generate a random pet name")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const name = names[Math.floor(Math.random() * names.length)];
        await interaction.reply(`Suggested pet name: ${name}`);
    },
};
