function generateKey (length, characters) {
    let randomKey = '';

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        randomKey += characters[index];
    }

    return randomKey;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i