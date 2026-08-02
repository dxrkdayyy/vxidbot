const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('choose')
    .setDescription('Let the bot pick between options')
    .addStringOption(option =>
      option.setName('options').setDescription('Comma-separated list, e.g. pizza, tacos, sushi').setRequired(true)),
  async execute(interaction) {
    const raw = interaction.options.getString('options');
    const choices = raw.split(',').map(c => c.trim()).filter(Boolean);
    if (choices.length < 2) {
      return interaction.reply({ content: 'Give me at least 2 options separated by commas.', ephemeral: true });
    }
    const pick = choices[Math.floor(Math.random() * choices.length)];
    await interaction.reply(`🤔 I choose: **${pick}**`);
  },
};
