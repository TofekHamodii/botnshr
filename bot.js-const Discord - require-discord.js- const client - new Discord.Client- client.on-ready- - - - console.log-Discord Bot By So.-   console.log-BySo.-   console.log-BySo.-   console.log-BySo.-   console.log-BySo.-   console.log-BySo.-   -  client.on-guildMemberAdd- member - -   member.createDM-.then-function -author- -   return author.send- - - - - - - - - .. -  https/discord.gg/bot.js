const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون شايف قناتي .. تنورني  https://youtu.be/5N9ihv2c-5M ** ')

}).catch(console.error)
})

client.login("NDk5NjAxODEzMzc3Mzg0NDYx.Dssnng.RnfRLh2pxc-X1Vvgwl0LF70yl8k");
