const { messagesCount, linkInMessage } = require('.'),
    settings = require('../settings');

module.exports = async ctx => {
    if(settings.getChatId() != ctx.chat.id) return false;
    return (await messagesCount.increase(ctx)) < 6 && linkInMessage(ctx)
}
