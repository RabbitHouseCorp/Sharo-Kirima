const Command = require("../../structures/commands")
module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            aliases: ["pang", "peng", "pong", "pung"]
        })
    }

    async run(message, args) {
        let msg = await message.channel.send(":ping_pong:")
        msg.edit(`:ping_pong: Pong! \`${Math.round(this.client.ws.ping)}\`ms | \`${msg.createdTimestamp - message.createdTimestamp}\`ms`)
    }
}