const { createHmac } = require('crypto');

//HMAC - Hash-Based Message Authentication Code
//HMAC is like hash but with secret(password, secret key)
//secret - some secret string
const password = 'super-secret!';
const message = '🎃 hello jack'

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac)