module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	run(client, message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar')
		}
		message.channel.send(`First argument: ${args[0]}`)
	}
}
