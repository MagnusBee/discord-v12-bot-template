exports.run = (client, message, args) => {
	var template = {
		"embed": {
			"color": 14325833,
			"image": {
				"url": "https://cdn.discordapp.com/embed/avatars/0.png"
			},
			"author": {
				"name": "author name",
				"icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
			}
		}
	}
	if (!message.mentions.users.size) {
		let image = message.author.displayAvatarURL()
		template.embed.author.icon_url = image
		template.embed.author.name = message.author.username
		template.embed.image.url = image
		message.channel.send(template)
	} else {
		message.mentions.users.map(user => {
			let image = user.displayAvatarURL()
			template.embed.author.icon_url = image
			template.embed.author.name = user.username
			template.embed.image.url = image
			message.channel.send(template)
		})
	}
}