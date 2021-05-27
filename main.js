const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

memberCounter(client);

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.get('811437686363389982');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('820387822879375360').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)

});
    client.on('guildMemberRemove', guildMember => {
        guildMember.guild.channels.cache.get('820387822879375360').send(`we are sad to see **<@${guildMember.user.id}>** leave!`)
    });

client.login(process.env.DISCORD_TOKEN);