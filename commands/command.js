module.exports = {
    name: 'command',
    aliases: [],
    cooldown: 10,
    description: "Embeds!",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Rules')
        .setURL('https://www.youtube.com/GxmingWithCxllum')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'be nice'},
            {name: 'Rule 2', value: 'follow twitch'},
            {name: 'Rule 3', value: 'no memes'},
        )
        .setImage()
        .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}