const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const animals = ["wolf", "owl", "fox", "otter", "eagle", "bear", "dolphin", "raven", "tiger", "turtle"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("spiritanimal")
        .setDescription("Find out your spirit animal")
        .addUserOption(option => option.setName("user").setDescription("Whose spirit animal to find").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const animal = animals[Math.floor(Math.random() * animals.length)];
        await interaction.reply(`${user.username}'s spirit animal: ${animal}`);
    },
};
