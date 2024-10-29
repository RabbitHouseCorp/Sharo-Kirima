const config = require("./src/settings/config")
const Client = require("./src/SharoClient")
const client = new Client(config.options)

client.login(config.token)
client.loadCommands("./src/commands")
client.loadEvents("./src/events")