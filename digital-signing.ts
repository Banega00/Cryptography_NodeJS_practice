import { createSign, createVerify } from 'crypto';
import { publicKey, privateKey } from './asymmetric-encryption';

/*
Process of digital signing:
- Bob je napisao dokument – hoće da ga potpiše i pošalje Alice 
 
 - Bob je generisao par ključeva (Public I Private) - Private ključ čuva kod sebe, Public ključ šalje Alice 
 - Bob hashuje dokument i dobija digest 
 - Bob zaključava digest Privatnim ključem ---> dobija DIGITALNI POTPIS (Digital Signature) 
 - Bob šalje Dokument i Potpis do Alice 
 
 - Alice radi obrnut proces kako bi proverila validnost potpisa 
 - Prvo otključava dokument javnim ključem koji joj je Bob poslao (dobija 1. digest) 
 - Zatim provlači čist Dokument kroz Hash (dobija 2. digest) 
 - Upoređuje ova dva digesta – ako su isti onda znači da je potpis validan, dokument je validan I Bob je stvarno njegov autor 

*/

const data = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');

signer.update(data);

const siguature = signer.sign(privateKey, 'hex');

console.log(siguature);

/// VERIFY

const verifier = createVerify('rsa-sha256');

verifier.update(data);

const isVerified = verifier.verify(publicKey, siguature, 'hex');

console.log(isVerified);