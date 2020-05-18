const express = require("express"),
  http = require("http"),
  app = express();

function run(client, time) {
  var status = {
    status: "Alive",
    channels: client.channels.cache.size,
    servers: client.guilds.cache.size,
    users: client.users.cache.size
  };

  app.get("/", (req, res) => res.json(status));
  app.get("/", (req, res) => res.sendStatus(200));
  app.listen(process.env.PORT);

  setInterval(
    () => http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`),
    time
  );
}

module.exports.run = run;
