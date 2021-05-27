module.exports = {
    name: 'ping',
    aliases: ['p'],
    cooldown: 0,
    permissions: ['SEND_MESSAGES'],
    description: "This is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('pong!');
    }
}