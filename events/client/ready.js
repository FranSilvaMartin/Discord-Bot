const packageJSON = require('../../package.json');

module.exports = async (client, discord, bot) => {
    client.user.setStatus('online');
    client.user.setActivity('!help', { type: 'WATCHING' });
    console.log('\n-----------------------------------------------------');
    console.log(`The bot has started without problems\n\n` +
    ` /> Bot: ${bot.user.username}\n` +
    ` /> Version: ${packageJSON.version}\n` +
    ` /> Author: ${packageJSON.author}\n` +
    ` /> Status: ${(bot.user.presence.status).toUpperCase()}`);
    console.log('-----------------------------------------------------\n');
}