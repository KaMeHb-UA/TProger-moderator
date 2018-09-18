const TelegrafContext = require('telegraf/core/context'),
    settings = require('middlewares/settings');
/**
 * Increments messages count for specified user and returns new count
 * @param {TelegrafContext} ctx
 * @return {Number}
 */
exports.increase = ctx => {
    settings['chat history cache'].forEach(({uid, msgCount}, i) => {
        if(uid == ctx.from.id){
            settings['chat history cache'][i].msgCount = ++msgCount;
            return msgCount
        }
    });
    settings['chat history cache'].push({
        uid: ctx.from.id,
        msgCount: 1,
        firstMsgDate: Math.floor(new Date / 1000)
    })
}
