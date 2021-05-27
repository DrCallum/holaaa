module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    cooldown: 10,
    description: "Sends the youtube link!",
    execute(message, args, cmd, client, Discord){

        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        // if(message.member.permissions.has("BAN_MEMBERS")){
        //      message.channel.send('You have the permission to ban members');
        //  }  else {
        //       message.channel.send('You DONT have the permission to ban members');
        //  }c

        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('https://www.youtube.com/GxmingWithCxllum');

        } else {
            message.channel.send(`You don't have the correct permissions to use this command!`);
            message.member.roles.add(role).catch(console.error);
        }
    }
}