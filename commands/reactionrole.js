module.exports = {
    name: 'reactionrole',
    aliases: ['r'],
    cooldown: 10,
    permissions: ['ADMINISTRATOR'],
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '811424487152418856';
        const YouTubeRole = message.guild.roles.cache.find(role => role.name === "YouTube");
        const TwitchRole = message.guild.roles.cache.find(role => role.name === "Twitch");
        const FacebookGamingRole = message.guild.roles.cache.find(role => role.name === "Facebook Gaming");
        const TwitterRole = message.guild.roles.cache.find(role => role.name === "Twitter");

        const youtubeEmoji = '<:youtubeemoji:811393162283188244>';
        const twitchEmoji = '<:twitchemoji:811394177081671730>';
        const facebookgamingEmoji = '<:facebookgamingemoji:811425245297639434>';
        const twitterEmoji = '<:twitteremoji:811392721603788850>';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What platform do you stream on?')
            .setDescription('---------------------------------------------\n\n'
                + `${youtubeEmoji} **YouTube**\n`
                + `${twitchEmoji} **Twitch**\n`
                + `${facebookgamingEmoji} **Facebook Gaming**\n`
                + `${twitterEmoji} **Twitter**`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(youtubeEmoji);
        messageEmbed.react(twitchEmoji);
        messageEmbed.react(facebookgamingEmoji);
        messageEmbed.react(twitterEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(YouTubeRole);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TwitchRole);
                }
                if (reaction.emoji.name === facebookgamingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(FacebookGamingRole);
                }
                if (reaction.emoji.name === twitterEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TwitterRole);
                }

            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === youtubeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(YouTubeRole);
                }
                if (reaction.emoji.name === twitchEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TwitchRole);
                }
                if (reaction.emoji.name === facebookgamingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(FacebookGamingRole);
                }
                if (reaction.emoji.name === twitterEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TwitterRole);
                }

            } else {
                return;
            }
        });
    }
 
}