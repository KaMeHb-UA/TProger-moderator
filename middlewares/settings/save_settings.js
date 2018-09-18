const fs = require('fs'),
    zlib = require('zlib');
/**
 * @param {Settings} settings 
 */
module.exports = settings => {
    var _ = [];
    settings['chat history cache'].forEach(({uid, msgCount, firstMsgDate}) => {
        _.push(`${uid}-${msgCount}-${firstMsgDate/1000}`)
    });
    settings['chat history cache'] = zlib.gzipSync(_.join('\n')).toString('base64');
    fs.writeFileSync(__dirname + '/../node_modules/internals/settings.json', JSON.stringify(settings, null, '    '), 'utf8')
}
