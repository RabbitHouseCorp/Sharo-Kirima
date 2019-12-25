module.exports = class ReadyReceive {
    constructor(client) {
        this.client = client
    }

    run() {

        console.log("Successfully connected")
        this.client.user.setPresence({
            activity: {
                name: "🎁 Merry Christmas 🎅",
                type: "STREAMING",
                url: "https://www.twitch.tv/danielagc"
            }
        })
    }
}