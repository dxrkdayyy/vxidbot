const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hug someone')
    .addUserOption(option =>
      option.setName('user').setDescription('Who to hug').setRequired(true)),
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    if (user.id === interaction.user.id) {
      return interaction.reply(`${interaction.user.username} hugs themselves. 🫂`);
    }
    await interaction.reply(`🫂 ${interaction.user.username} gives ${user.username} a big hug!`);
  },
};
