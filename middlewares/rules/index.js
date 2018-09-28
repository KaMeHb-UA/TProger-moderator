require('json5/lib/register');
/**
 * @type {Rules}
 */
module.exports = new Proxy({}, {
    get(_, name){
        return require(`${__dirname}/${name}.js`);
    },
    set(_, __, ___){}
})
