const {Telegraf, Markup, Scenes, session} = require('telegraf');
require('dotenv').config();
const fs = require('fs');
const bot = new Telegraf(process.env.NodeToken);

bot.use(session());
// bot.use(stage.middleware());

bot.command('test', async ctx => {
  // console.log(ctx.tg)
  // console.log('Chat: ', ctx.chat.id);
  let msg = await ctx.sendMessage('Test');
  // ctx.editMessageText('AE', null)
  // console.log('Msg: ', id);
  setTimeout(() => {
    ctx.tg.editMessageText(ctx.chat.id, msg.message_id, null, 'Baka!');
  }, 500)
  // ctx.editMessageText('Baka!');
  // ctx.scene.enter('test');
  // await ctx.reply('Куда мне загрузить файл?', {parse_mode: "HTML", ...Markup.inlineKeyboard([
  //   [Markup.button.url('Url', 'https://1drv.ms/i/s!AKHDRnFrn6TGhD4')]
  // ])}).then(res => console.log(res))
})

// module.exports = bot;
bot.launch();
// console.log(bot.telegram)
// exports.bot = bot;
