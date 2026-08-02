const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const riddles = [
    { q: "What has keys but no locks, space but no room, and you can enter but not go inside?", a: "A keyboard" },
    { q: "The more you take, the more you leave behind. What am I?", a: "Footsteps" },
    { q: "What has a neck but no head?", a: "A bottle" },
    { q: "What can travel around the world while staying in a corner?", a: "A stamp" },
    { q: "What gets wetter as it dries?", a: "A towel" },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("riddle")
        .setDescription("Get a random riddle")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const riddle = riddles[Math.floor(Math.random() * riddles.length)];
        await interaction.reply(`${riddle.q}\n||${riddle.a}||`);
    },
};
