import { generateKeyPairSync, privateDecrypt, publicEncrypt } from 'crypto';

//RSA is algorithm for generating keypair
//private and public keys are mathematically connectede to each other
//messages encrypted with public key can only be decrypted with corresponding private key and vice versa 
export const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
  },
});

console.log(publicKey);
console.log(privateKey);


const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from('this is secret message')
);


console.log(encryptedData.toString('hex'))


const decryptedData = privateDecrypt(
  privateKey,
  encryptedData
);

console.log(decryptedData.toString())