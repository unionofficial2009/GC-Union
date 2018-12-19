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
  
 if(cmd === `${prefix}info`){
   
   let guildmember = message.guild.members.find("id", "498181487846490134");
   message.reply(`${guildmember[0].username}`);
   message.delete().catch(O_o=>{});
   
 }  
    
 if(cmd === `${prefix}present`){
   
   let gcmemberRole1 = message.guild.roles.find("name", "GC - Member");
   
   if(message.member.roles.has(gcmemberRole1.id)) {
     
     if (message.channel.id != 498868396419448833) {
        message.delete().catch(O_o=>{});
        return message.reply("Wrong channel! type **%present** here :arrow_right: <#498868396419448833> once a day ")
     }  
     
     let gcattendance= message.guild.channels.find(`name`, "gc-attendance");
     if (!gcattendance) return message.channel.send("Couldn't find attendance channel.");

     gcattendance.fetchMessages()
      .then(messages => {
      
       
      
      //message.delete().catch(O_o=>{});  
       
      }).catch(console.error);
     
     //message.reply("test");
     //message.delete().catch(O_o=>{});
   } else {
     message.reply("You don't have the permission to use this command.");
   }  
    
    
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
