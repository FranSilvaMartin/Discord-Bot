require('dotenv').config();

const discord = require("discord.js");
const client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });
client.commands = new discord.Collection();
client.events = new discord.Collection();

let date = new Date();

console.clear();
console.log(`Loading bot on (${date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()})...\n`);

["commandHandler", "eventHandler"].forEach(file => {
    require(`./handlers/${file}`)(client, discord, client.bot);
});

/* function showAvatar() {
    const avatar = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Avatar Link")
        .setURL(`${message.author.avatarURL()}`)
        .setAuthor({ name: `${message.author.tag}`, iconURL: `${message.author.avatarURL()}` })
        .setImage(`${message.author.avatarURL()}`)
        .setTimestamp()d
        .setFooter({ text: `Solicitado por ${message.author.tag}`, iconURL: `${message.author.avatarURL()}` });
    message.reply({ embeds: [avatar] });
}
 */
client.login(process.env.TOKEN);
