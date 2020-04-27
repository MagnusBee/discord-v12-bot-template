'use strict'

global._config = require('./local_modules/config.json')
const dispatcher = require('./local_modules/dispatcher')

const Discord = require('discord.js')
const fs = require('fs')

const client = new Discord.Client()
client.commands = new Discord.Collection()

fs.readdir('./local_modules/events/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    const event = require(`./local_modules/events/${file}`)
    let eventName = file.split('.')[0]
    console.log(`• Attempting to load event: ${eventName}`)
    client.on(eventName, event.bind(null, client))
  })
})

fs.readdir('./local_modules/commands/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let props = require(`./local_modules/commands/${file}`)
    let commandName = file.split('.')[0]
    console.log(`• Attempting to load command: ${commandName}`)
    client.commands.set(commandName, props)
  })
})

client.on('message', message => dispatcher(client, message))

client.login(global._config.token)