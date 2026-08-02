const { SlashCommandBuilder, EmbedBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

function shipBar(percent) {
    const filled = Math.round(percent / 10);
    return "💖".repeat(filled) + "🤍".repeat(10 - filled);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ship")
        .setDescription("Calculate compatibility between two users")
        .addUserOption(option => option.setName("user1").setDescription("First user").setRequired(true))
        .addUserOption(option => option.setName("user2").setDescription("Second user").setRequired(true))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user1 = interaction.options.getUser("user1");
        const user2 = interaction.options.getUser("user2");
        // Deterministic-ish based on IDs so the same pair gets the same result each time
        const seed = parseInt(user1.id) + parseInt(user2.id);
        const percent = seed % 101;

        const embed = new EmbedBuilder()
            .setTitle("💘 Ship Calculator")
            .setDescription(`${user1.username} 💞 ${user2.username}\n\n${shipBar(percent)}\n**${percent}%** compatible`)
            .setColor("Pink");
        await interaction.reply({ embeds: [embed] });
    },
};
