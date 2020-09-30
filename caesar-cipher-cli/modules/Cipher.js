/**
 * Сipher class
 */
class Cipher {

    constructor() {

        this.alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    }

    /**
     *
     * @param text
     * @param shift
     * @returns {string}
     */
    encode(text, shift) {
        let correctedAlphabet = this.shiftAlphabert(shift);

        var encryptedMessage = '';

        for (let i = 0; i < text.length; i++) {
            let indexOfLetter = this.alphabet.indexOf(text[i]);

            if (indexOfLetter === -1) {
                encryptedMessage = encryptedMessage.concat(text[i]);
            } else {
                encryptedMessage = encryptedMessage.concat(correctedAlphabet[indexOfLetter]);
            }

        }

        return encryptedMessage;

    }

    /**
     *
     * @param text
     * @param shift
     * @returns {string}
     */
    decode(text, shift) {
        let shiftedAlphabet = this.shiftAlphabert(shift);
        let encryptedMessage = '';
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                encryptedMessage = encryptedMessage.concat(' ');
                continue;
            }
            let indexOfLetter = shiftedAlphabet.indexOf(text[i]);

            if (indexOfLetter === -1) {
                encryptedMessage = encryptedMessage.concat(text[i]);
            } else {
                encryptedMessage = encryptedMessage.concat(this.alphabet[indexOfLetter]);
            }

        }

        return encryptedMessage;
    }

    /**
     *
     * @param shift
     * @returns {string}
     */
    shiftAlphabert(shift) {

        var shiftedAlphabet = '';
        for (var i = 0; i < this.alphabet.length; i++) {

            let currentLetter = (this.alphabet[i + shift] === undefined) ? (this.alphabet[i + shift - this.alphabet.length]) : (this.alphabet[i + shift]);

            shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
        }
        return shiftedAlphabet;

    }
}

module.exports = new Cipher();
