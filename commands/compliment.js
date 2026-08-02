const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const compliments = [
    "has great taste in everything",
    "is way funnier than they think",
    "makes this server better just by being in it",
    "always knows what to say",
    "has main character energy",
    "is criminally underrated",
    "brings good vibes wherever they go",
    "is the definition of reliable",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("compliment")
        .setDescription("Give someone a random compliment")
        .addUserOption(option => option.setName("user").setDescription("Who to compliment").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const compliment = compliments[Math.floor(Math.random() * compliments.length)];
        await interaction.reply(`${user.username} ${compliment}.`);
    },
};
