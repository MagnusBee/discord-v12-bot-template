const keepAlive = require("../keepAlive.js");

module.exports = client => {
  keepAlive.run(client, 280000);
  console.log("The bot has started successfully!");
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );
};
