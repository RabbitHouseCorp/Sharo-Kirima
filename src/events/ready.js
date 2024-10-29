module.exports = class ReadyReceive {
    constructor(client) {
        this.client = client
    }

    run() {
	  let stats = [
	    {
		  name: 'Happy Halloween',
		  state: '🎃 Happy Halloween',
		  type: 4
        }
	  ]

      setInterval(() => {
        this.client.user.setPresence({ activities: [stats[Math.floor(Math.random() * stats.length)]] })
      }, 15 * 1000)
      console.log("Successfully connected")
    }
}
