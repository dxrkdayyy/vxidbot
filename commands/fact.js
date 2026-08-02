const { SlashCommandBuilder } = require('discord.js');

const facts = [
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts.",
  "A day on Venus is longer than a year on Venus.",
  "Honey never spoils.",
  "Sharks existed before trees.",
  "The Eiffel Tower can grow taller in summer due to heat expansion.",
  "Wombat poop is cube-shaped.",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('Get a random fun fact'),
  async execute(interaction) {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    await interaction.reply(`🧠 Did you know? ${fact}`);
  },
};
