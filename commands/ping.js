module.exports = {
  name: "ping",
  description: "Ping!",
  aliases: ['pg'],
  run(client, message, args) {
    message.channel.send("Pong.");
  }
};
