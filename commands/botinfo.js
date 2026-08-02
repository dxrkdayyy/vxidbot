const { SlashCommandBuilder, EmbedBuilder, version: djsVersion } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Get info about the bot'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle(interaction.client.user.username)
      .setThumbnail(interaction.client.user.displayAvatarURL())
      .addFields(
        { name: 'Servers', value: `${interaction.client.guilds.cache.size}`, inline: true },
        { name: 'Users', value: `${interaction.client.users.cache.size}`, inline: true },
        { name: 'discord.js', value: djsVersion, inline: true },
        { name: 'Node.js', value: process.version, inline: true },
      )
      .setColor('Purple');
    await interaction.reply({ embeds: [embed] });
  },
};
