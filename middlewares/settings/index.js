const fs = require('fs'),
    zlib = require('zlib');
try{
    var res = require('internals/settings.json')
} catch(e){
    var res = {}
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
/**
 * @type {Settings}
 */
module.exports = new Proxy(res, {
    get(target, name){
        return target[name]
    },
    set(target, name, value){
        target[name] = value;
        fs.writeFileSync(__dirname + '/../node_modules/internals/settings.json', JSON.stringify(target, null, '    '), 'utf8');
        return true
    }
})
