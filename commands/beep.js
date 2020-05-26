module.exports = {
  name: "beep",
  description: "Beep!",
  aliases: ['bp'],
  run(client, message, args) {
    message.channel.send("Boop.");
  }
};
