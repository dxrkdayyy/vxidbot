const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription("Get a user's avatar")
    .addUserOption(option =>
      option.setName('user').setDescription('Whose avatar to show').setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ size: 1024, extension: 'png' }))
      .setColor('Random');
    await interaction.reply({ embeds: [embed] });
  },
};
