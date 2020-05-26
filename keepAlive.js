const express = require("express"),
  moment = require("moment"),
  http = require("http"),
  app = express();

function run(client, timer) {
  app.get("/", (req, res) =>
    res.json({
      status: "Alive",
      channels: client.channels.cache.size,
      servers: client.guilds.cache.size,
      users: client.users.cache.size,
      uptime: moment.duration(process.uptime(), "s").humanize()
    })
  );
  app.get("/", (req, res) => res.sendStatus(200));
  app.listen(process.env.PORT);

  setInterval(() => http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`), timer);
}

module.exports.run = run;
