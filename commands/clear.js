module.exports = {
    name: 'clear',
    aliases: ['c', 'purge'],
    cooldown: 10,
    permissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
    description: "Clear messages!",
    async execute(message, args, cmd, client, Discord) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please type a real number!");
        
        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}