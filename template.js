'use strict'

const config = require('./local_modules/config.json')

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

client.on('message', message => {
  if (message.author.bot) return
  if (message.content.indexOf(config.prefix) !== 0) return
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  if (!client.commands.has(command)) return
  try {
    client.commands.get(command).run(client, message, args)
  } catch (error) {
    console.error(error)
    message.reply('An error occurred while processing the command, inform the administrator!')
  }
})

client.login(config.token)