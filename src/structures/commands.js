module.exports = class Command {
  constructor(client, options) {
    this.client = client
    this.config = {
      name: options.name || null,
      category: options.category || "misc",
      aliases: options.aliases || [],
      dev: options.dev || false
    }
  }
}
