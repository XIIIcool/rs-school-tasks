const fs = require('fs');
const Cipher = require('../modules/Cipher');
const { pipeline, Transform } = require('stream');
const Transformer = require('../modules/Transformer');

/**
 *
 */
class Filer {

    decodeFile(path){

    }

    /**
     *
     * @param path
     * @param shift
     * @param output
     */
    processFile(input, shift, output, action){

        pipeline(
            fs.createReadStream(input),
            new Transformer(action,shift),
            fs.createWriteStream(output, {flags:'a'}),
            (err) => {
                if (err) {
                    console.error('failed.', err);
                } else {
                    console.log('succeeded.');
                }
            }
        );

    }

    /**
     *
     * @param path
     */
    isAvaibleFile(path){

        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                console.error(err)
                return;
            }

        })

    }
}

module.exports = new Filer();
