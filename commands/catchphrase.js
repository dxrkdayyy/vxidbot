const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const phrases = [
    "Let's get it done.", "No cap, that's the move.", "Built different.",
    "Locked in.", "That's the energy.", "We move.", "Say less.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("catchphrase")
        .setDescription("Generate a random catchphrase for someone")
        .addUserOption(option => option.setName("user").setDescription("Who to assign a catchphrase to").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        await interaction.reply(`${user.username}'s catchphrase: "${phrase}"`);
    },
};
