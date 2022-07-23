import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'crypto'

//basic hashing - no salt
const createBasicHash = (word: string) =>{
    return createHash('sha256').update(word).digest('hex')
}

// console.log(createBasicHash('abcdef'))


//SALT - random value added to string in order to make its hash more unique
//with salt even two same strings will produce different hashes because of random salt value

//SALT is good way of protecting data against attack with rainbow table (table of precomputed hashes)
//PEPPER is also random data added to hash funciton but unlinke SALT, pepper is kept as secret
const createHashWithSalt = (word: string) =>{
    const salt = randomBytes(16).toString('hex');

    const hashedWord = scryptSync(word, salt, 64).toString('hex');

    //we need to save salt along with hash so we can use it for decryption
    const hash = `${salt}:${hashedWord}`

    return hash;
}


const checkHashesWithSalt = (hash:string, word:string)=>{
    const [saltPart, hashPart] = hash.split(':')
    const hashedWord = scryptSync(word, saltPart, 64).toString('hex');
    return hashedWord == hashPart ;
}


const hashWithSalt = createHashWithSalt('abcdef');
console.log(hashWithSalt);
console.log(checkHashesWithSalt(hashWithSalt, 'abcdef'))