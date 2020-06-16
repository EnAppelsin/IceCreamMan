const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {
	var msg = message.content.toLowerCase();
    if (msg === 'ice cream' || msg === 'ice cream man') {
		const attachment = new Discord.MessageAttachment('https://raw.githubusercontent.com/EnAppelsin/IceCreamMan/master/ICM.png')
       message.send('ICE CREAM MAN', attachment);
       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret