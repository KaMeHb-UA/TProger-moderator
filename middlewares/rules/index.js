require('json5/lib/register');

const safeRequire = (allowedRequireExtensions => {
    const cache = {};
    return (
        /**
         * @param {String} name 
         */
        name => {
            if(cache[name]) return cache[name];
            for(var i = 0; i < allowedRequireExtensions.length; i++){
                try{
                    cache[name] = require(`${name}.${allowedRequireExtensions[i]}`);
                    return cache[name];
                } catch(e){}
            }
            throw new Error(`Cannot find module '${name}.(${allowedRequireExtensions.join('/')})'`)
        }
    )
})([
    'js',
    'json5',
    'json',
]);

module.exports = new Proxy({}, {
    get(_, name){
        return safeRequire(`${__dirname}/${name}`);
    },
    set(_, __, ___){}
})
