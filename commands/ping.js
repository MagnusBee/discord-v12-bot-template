module.exports = {
  name: "ping",
  description: "Ping!",
  run(client, message, args) {
    message.channel.send("Pong.");
  }
};
