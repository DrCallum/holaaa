module.exports = {
    name: 'kick',
    aliases: ['k'],
    cooldown: 10,
    permissions: ['ADMINISTRATOR', 'KICK_MEMBERS'],
    description: "This is where you kick a member",
    execute(message, args, cmd, client, Discord) {

    let role = message.guild.roles.cache.find(r => r.name === "Mod");
        
        // if(message.member.permissions.has("BAN_MEMBERS")){
        //      message.channel.send('You have the permission to ban members');
        //  }  else {
        //       message.channel.send('You DONT have the permission to ban members');
        //  }c

        const member = message.mentions.users.first();
        if(message.member.roles.cache.some(r => r.name === "Mod")){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("The user has now been kicked!");
        } else {
            message.channel.send(`You don't have the correct permission to kick members`);
        }
    }
}