require("dotenv").config();
const {
    REST,
    Routes,
    SlashCommandBuilder,
    InteractionContextType,
    ApplicationIntegrationType
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

const commands = [
    new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!")
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts)
        .toJSON(),

    new SlashCommandBuilder()
        .setName("say")
        .setDescription("Makes the bot say something")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("What the bot should say")
                .setRequired(true)
        )
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts)
        .toJSON(),

    new SlashCommandBuilder()
        .setName("spam")
        .setDescription("Shows a button that sends your message 5 times")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("The message to spam")
                .setRequired(true)
        )
        .setIntegrationTypes(allIntegrationTypes)
        .setContexts(allContexts)
        .toJSON(),
	new SlashCommandBuilder()
    .setName("retardchecker")
    .setDescription("Rates a user's retardnessw ith a percentage")
    .addUserOption(option =>
        option
            .setName("user")
            .setDescription("The user to check")
            .setRequired(true)
    )
    .setIntegrationTypes(allIntegrationTypes)
    .setContexts(allContexts)
    .toJSON()
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering commands...");
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );
        console.log("Commands registered!");
    } catch (error) {
        console.error(error);
    }
})();