const settings = require('../settings').default;
exports.increase = async ctx => {
    var { firstMessageTimestamp, messageCount } = await settings.chc[ctx.from.id];
    settings.chc[ctx.from.id] = {
        firstMessageTimestamp,
        messageCount: ++messageCount
    }
    return messageCount
}
