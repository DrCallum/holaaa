module.exports = async (client) =>{
    setInterval(() => {
        const guild = client.guilds.cache.get('811381300685701140');
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('845399697942511636');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('updating Member Count');
    }, 5000);
}