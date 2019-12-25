const { Client, Collection } = require("discord.js")
const { readdir } = require("fs")

module.exports = class SharoClient extends Client {
    constructor(options = {}) {
        super(options)

        this.commands = new Collection()
        this.aliases = new Collection()
        this.colors = require("./structures/colors")
        this.emotes = require("./structures/emotes")
    }

    login (token) {
        return super.login(token)
    }

    loadCommands (path) {
        readdir(`${__dirname}/commands`, (err, files) => {
            if (err) return console.error(err)
            files.forEach(category => {
                readdir(`${__dirname}/commands/${category}`, (err, cmd) => {
                    cmd.forEach(cmd => {
                        const Commands = require(`${__dirname}/commands/${category}/${cmd}`)
                        const commands = new Commands(this)
                        this.commands.set(commands.config.name, commands)
                        commands.config.aliases.forEach(alias => this.aliases.set(alias, commands.config.name))
                    })
                })
            })
        })
        return this
    }

    loadEvents (path) {
        readdir(path, (err, files) => {
            if (err) return console.error(err)
            files.forEach(event => {
                const Events = require(`../${path}/${event}`)
                const events = new Events(this)
                super.on(event.split(".")[0], (...args) => events.run(...args))
            })
        })
        return this
    }
}