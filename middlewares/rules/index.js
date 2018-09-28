/**
 * @type {Rules}
 */
require('json5/lib/register');
module.exports = new Proxy({}, {
    get(_, name){
        return require(`${__dirname}/${name}.js`);
    },
    set(_, __, ___){}
})
