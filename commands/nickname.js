const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const adjectives = ["Silent", "Turbo", "Sneaky", "Golden", "Cosmic", "Rogue", "Lucky", "Iron"];
const nouns = ["Wolf", "Falcon", "Otter", "Comet", "Panda", "Phantom", "Rocket", "Tiger"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nickname")
        .setDescription("Generate a random nickname for someone")
        .addUserOption(option => option.setName("user").setDescription("Who to nickname").setRequired(false))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user = interaction.options.getUser("user") || interaction.user;
        const nickname = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
        await interaction.reply(`${user.username}'s new nickname: ${nickname}`);
    },
};
