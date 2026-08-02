const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const lines = [
    "Are you a parking ticket? Because you've got fine written all over you.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Google? Because you've got everything I've been searching for.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    "If you were a vegetable, you'd be a cute-cumber.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pickupline")
        .setDescription("Get a random (cheesy, wholesome) pickup line")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const line = lines[Math.floor(Math.random() * lines.length)];
        await interaction.reply(line);
    },
};
