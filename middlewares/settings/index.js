const zlib = require('zlib'),
    settingsSaver = require('./save_settings');
/**
 * @type {Settings}
 */
var res;
try{
    res = require('internals/settings.json')
} catch(e){
    res = {}
}
if(res['chat history cache']){
    let list = zlib.gunzipSync(Buffer.from(res['chat history cache'], 'base64')).toString();
    res['chat history cache'] = [];
    list = list.split('\n');
    list.forEach(row => {
        row = row.split('-');
        res['chat history cache'].push({
            uid: row[0] * 1,
            msgCount: row[1] * 1,
            firstMsgDate: new Date(row[2] * 1000)
        })
    });
}
process.on('beforeExit', () => {
    settingsSaver(res)
});
module.exports = res
