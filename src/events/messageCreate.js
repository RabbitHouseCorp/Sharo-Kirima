const config = require("../settings/config")
module.exports = class MessageReceive {
  constructor(client) {
    this.client = client
  }

  run (message) {
    if (message.channel.type === "dm") return
    if (message.author.bot) return
    if (!message.content.startsWith(config.prefix)) return
    const args = message.content.slice(config.prefix.length).trim().split(" ")
    const commands = args.shift().toLowerCase()
    const cmd = this.client.commands.get(commands) || this.client.commands.get(this.client.aliases.get(commands))
    if (!cmd) return
    if (cmd.config.dev) {
      if (!config.owner.includes(message.author.id)) {
        message.reply("you don't have permission to execute this command.")
        return
      }
    }

    new Promise((res, rej) => {
      res(cmd.run(message, args))
    }).catch(err => {
      console.error(err.stack)
    })
  }
}
