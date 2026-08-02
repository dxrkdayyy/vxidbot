const { SlashCommandBuilder } = require('discord.js');

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I told my computer I needed a break, and it froze.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why did the developer go broke? Because he used up all his cache.",
  "I would tell you a joke about UDP, but you might not get it.",
  "There are 10 types of people: those who understand binary and those who don't.",
  "Why did the scarecrow become a successful programmer? He was outstanding in his field.",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Get a random joke'),
  async execute(interaction) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(`😂 ${joke}`);
  },
};
