const db = require('middlewares/db');
const CHCC = db.collection('chc');
const cache = {};
var botToken, targetChatId;

async function assignSettings(){
    process.stdout.write('Connecting to database... ');
    const _ = (await db.doc('internal/settings').get()).data();
    botToken = _['bot token'];
    targetChatId = _['target chat id'];
    console.log('got bot token and target chat id')
}

async function save(){
    var savingProgress = [];
    for(var id in cache){
        if(id != 'save' && +id == id){
            savingProgress.push(CHCC.doc(id).set(cache[id]))
        }
    }
}

async function exitHandler(){
    await save();
    process.exit(0)
}

process.on('beforeExit', exitHandler);
process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);

module.exports.getBotToken = () => botToken;

module.exports.getChatId = () => targetChatId;

module.exports.chc = new Proxy(cache, {
    get(cache, id){
        if(!cache[`${id}`] && +id == id){
            id = `${id}`;
            cache[id] = new Promise((resolve, reject) => {
                CHCC.doc(id).get().then(data => {
                    resolve(data.data())
                }, reject)
            })
        }
        return cache[id]
    },
    set(cache, id, val){
        cache[id] = val;
        return true
    }
});

module.exports.init = assignSettings
