const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


bot.on("ready", bot => {
  console.log(`Connectés à ${bot.user.username}`)
  console.log(`Le bot est utilisé sur ${bot.guilds.cache.size} serveurs !`)

  bot.user.setPresence({ activities: [{ name: "EN DEV", type: 'WATCHING' }] })
})


client.login(process.env.TOKEN);
