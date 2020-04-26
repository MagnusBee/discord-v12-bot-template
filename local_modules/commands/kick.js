exports.run = (client, message, args) => {
	if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("You don't have administrator privileges")
	if (!message.mentions.users.size) {
		return message.reply('you need to tag a user in order to kick them!')
	}
	const taggedUser = message.mentions.users.first()
	message.channel.send(`You wanted to kick: ${taggedUser.username}`)
}