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
async function checkSetting(name, suffix){
    if(!settings[name]) settings[name] = await getInput(`Please enter bot ${name + suffix}: `)
}
var settingsToCheck = [
    'token',
    'target chat id',
    new String('chat history cache'), // using object instead of primitive due to properties set ability
];
settingsToCheck[2].suffix = ' (look at https://github.com/KaMeHb-UA/TProger-moderator/blob/master/CHCType.md)';

settingsToCheck.forEach((name, i) => {
    settingsToCheck[i] = checkSetting(name, name.suffix || '')
});
module.exports = async () => { await Promise.all(settingsToCheck) }
