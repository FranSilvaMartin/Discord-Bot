const fs = require('fs');

module.exports = (client, discord) => {
    fs.readdirSync('./commands/').forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));

        for (let file of commands) {
            const command = require(`../commands/${dir}/${file}`);
            if (command.name) {
                console.log(` /> Loaded command: ${command.name}`);
                client.commands.set(command.name, command);
            }
        }
    });
}