'use strict'

const Discord = require('discord.js')

global._config = require('./local_modules/config')
const dispatcher = require('./local_modules/dispatcher')

const client = new Discord.Client()
client.commands = new Discord.Collection()

dispatcher.add(client, 'events')
dispatcher.add(client, 'commands')

client.on('message', message => dispatcher.run(client, message))

client.login(global._config.token)