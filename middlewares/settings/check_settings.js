const settings = require('./index'),
    readline = require('readline');
/**
 * @return {Promise<String>}
 */
function getInput(question){
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, answer => {
            rl.close();
            resolve(answer)
        })
    })
}
/**
 * @param {String} name 
 */
async function checkSetting(name){
    if(!settings[name]) settings[name] = await getInput(`Please enter bot ${name}: `)
}
module.exports = () => Promise.all([
    checkSetting('token'),
    checkSetting('target chat id'),
]);
