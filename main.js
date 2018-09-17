const Telegraf = require('telegraf'),
    bot = new Telegraf(require('middlewares/settings').token);

bot.on('message', ctx => {
    console.log(ctx)
});

bot.startPolling()
