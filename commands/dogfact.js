const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const facts = [
    "A dog's sense of smell is roughly 40 times better than a human's.",
    "Dogs have three eyelids.",
    "Puppies are born deaf and blind.",
    "A dog's nose print is unique, like a human fingerprint.",
    "Dogs can learn more than 100 words and gestures.",
    "The Basenji is a dog breed known for not being able to bark.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("dogfact")
        .setDescription("Get a random dog fact")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await interaction.reply(fact);
    },
};
