const { SlashCommandBuilder } = require('discord.js');

const responses = [
  'Yes, definitely.', 'No way.', 'Ask again later.', 'It is certain.',
  'Very doubtful.', 'Signs point to yes.', 'My sources say no.',
  'Without a doubt.', 'Cannot predict now.', 'Absolutely not.',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Ask the magic 8-ball a question')
    .addStringOption(option =>
      option.setName('question').setDescription('Your question').setRequired(true)),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const answer = responses[Math.floor(Math.random() * responses.length)];
    await interaction.reply(`🎱 **Q:** ${question}\n**A:** ${answer}`);
  },
};
