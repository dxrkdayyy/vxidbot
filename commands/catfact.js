const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const facts = [
    "Cats sleep for around 12 to 16 hours a day.",
    "A group of cats is called a clowder.",
    "Cats can't taste sweetness.",
    "A cat's purr can range from 25 to 150 Hz.",
    "Cats have five toes on their front paws, but only four on the back.",
    "Cats can rotate their ears 180 degrees.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("catfact")
        .setDescription("Get a random cat fact")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await interaction.reply(fact);
    },
};
