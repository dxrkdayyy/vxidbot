const { SlashCommandBuilder } = require('discord.js');

const quotes = [
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"Success is not final, failure is not fatal." — Winston Churchill',
  '"In the middle of difficulty lies opportunity." — Albert Einstein',
  '"Do or do not, there is no try." — Yoda',
  '"Stay hungry, stay foolish." — Steve Jobs',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Get a random inspirational quote'),
  async execute(interaction) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await interaction.reply(`💬 ${quote}`);
  },
};
