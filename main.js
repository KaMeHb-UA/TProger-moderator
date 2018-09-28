const Telegraf = require('telegraf'),
    settings = require('middlewares/settings'),
    rules = require('middlewares/rules'),
    bot = new Telegraf(settings.token);

bot.on('message', ctx => {
    console.log(ctx);
    if(rules.isBot(ctx)) console.log(ctx.reply(`Похоже на бота 😑\n${rules.adminNicks.join(', ')}, проверьте, а?`, {
        reply_to_message_id: ctx.message.message_id
    }));
});

bot.startPolling()
