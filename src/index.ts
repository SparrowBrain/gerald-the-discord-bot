import Discord from 'discord.js';
import { Token } from './config';




const client = new Discord.Client();
let geraldId : string | undefined;


client.once('ready', () => {
    console.log('Ready!');
    geraldId = client.user?.id
    console.log(geraldId)
});



client.login(Token);




client.on('message', message => {
    if (message.mentions.users.first()?.id === geraldId){
        console.log(message.toJSON)

        if(message.content.includes('start'))        {
            message.channel.send("Starting spam!");
        }
        
        if(message.content.includes('stop'))        {
            message.channel.send("ok...");
        }
    }
    
});


