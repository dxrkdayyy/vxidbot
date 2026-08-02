const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('math')
    .setDescription('Evaluate a simple math expression, e.g. 2+2*3')
    .addStringOption(option =>
      option.setName('expression').setDescription('Math expression (+ - * / ( ) only)').setRequired(true)),
  async execute(interaction) {
    const expr = interaction.options.getString('expression');
    if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
      return interaction.reply({ content: 'Only numbers and + - * / ( ) are allowed.', ephemeral: true });
    }
    try {
      const result = Function(`"use strict"; return (${expr})`)();
      await interaction.reply(`🧮 ${expr} = **${result}**`);
    } catch {
      await interaction.reply({ content: "That expression didn't work — check your syntax.", ephemeral: true });
    }
  },
};
