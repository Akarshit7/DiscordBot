const dotenv=require("dotenv");
dotenv.config();
const { Client, GatewayIntentBits  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessages,] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
  console.log('message was fired');
  
})

client.login(process.env.TOKEN);