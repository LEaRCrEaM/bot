require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    };
    if (message.content === '!test') {
        var data = await getMyData();
        message.reply(JSON.stringify(data[0]));
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

const puppeteer = require('puppeteer-core');
//const path = require('path');

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
async function getMyData() {
  if (!page) return null;
  return await page.evaluate(() => {
      return typeof myData !== 'undefined' ? myData : null;
  });
};
var page;
(async () => {
  const pathToExtension = path.join(__dirname, 'extension');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });
  const pages = await browser.pages();
  page = pages[0];
  if (!page) {
    page = await browser.newPage();
  };
  await page.goto('https://tankionline.com/play/');
  await page.waitForSelector('.StartScreenComponentStyle-text');
  await page.click('.StartScreenComponentStyle-text');
  await page.waitForSelector('.RoundBigButtonComponentStyle-innerCircle');
  await page.click('.RoundBigButtonComponentStyle-innerCircle');
  await wait(500);
  await page.evaluate(async () => {
    let elm = null;
    while (!elm) {
      elm = document.querySelectorAll('.RoundBigButtonComponentStyle-innerCircle')[1];
      if (!elm) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    elm.click();
  });
  await page.waitForSelector('#username');
  await page.waitForSelector('#password');
  await page.waitForSelector('.Common-flexCenterAlignCenter.ButtonComponentStyle-disabled');
  await page.type('#username', 'skiil3d');
  await page.type('#password', 'shamshameero');
  await page.click('.EntranceComponentStyle-buttonActive');
  await page.waitForSelector('.MainScreenComponentStyle-playButtonContainer');
  await wait(5000);
  await page.click('.MainScreenComponentStyle-playButtonContainer');
  await wait(500);
  await page.evaluate(async () => {
    let elm = null;
    while (!elm) {
      elm = document.querySelectorAll('.BattlePickComponentStyle-cardImg.Common-backgroundImageCover.Common-backgroundImage')[2];
      if (!elm) {
        await document.querySelector('.MainScreenComponentStyle-playButtonContainer')?.click();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    elm.click();
  });
  await wait(500);
  var data = await page.evaluate(() => {
    return myData;
  });
  console.log(data[0]);
})();

const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌐 Web server running on port ${PORT}`));
