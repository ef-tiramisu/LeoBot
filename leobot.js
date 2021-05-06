const Discord = require("discord.js");;
const {token} = require('./config.json');


const client = new Discord.Client();


//sets game on bot startup
client.on("ready", () => {
	client.user.setActivity('with my cats', { type: 'PLAYING' });
	console.log('ready');
});


const iam = ["i am ", "i'm ", "im " ]
client.on('message', message =>{
	for (i = 0; i < iam.length; i++) {

		if (message.content.toLowerCase().includes(iam[i]) && !message.author.bot){
			try {
			const name = message.content.slice(message.content.toLowerCase().indexOf(iam[i]) + iam[i].length);
			message.channel.send("Hi " + name + ", I'm Leo")
			}
			catch (error) {
				console.error(error);
			}
		}
	}
	return;
});

client.login(token);
