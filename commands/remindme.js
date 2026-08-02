const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('remindme')
    .setDescription('Get reminded after a number of minutes')
    .addIntegerOption(option =>
      option.setName('minutes').setDescription('Minutes from now').setRequired(true))
    .addStringOption(option =>
      option.setName('message').setDescription('What to remind you about').setRequired(true)),
  async execute(interaction) {
    const minutes = interaction.options.getInteger('minutes');
    const message = interaction.options.getString('message');

    if (minutes <= 0 || minutes > 1440) {
      return interaction.reply({ content: 'Please pick between 1 and 1440 minutes (24 hours).', ephemeral: true });
    }

    await interaction.reply(`⏰ Got it, I'll remind you in ${minutes} minute(s): "${message}"`);

    setTimeout(() => {
      interaction.followUp(`⏰ <@${interaction.user.id}> Reminder: ${message}`);
    }, minutes * 60 * 1000);
    // Note: this reminder is lost if the bot restarts before it fires, since it's not saved to a database.
  },
};
