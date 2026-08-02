const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('Create a yes/no poll')
    .addStringOption(option =>
      option.setName('question').setDescription('The poll question').setRequired(true)),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const embed = new EmbedBuilder()
      .setTitle('📊 Poll')
      .setDescription(question)
      .setFooter({ text: `Asked by ${interaction.user.username}` })
      .setColor('Yellow');
    const message = await interaction.reply({ embeds: [embed], fetchReply: true });
    await message.react('👍');
    await message.react('👎');
  },
};
