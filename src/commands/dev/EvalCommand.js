const Command = require("../../structures/commands")
const { MessageEmbed } = require("discord.js")
module.exports = class EvalCommand extends Command {
    constructor (client) {
        super(client, {
            name: "eval",
            aliases: [],
            category: "dev",
            dev: true
        })
    }

    async run(message, args) {
        try {
            let util = require("util");
            let code = args.join(' ');
            let ev = eval(code)
            let str = util.inspect(ev, {
                depth: 1
            })
            str = `${str.replace(new RegExp(`${this.client.token}`, "g"), "undefined")}`;
            if (str.length > 1800) {
                str = str.substr(0, 1800)
                str = str + "..."
            }
            message.channel.send(str, { code: 'js' })

        } catch (err) {
            if (err.stack.length > 1800) {
                err.stack = err.stack.substr(0, 1800)
                err.stack = `${err.stack}...`
            }
            const embed = new MessageEmbed()
            .setColor(this.client.colors.default)
            .setTitle("Me desculpe, ocorreu um erro ao tentar executar.")
            .setDescription(`\`\`\`js\n${err.stack}\`\`\``)

            message.channel.send(embed)
        }
    }
}