module.exports = {
  name: "user-info",
  description: "Display info about yourself.",
  aliases: ['ui'],
  run(client, message, args) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  }
};
