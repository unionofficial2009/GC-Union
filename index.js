const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
let cooldown = new Set();
let cdseconds = 86400;

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("%present for Attendance", {type: "WATCHING"});
  
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
  
let prefix = botconfig.prefix;
  
  if(!message.content.startsWith(prefix)) return;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args =  messageArray.slice(1);
    
 if(cmd === `${prefix}present`){
   
    
    
  }
  
  if(cmd === `${prefix}botinfo`){
   
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username);
   
  return message.channel.send(botembed);
}
    
});

bot.login(process.env.BOT_TOKEN);
