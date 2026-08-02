const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const prompts = [
    "fallen asleep in class",
    "sent a text to the wrong person",
    "pretended to know a song you'd never heard",
    "tripped in public and pretended it was on purpose",
    "forgotten someone's name right after they said it",
    "laughed so hard you cried",
    "eaten food off the floor",
    "stayed up all night for no real reason",
    "lied about being busy to avoid plans",
    "rage quit a video game",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nevereverhave")
        .setDescription("Get a random never-have-I-ever prompt")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const prompt = prompts[Math.floor(Math.random() * prompts.length)];
        await interaction.reply(`Never have I ever ${prompt}`);
    },
};
