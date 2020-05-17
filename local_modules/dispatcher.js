const fs = require('fs')

function run(client, message) {
  if (message.author.bot) return
  if (message.content.indexOf(process.env.prefix) !== 0) return
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  if (!client.commands.has(command)) return
  try {
    client.commands.get(command).run(client, message, args)
  } catch (error) {
    console.error(error)
    message.reply('An error occurred while processing the command, inform the administrator!')
  }
}
module.exports.run = run

function add(client, type) {
  fs.readdir(`${__dirname}/${type}/`, (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
      if (!file.endsWith('.js')) return
      if(type === 'events') client.on(file.split('.')[0], require(`./${type}/${file}`).bind(null, client))
      else if(type === 'commands') client.commands.set(file.split('.')[0], require(`./${type}/${file}`))
    })
  })
}
module.exports.add = add