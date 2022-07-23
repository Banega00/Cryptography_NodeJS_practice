//shift letters by some number of places
function caesarCipher(secret: string): string {
    const passphrase = secret.replace(/-/g, "").substr(0, 16);

    let result: string[] = [];
    for (let i = 0; i < passphrase.length; i++) {
        result[i] =
            passphrase[i] === passphrase[i].toUpperCase() ? String.fromCharCode((passphrase.charCodeAt(i) + (i +  7) - 65) % 26 + 65) :
                                                            String.fromCharCode((passphrase.charCodeAt(i) + (i + 17) - 97) % 26 + 97);
    }

    return result.join("");
}
