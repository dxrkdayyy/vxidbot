const { SlashCommandBuilder, EmbedBuilder, InteractionContextType, ApplicationIntegrationType } = require("discord.js");

const allContexts = [InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel];
const allIntegrationTypes = [ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall];

const moves = [
    "lands a critical hit",
    "dodges at the last second and counters",
    "pulls off a surprise combo",
    "wins with a clutch final move",
    "overwhelms with pure speed",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("battle")
        .setDescription("Simulate a random battle between two users")
        .addUserOption(option => option.setName("user1").setDescription("First fighter").setRequired(true))
        .addUserOption(option => option.setName("user2").setDescription("Second fighter").setRequired(true))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const user1 = interaction.options.getUser("user1");
        const user2 = interaction.options.getUser("user2");
        const winner = Math.random() < 0.5 ? user1 : user2;
        const move = moves[Math.floor(Math.random() * moves.length)];

        const embed = new EmbedBuilder()
            .setTitle("Battle Result")
            .setDescription(`${user1.username} vs ${user2.username}`)
            .addFields({ name: "Winner", value: `${winner.username} ${move}.` })
            .setColor(0x3498DB);
        await interaction.reply({ embeds: [embed] });
    },
};
