const prefix = process.env.PREFIX;

module.exports = async (client, discord, message) => {

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    if (client.commands.get(command).ownerOnly && message.author.id !== process.env.OWNER_ID) return;
    if (client.commands.get(command).active === false) return message.channel.send(`El comando \`${command}\` está desactivado`);

    try {

        await client.commands.get(command || command.alias).execute(message, args, client, discord);
    }
    catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
}