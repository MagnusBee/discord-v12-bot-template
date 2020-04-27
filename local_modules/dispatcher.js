function dispatcher(client, message) {
  if (message.author.bot) return
  if (message.content.indexOf(global._config.prefix) !== 0) return
  const args = message.content.slice(global._config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  if (!client.commands.has(command)) return
  try {
    client.commands.get(command).run(client, message, args)
  } catch (error) {
    console.error(error)
    message.reply('An error occurred while processing the command, inform the administrator!')
  }
}
module.exports = dispatcher