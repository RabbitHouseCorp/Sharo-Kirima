const config = require("./config")
const Client = require("./src/SharoClient")
const client = new Client({
    fetchAllMembers: true,
    disableEveryone: true
})

client.login(config.token)
client.loadCommands("./src/commands")
client.loadEvents("./src/events")