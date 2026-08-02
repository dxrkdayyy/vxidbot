const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const prompts = [
    "have the ability to fly, or be invisible?",
    "always have to sing instead of speak, or dance everywhere you walk?",
    "live without music, or live without movies?",
    "have unlimited pizza for life, or unlimited tacos for life?",
    "be able to teleport anywhere, or read minds?",
    "never use social media again, or never watch another movie/show?",
    "be the funniest person in the room, or the smartest?",
    "have a rewind button for your life, or a pause button?",
    "explore space, or explore the deep ocean?",
    "always be 10 minutes late, or always be 20 minutes early?",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("wouldyourather")
        .setDescription("Get a random would-you-rather question")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const prompt = prompts[Math.floor(Math.random() * prompts.length)];
        await interaction.reply(`Would you rather ${prompt}`);
    },
};
