require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const fetch = require('node-fetch');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    };
    if (message.content.startsWith('?getInfo ')) {
        if (message.author.id !== '567464149425061918') {
            if (['Soduko', 'Meteron', 'Menum', 'Neveah', 'Finito', 'Audemar', 'password', 'Password', 'patata', 'Faceshot', 'Splxff', 'Erina'].some(t => message.content.includes(t))) {
                message.reply('no access');
                return;
            };
        };
        var commandParamsNum = message.content.replace('?getInfo ', '').split(' ').length - 1;
        var commandParams = message.content.replace('?getInfo ', '').split(' ');
        fetch('https://actually-hickory-squirrel.glitch.me/api/viewMessages')
            .then(r => {
                return r.text();
            })
            .then(d => {
                var data = JSON.parse(d).messages.filter(t => !['Neveah', 'Menum', 'Concealed'].includes(t.name));
                var names = '';
                data.forEach(message => {
                    names += `${message.name}, `;
                });
                switch (commandParamsNum) {
                    case 0:
                        message.reply(names).catch(console.error);
                        break;
                    case 1:
                        message.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]])).catch(console.error);
                        break;
                    case 2:
                        if (commandParams[2] == 'password') {
                            message.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]]['patata'])).catch(console.error);
                        } else {
                            message.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]][commandParams[2]])).catch(console.error);
                        };
                        break;
                };
            });
    };
});

client.login(process.env.DISCORD_TOKEN);


const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Web server running on port ${PORT}`));
