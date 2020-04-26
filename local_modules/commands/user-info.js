exports.run = (client, message, args) => {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
}