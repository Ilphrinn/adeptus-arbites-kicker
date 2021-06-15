const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('message', async message => {

        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
      
        if (message.content.toLowerCase().includes('futur i3 pauc') || 
                message.content.toLowerCase().includes('ingenieur 2eme annee') || 
                message.content.toLowerCase().includes('ingénieur 2ème année') || 
                message.content.toLowerCase().includes('futur i3pauc')) {

                var usr = message.guild.member(message.author)
                

                message.channel.send(`Oyez, Oyez !`)
                .then(msg => {
                        setTimeout(function() {
                        msg.channel.send(`Un hérétique a été signalé dans la zone.`)
                        }, 2000);
                        setTimeout(function() {
                        msg.channel.send(`La menace va donc être purgée pour votre bien.`)
                        }, 4000);
                        setTimeout(function() {
                        usr.kick();
                        }, 5000);
                        setTimeout(function() {
                        msg.channel.send(`Merci pour votre collaboration, restez fidèles à l'I3APAUC.`)
                        }, 8000);
                })
        }

return;
});