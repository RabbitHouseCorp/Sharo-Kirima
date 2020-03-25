const { MessageEmbed } = require("discord.js")
module.exports = class ReadyReceive {
    constructor(client) {
        this.client = client
    }

    run() {
    	const embed = new MessageEmbed ()
	embed.setColor(this.client.colors.default)
	embed.setDescription("Sabia que outros servidores estão participando e apoiando o evento da Loritta? Não? Agora você está sabendo, logo abaixo, você encontrará os outros servidores participantes.")
	embed.addField("Outros servidores", "[SweetLand](https://discord.gg/7Gzy5Dm)")
	setInterval(() => {
            this.client.channels.cache.get("659196915107495936").send(embed)
        }, 1800000)
	let stats = [
            {
	        name: "Rabbit House Coffee ☕🐰",
                type: "STREAMING",
                url: "https://www.twitch.tv/danielagc" 
	    },
	    {
		name: "🎉 Happy birthday Loritta",
		type: "PLAYING"
	    }

	]
        console.log("Successfully connected")
        setInterval(() => {
            this.client.user.setPresence({
                activity: stats[Math.floor(Math.random() * stats.length)]
            })
        }, 15000)
    }
}
