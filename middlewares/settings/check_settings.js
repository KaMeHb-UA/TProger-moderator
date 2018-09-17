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
var settingsToCheck = [
    'token',
    'target chat id',
    'chat history cache (look at https://github.com/KaMeHb-UA/TProger-moderator/blob/master/CHCType.md)',
];
settingsToCheck.forEach((name, i) => {
    settingsToCheck[i] = checkSetting(name)
});
module.exports = async () => { await Promise.all(settingsToCheck) }
