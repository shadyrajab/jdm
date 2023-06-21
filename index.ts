import { Client } from "discord.js";

require('dotenv').config()

const client = new Client({
    intents: [
        'GuildMessages',
        'Guilds',
        'GuildMembers',
        'GuildMessageReactions'
    ]
})

client.on('ready', client => {
    console.log(`${client.user.username} está online`)
})

client.login(process.env.TOKEN)

