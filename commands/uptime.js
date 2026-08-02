const { SlashCommandBuilder } = require('discord.js');

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('See how long the bot has been running'),
  async execute(interaction) {
    await interaction.reply(`⏱️ Uptime: ${formatUptime(interaction.client.uptime / 1000)}`);
  },
};
