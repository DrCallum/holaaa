module.exports = {
    name: 'ban',
    aliases: ['b'],
    cooldown: 10,
    permissions: ['ADMINISTRATOR', 'BAN_MEMBERS'],
    description: "This command bans a member",
    execute(message, args, cmd, client, Discord){
        
        let role = message.guild.roles.cache.find(r => r.name === "Mod");
        
        // if(message.member.permissions.has("BAN_MEMBERS")){
        //      message.channel.send('You have the permission to ban members');
        //  }  else {
        //       message.channel.send('You DONT have the permission to ban members');
        //  }c

        const member = message.mentions.users.first();
        if(message.member.roles.cache.some(r => r.name === "Mod")){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("The user has now been banned!");
        } else {
            message.channel.send(`You don't have the correct permission to ban members`);
        }
    }
}