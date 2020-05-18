module.exports = {
  name: "beep",
  description: "Beep!",
  run(client, message, args) {
    message.channel.send("Boop.");
  }
};
