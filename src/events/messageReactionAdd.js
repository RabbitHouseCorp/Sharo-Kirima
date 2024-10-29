const { resolveColor} = require("discord.js")
const emojis = require ('../settings/emojis.json')
module.exports = class MessageReactionAddReceive {
  constructor(client) {
    this.client = client
  }

  run(reaction, user) {
    if (["297153970613387264", "395935916952256523"].includes(user.id)) {
    const message_url = `https://canary.discord.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`
    const reaction_channel = this.client.channels.cache.find(it => it.id === reaction.message.channelId)
    const channel = this.client.channels.cache.find(it => it.id === "1300747974258855956")
    if (emojis.list.includes(reaction.emoji.name)) {
      let message_content;
      let title;
      switch (reaction.emoji.name) {
        case 'gabriela':
          message_content = `Uma Gabriela apareceu no <#${reaction_channel.id}>! Corra e a capture antes que ela fuja!\n\n${message_url}`
          title = 'A Gabriela deu as caras!'
        break;
        case 'loritta':
          message_content = `Uma Loritta apareceu no <#${reaction_channel.id}>! Corra e a capture antes que ela fuja!\n\n${message_url}`
          title = 'A Loritta deixou de se esconder!'
        break;
        default:
          message_content = `Um doce apareceu no <#${reaction_channel.id}>! Corra e pegue antes que vença!\n\n${message_url}`
          title = 'Um doce foi descoberto!'
}
        const embed = {
          title,
          description: message_content,
          color: resolveColor(this.client.colors.default),
          footer: {
            text: 'This message was sent on 2024 Loritta\'s Halloween event'
          }
        }
        
        channel.send({ embeds: [embed] })
        return
      }
    }
  }
}
