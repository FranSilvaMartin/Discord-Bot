module.exports = {
    name: 'ping',
    alias: ['pong', 'p'],
    description: 'Tiempo de respuesta del bot',
    active: true,
    async execute(message, args, client, discord) {
        message.channel.send('Pong! 🙉');
    }
}