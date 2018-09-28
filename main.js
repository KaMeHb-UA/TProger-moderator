const Telegraf = require('telegraf'),
    settings = require('middlewares/settings'),
    rules = require('middlewares/rules'),
    bot = new Telegraf(settings.token);

bot.on('message', ctx => {
    if(rules.isBot(ctx)) ctx.reply(`Похоже на бота 😑\n${rules.adminNicks.join(', ')}, проверьте, а?`)
});

bot.startPolling()
