const { MessageEmbed } = require("discord.js")
module.exports = class MessageReactionAddReceive {
    constructor(client) {
        this.client = client
    }

    run (reaction, user) {
        if (user.id === "297153970613387264") {
            let emoji = reaction.emoji.name === "pink_heart" || reaction.emoji.name === "lori_gift" || reaction.emoji.name === "green_gift" || reaction.emoji.name === "blue_heart" || reaction.emoji.name === "pink_gift" || reaction.emoji.name === "purple_heart" || reaction.emoji.name === "green_heart" || reaction.emoji.name === "christmas_hat" || reaction.emoji.name === "christmas_tree" || reaction.emoji.name === "🎄"
            if (emoji) {
                let link = `https://canary.discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`
                let channel = this.client.channels.get("659196669895901185")
                let embed = new MessageEmbed()
                .setColor(this.client.colors.default)
                .addField(`${this.client.emotes.sharo_happy} Apareceu um presente`, `Parece que o papai noel deixou um presente cair no ${reaction.message.channel}, corra enquanto da tempo, pegue o presente e seja feliz ${this.client.emotes.sharo_hug_chino}`)
                .addField(`${this.client.emotes.sharo_dying} Pegue rápido`, `🎁 Você pode pegar o presente clicando [aqui](${link})`)

                channel.send(embed)
            }
        }
    }
}