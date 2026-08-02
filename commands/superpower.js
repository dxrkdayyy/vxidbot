const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const powers = [
    "time manipulation", "invisibility", "super strength", "flight",
    "telepathy", "teleportation", "shapeshifting", "elemental control",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("superpower")
        .setDescription("Get a randomly assigned superpower")
        .addUserOption(option => option.setName("user").setDescription("Who to assign a power to").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const power = powers[Math.floor(Math.random() * powers.length)];
        await interaction.reply(`${user.username}'s superpower: ${power}`);
    },
};
