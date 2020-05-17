'use strict'

const Discord = require('discord.js')

if(process.env.token && process.env.prefix) {
  const dispatcher = require('./local_modules/dispatcher')
  const client = new Discord.Client()
  client.commands = new Discord.Collection()
  dispatcher.add(client, 'events')
  dispatcher.add(client, 'commands')
  client.on('message', message => dispatcher.run(client, message))
  client.login(process.env.token)
} else console.log("You have not configured your .env file")