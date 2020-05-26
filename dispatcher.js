const fs = require("fs");

function run(client, message) {
  if (message.author.bot) return;
  if (message.content.indexOf(process.env.prefix) !== 0) return;
  const args = message.content
    .slice(process.env.prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(!client.commands.has(cmd)) {
    if (!client.aliases.get(cmd)) {
    } else client.commands.get(client.aliases.get(cmd)).run(client, message, args);
  } else client.commands.get(cmd).run(client, message, args);
}

function add(client, type) {
  fs.readdir(`${__dirname}/${type}/`, (err, files) => {
    if (err) return console.error(err);
    for (let file of files) {
      if (!file.endsWith(".js")) return;
      if (type === "events") client.on(file.split(".")[0], require(`./${type}/${file}`).bind(null,client));
      else if (type === "commands") {
        var cmd = require(`./${type}/${file}`)
        client.commands.set(file.split(".")[0], cmd);
        if (cmd.aliases) cmd.aliases.forEach(a => client.aliases.set(a, cmd.name));
      }
    };
  });
}
module.exports.add = add;
