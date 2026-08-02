require("dotenv").config();
const {
    Client,
    GatewayIntentBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    MessageFlags
} = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Temporary storage: customId -> message text
const spamMessages = new Map();

client.once("clientReady", () => {
    console.log(`${client.user.tag} is online`);
});

client.on("interactionCreate", async interaction => {
    try {
        // Slash commands
        if (interaction.isChatInputCommand()) {
            if (interaction.commandName === "ping") {
                await interaction.reply("Pong!");
            }

            if (interaction.commandName === "say") {
                const message = interaction.options.getString("message");

                // Reply privately to the user first so no "X used /say" shows publicly
                await interaction.reply({
                    content: "Sent!",
                    flags: MessageFlags.Ephemeral
                });

                try {
                    // Send as a normal message, no attribution
                    await interaction.channel.send(message);
                } catch (err) {
                    // Fallback for contexts where direct channel access fails
                    // (e.g. user-installed app, DMs)
                    await interaction.followUp(message);
                }
            }

            if (interaction.commandName === "spam") {
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
            }
		if (interaction.commandName === "retardchecker") {
    const targetUser = interaction.options.getUser("user");
    const percentage = (Math.random() * 100).toFixed(1);

    await interaction.reply(`${targetUser} is ${percentage}% retarded`);
}
            return;
        }

        // Button clicks
        if (interaction.isButton()) {
            if (interaction.customId.startsWith("spam_")) {
                const message = spamMessages.get(interaction.customId);

                if (!message) {
                    await interaction.reply({
                        content: "This button has expired.",
                        flags: MessageFlags.Ephemeral
                    });
                    return;
                }

                await interaction.deferReply({ flags: MessageFlags.Ephemeral });

                // followUp goes through the interaction webhook, so it works
                // even without direct bot channel access (DMs, user-installs)
                for (let i = 0; i < 5; i++) {
                    await interaction.followUp(message);
                }

                await interaction.editReply("Sent!");
            }
        }
    } catch (error) {
        console.error("Interaction error:", error);

        if (interaction.deferred || interaction.replied) {
            await interaction.editReply("Something went wrong — check the bot's console.").catch(() => {});
        } else {
            await interaction.reply({
                content: "Something went wrong — check the bot's console.",
                flags: MessageFlags.Ephemeral
            }).catch(() => {});
        }
    }
});

client.login(process.env.TOKEN);