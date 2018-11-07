module.exports = require('firebase-admin').initializeApp({
    credential: admin.credential.cert(require('internals/sak.json')),
    databaseURL: 'https://tproger-moderabot.firebaseio.com'
}).firestore()
