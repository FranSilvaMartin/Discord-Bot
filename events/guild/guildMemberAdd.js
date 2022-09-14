const { drawCard, LinearGradient } = require('discord-welcome-card');
const { welcomeImage } = require('discord-welcome-card');

module.exports = async (client, discord, member) => {
    console.log(`${member.user.tag} has joined the server`);

    const channel = member.guild.channels.cache.find(channel => channel.id === '982563464365109288');

    //Generating the actual welcome Card
    const image = await welcomeImage(member, { theme: 'code' });

    var texto = `${member.user.username} has joined the server!`;


    var texto = ':X'

    const image2 = await drawCard({
        theme: 'code',
        text: {
            title: member.user.tag + ' has joined the server!',
            text: member.user.tag,
            subtitle: 'please read the Rules',
            color: `#FFFFFF`,
        },
        avatar: {
            image: member.user.displayAvatarURL({ format: 'png' }),
            outlineWidth: 5,
            outlineColor: '#FFFFFF',
        },
        background: 'https://i.imgur.com/ea9PB3H.png',
        blur: 0,
        border: false,
        rounded: true,
    });

    channel.send(`Hey ${member.user}, welcome to the **ZyroxBot Community**!`)
    channel.send({ files: [image2] });
}