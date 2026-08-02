const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const readings = [
    "Today favors bold decisions. Trust your gut.",
    "A good day to reconnect with an old friend.",
    "Focus on rest today, tomorrow brings momentum.",
    "Unexpected news will brighten your afternoon.",
    "Patience pays off today, don't rush the details.",
    "Your energy is contagious today, use it well.",
    "A small risk today leads to a bigger reward later.",
    "Take a break from screens if you can today.",
];

const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("horoscope")
        .setDescription("Get a random daily horoscope")
        .addStringOption(option =>
            option.setName("sign").setDescription("Your zodiac sign").setRequired(true)
                .addChoices(...signs.map(s => ({ name: s, value: s }))))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const sign = interaction.options.getString("sign");
        const reading = readings[Math.floor(Math.random() * readings.length)];
        await interaction.reply(`${sign}: ${reading}`);
    },
};
