module.exports = {
  name: "server",
  description: "Display info about this server.",
  aliases: ['ser'],
  run(client, message, args) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
    );
  }
};
