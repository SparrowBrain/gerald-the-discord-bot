import Discord from 'discord.js';
import { Token, CommandPrefix } from './config';




const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

let geraldId = client.user?.id

client.login(Token);
client.on('message', message => {
    if (    message.mentions.users.first()?.id === geraldId){
        if(message.content.includes('start'))        {
            message.channel.send("Starting spam!");
        }
    }
    if (    message.mentions.users.first()?.id === geraldId){
        if(message.content.includes('stop'))        {
            message.channel.send("ok...");
        }
    }

    
});


