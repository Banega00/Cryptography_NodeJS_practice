## Most Common Cryptographic concepts
[![My Skills](https://skillicons.dev/icons?i=nodejs,ts)](https://skillicons.dev)

Useful links:
https://fireship.io/lessons/node-crypto-examples/


Concepts:
1. HASH, SALT, PEPPER <br>
SALT is random data that is added to data before generating a hash code. It is common to store the salt **alongside** the hash value.<br>
PEPPER is also random data that is added to data before generating a hash code. Unlike salt, pepper is **kept secret**. In many cases, pepper isn't stored at all. In other cases, it is securely stored separately from the hash code.
2. HMAC - Hash Based Message authentication <br>
Messages hashed using some secret
3. Ceasar ciphre <br>
Some of oldest ans simplest cipher algorithms. It works by shifting all characters of the string by certain number of letters in alphabet. 
4. Symmetric encryption <br>
Uses same key for both encrypting and decrypting of message
5. Asymmetric ecnryption
Uses mathematically connected keypair of public and private key <br>
Messages encrypted with public key can only be decrypted using private key and vise versa
