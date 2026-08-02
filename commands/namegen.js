const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const first = ["Thorn", "Elda", "Kael", "Vesper", "Bram", "Sable", "Orin", "Lyra", "Fenn", "Wren"];
const last = ["Ashworth", "Blackwood", "Frostfall", "Stormrider", "Nightshade", "Ironvale", "Duskhollow", "Emberly"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("namegen")
        .setDescription("Generate a random fantasy name")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const name = `${first[Math.floor(Math.random() * first.length)]} ${last[Math.floor(Math.random() * last.length)]}`;
        await interaction.reply(`Your fantasy name: ${name}`);
    },
};
