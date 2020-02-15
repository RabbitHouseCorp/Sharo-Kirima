const { MessageEmbed } = require("discord.js")
module.exports = class MessageReactionAddReceive {
    constructor(client) {
        this.client = client
    }

    run(reaction, user) {
        if (user.id === "297153970613387264") {
            let link = `https://canary.discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`
            let star = ["🌠"]
            let emoji = ["pink_heart", "lori_gift", "green_gift", "blue_heart", "pink_gift", "purple_heart", "green_heart", "christmas_hat", "christmas_tree", "🎄"]
            let channel = this.client.channels.cache.get("659196669895901185")
            if (star.includes(reaction.emoji.name)) {
                let starEmbed = new MessageEmbed()
                    .setColor(this.client.colors.default)
                    .addField(`${this.client.emotes.sharo_excited} Surguiu uma estrela cadente!`, `Uma estrela cadente acabou de aparecer! Vá e pegue ela rápido antes que o tempo esgote!`)
                    .addField(`${this.client.emotes.sharo_dying} Pegue rápido`, `🌠 Você pode pegar a estrela clicando [aqui](${link})`)

                channel.send(starEmbed)
                return
            }
            if (emoji.includes(reaction.emoji.name)) {
                let embed = new MessageEmbed()
                    .setColor(this.client.colors.default)
                    .addField(`${this.client.emotes.sharo_happy} Apareceu um presente`, `Parece que o papai noel deixou um presente cair no ${reaction.message.channel}, corra enquanto da tempo, pegue o presente e seja feliz ${this.client.emotes.sharo_hug_chino}`)
                    .addField(`${this.client.emotes.sharo_dying} Pegue rápido`, `🎁 Você pode pegar o presente clicando [aqui](${link})`)

                channel.send(embed)

                return
            }
        }
    }
}