require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, GatewayIntentBits, Collection, MessageFlags } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Load every command file from ./commands into a Collection
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.data.name, command);
}

// spam.js exports its message map so the button handler below can read it
const { spamMessages } = require("./commands/spam.js");

client.once("clientReady", () => {
    console.log(`${client.user.tag} is online`);
});

client.on("interactionCreate", async interaction => {
    try {
        // Slash commands
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;
            await command.execute(interaction);
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
