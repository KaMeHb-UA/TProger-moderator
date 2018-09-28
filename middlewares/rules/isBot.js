const rules = require('.'),
    settings = require('middlewares/settings');
/**
 * @param {TelegrafContext} ctx 
 */
module.exports = ctx => {
    const messagesCountBefore = rules.messagesCount.increase(ctx) - 1,
        linkInMessage = rules.linkInMessage(ctx);

    const conditions = [
        !messagesCountBefore /* ie the first message */ && linkInMessage,
    ];
    conditions.forEach((cond, i) => {
        conditions[i] = settings['target chat id'] == ctx.chat.id && cond;
    });
    for(var i = 0; i < conditions.length; i++)
        if(conditions[i]) return true;
    return false;
}
