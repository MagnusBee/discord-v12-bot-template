module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	run(client, message, args) {
		if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("No tienes permisos suficientes")
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!')
		}
		const taggedUser = message.mentions.users.first()
		message.channel.send(`You wanted to kick: ${taggedUser.username}`)
	}
}