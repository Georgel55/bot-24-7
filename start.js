const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {

if (message.content === 't$roles') {
const embed = new Discord.RichEmbed()
embed.addField('Roles', '``' + message.guild.roles.map(r => r.name).join('\n') + '``')
embed.setColor('16d9f5')
message.channel.send({embed})
};

if (message.content === 't$perm') {
  message.channel.sendMessage('*\*Permisiunile tale sunt\*\*`\`\`http\n' + JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4)+'\n`\`\`')
}

});

// client.on('message', message => {

//   if(message.content === 'm!mass') {
//     if(message.author.id !== "440438818030747658") return;
//      let args = message.content.split(" ").slice(1);
//      embed.setDescription(args.join(" "))
//      embed.setColor(`ff0000`);
//   //    message.author.guild.members.forEach(member => {
//   //   member.send(embed)
//   //   message.delete() 
//   //  })

//   message.author.guild.members.forEach(member => member.sendEmbed(embed)());
//     }
//   });


client.login('NDQwNDg5MTgwNzEyNDAyOTQ0.DcidCA.sidUy_0JohTuaMKPmH9a_OysDMk');