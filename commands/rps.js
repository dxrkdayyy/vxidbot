const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('Play rock, paper, scissors against the bot')
    .addStringOption(option =>
      option.setName('choice').setDescription('Your move')
        .setRequired(true)
        .addChoices(
          { name: 'Rock', value: 'rock' },
          { name: 'Paper', value: 'paper' },
          { name: 'Scissors', value: 'scissors' },
        )),
  async execute(interaction) {
    const options = ['rock', 'paper', 'scissors'];
    const userChoice = interaction.options.getString('choice');
    const botChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoice === botChoice) result = "It's a tie!";
    else if (
      (userChoice === 'rock' && botChoice === 'scissors') ||
      (userChoice === 'paper' && botChoice === 'rock') ||
      (userChoice === 'scissors' && botChoice === 'paper')
    ) result = 'You win! 🎉';
    else result = 'I win! 🤖';

    await interaction.reply(`You chose **${userChoice}**, I chose **${botChoice}**. ${result}`);
  },
};
