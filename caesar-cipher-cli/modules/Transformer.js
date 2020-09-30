const { pipeline, Transform } = require('stream');
const Cipher = require('./Cipher');

/**
 *
 */
class Transformer extends Transform {

    constructor(action, shift) {
        super();

        this.action = action;
        this.shift = shift;
    }
    /**
     *
     * @param chunk
     * @param encoding
     * @param callback
     * @private
     */
    _transform (chunk, encoding, callback) {
        if (encoding === 'buffer') {
            if(this.action === 'encode' ) {
                chunk = Cipher.encode(chunk.toString(), this.shift);
            } else {
                chunk = Cipher.decode(chunk.toString(), this.shift);
            }

        }

        callback(null, chunk)

    }
}

module.exports = Transformer;
