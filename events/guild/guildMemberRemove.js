const { drawCard, LinearGradient } = require('discord-welcome-card');
const { welcomeImage } = require('discord-welcome-card');

module.exports = async (client, discord, member) => {
    console.log(`${member.user.tag} has leave the server`);

    const channel = member.guild.channels.cache.find(channel => channel.id === '982563464365109288');

    const image = await welcomeImage(member, { theme: 'circuit' });
    channel.send({ files: [image] });
}