const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timestamp')
    .setDescription('Get the current Discord timestamp in all formats'),
  async execute(interaction) {
    const now = Math.floor(Date.now() / 1000);
    const formats = ['t', 'T', 'd', 'D', 'f', 'F', 'R'];
    const lines = formats.map(f => `<t:${now}:${f}> — \`<t:${now}:${f}>\``);
    await interaction.reply(lines.join('\n'));
  },
};
