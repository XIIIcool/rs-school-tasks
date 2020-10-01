/**
 * Сipher class
 */
class Cipher {

    constructor() {

        this.alphabetNoUpperCase = 'abcdefghijklmnopqrstuvwxyz';
        this.alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    }

    isUpperCase(symbol) {
        let isUpperCase = symbol.toUpperCase() === symbol;
        return (!!isUpperCase);
    }

    /**
     *
     * @param text
     * @param shift
     * @returns {string}
     */
    encode(text, shift) {

        let correctedAlphabetNUC = this.shiftAlphabert(shift, this.alphabetNoUpperCase);
        let correctedAlphabetUC = this.shiftAlphabert(shift, this.alphabetUpperCase);

        let encryptedMessage = '';
        let indexOfLetter = '';

        for (let i = 0; i < text.length; i++) {

            if (this.isUpperCase(text[i])) {
                indexOfLetter = this.alphabetUpperCase.indexOf(text[i]);
            } else {
                indexOfLetter = this.alphabetNoUpperCase.indexOf(text[i]);
            }

            if (indexOfLetter === -1) {
                encryptedMessage = encryptedMessage.concat(text[i]);
            } else {

                if (this.isUpperCase(text[i])) {
                    encryptedMessage = encryptedMessage.concat(correctedAlphabetUC[indexOfLetter]);
                } else {
                    encryptedMessage = encryptedMessage.concat(correctedAlphabetNUC[indexOfLetter]);
                }

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

        let correctedAlphabetNUC = this.shiftAlphabert(shift, this.alphabetNoUpperCase);
        let correctedAlphabetUC = this.shiftAlphabert(shift, this.alphabetUpperCase);

        let encryptedMessage = '';
        let indexOfLetter = '';

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                encryptedMessage = encryptedMessage.concat(' ');
                continue;
            }

            if (this.isUpperCase(text[i])) {
                indexOfLetter = correctedAlphabetUC.indexOf(text[i]);
            } else {
                indexOfLetter = correctedAlphabetNUC.indexOf(text[i]);
            }

            if (indexOfLetter === -1) {
                encryptedMessage = encryptedMessage.concat(text[i]);
            } else {
                if (this.isUpperCase(text[i])) {
                    encryptedMessage = encryptedMessage.concat(this.alphabetUpperCase[indexOfLetter]);
                } else {
                    encryptedMessage = encryptedMessage.concat(this.alphabetNoUpperCase[indexOfLetter]);
                }
            }

        }

        return encryptedMessage;

    }

    /**
     *
     * @param shift
     * @param alphabet
     * @returns {string}
     */
    shiftAlphabert(shift, alphabet) {

        let shiftedAlphabet = '';
        for (let i = 0; i < alphabet.length; i++) {

            let currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);

            shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
        }
        return shiftedAlphabet;

    }
}

module.exports = new Cipher();
