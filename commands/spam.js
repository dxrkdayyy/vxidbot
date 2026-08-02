const {
    SlashCommandBuilder,
    InteractionContextType,
    ApplicationIntegrationType,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    MessageFlags
} = require("discord.js");

const allContexts = [
    InteractionContextType.Guild,
    InteractionContextType.BotDM,
    InteractionContextType.PrivateChannel
];
const allIntegrationTypes = [
    ApplicationIntegrationType.GuildInstall,
    ApplicationIntegrationType.UserInstall
];

// Temporary storage: customId -> message text.
// Exported so index.js's button handler can read it too.
const spamMessages = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("spam")
        .setDescription("Shows a button that sends your message 5 times")
        .addStringOption(option =>
            option.setName("message").setDescription("The message to spam").setRequired(true))
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts),
    async execute(interaction) {
        const message = interaction.options.getString("message");
        const id = `spam_${interaction.id}`;
        spamMessages.set(id, message);

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId(id)
                .setLabel("Start")
                .setStyle(ButtonStyle.Primary)
        );

        await interaction.reply({
            content: `Press the button to send: "${message}" (x5)`,
            components: [row],
            flags: MessageFlags.Ephemeral
        });
    },
    spamMessages, // exported for the button-click handler in index.js
};
