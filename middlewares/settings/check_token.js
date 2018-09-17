const settings = require('./index'),
    readline = require('readline');
/**
 * @return {Promise<void>}
 */
module.exports = () => new Promise(resolve => {
    if(!settings.token){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Please enter your bot token: ', answer => {
            settings.token = answer;
            rl.close();
            console.log(`Token saved`);
            resolve()
        })
    }
});
