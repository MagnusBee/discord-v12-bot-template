require('dotenv').config()

const Discord = require("discord.js");

if (process.env.token.length && process.env.prefix.length) {
  const dispatcher = require("./dispatcher.js");
  const client = new Discord.Client();
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  ['commands', 'events'].forEach(handler => dispatcher.add(client, handler));
  client.on("message", message => dispatcher.run(client, message));
  client.login(process.env.token);
} else console.log("You have not configured your .env file");
