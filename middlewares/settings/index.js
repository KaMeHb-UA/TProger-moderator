/**
 * @typedef Settings
 * @property {String} token
 */
try{
    var res = require('internals/settings.json')
} catch(e){
    var res = {}
}
const fs = require('fs');
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
