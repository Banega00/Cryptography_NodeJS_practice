//Symetric encryption - same key is used to encrypt and decrypt things

import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

/// Cipher

const message = 'i like turtles';
const key = 'this is a key!';
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv); //Cipher is an algorithm for creating Cipertext based on cryptography standard, key, and iv

/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv); //Decipher is a algorithm for decrypting cipertext
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decryptedMessage.toString()}`);