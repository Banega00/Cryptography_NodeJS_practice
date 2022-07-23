## Most Common Cryptographic concepts


Useful links:
https://fireship.io/lessons/node-crypto-examples/


Concepts:
1. HASH, SALT, PEPPER <br>
SALT is random data that is added to data before generating a hash code. It is common to store the salt **alongside** the hash value.<br>
PEPPER is also random data that is added to data before generating a hash code. Unlike salt, pepper is **kept secret**. In many cases, pepper isn't stored at all. In other cases, it is securely stored separately from the hash code.