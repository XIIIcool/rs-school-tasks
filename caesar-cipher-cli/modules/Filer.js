const fs = require('fs');
const {pipeline} = require('stream');
const Transformer = require('../modules/Transformer');
const endOfLine = require('os').EOL;

/**
 *
 */
class Filer {

    /**
     *
     * @param input
     * @param shift
     * @param output
     * @param action
     */
    processFile(input, shift, output, action) {

        this.isAvaibleFile(input);
        this.isAvaibleFile(output);

        pipeline(
            fs.createReadStream(input),
            new Transformer(action, shift),
            fs.createWriteStream(output, {flags: 'a'}),
            (err) => {
                if (err) {
                    process.stderr.write(`failed ${err} `);
                    process.exit(400);
                } else {
                    console.log('succeeded.');
                }
            }
        );

    }

    /**
     *
     * @param input
     * @param shift
     * @param output
     * @param action
     */
    processFileReturn(input, shift, output, action) {

        this.isAvaibleFile(input);
        pipeline(
            fs.createReadStream(input),
            new Transformer(action, shift),
            process.stdout,
            (err) => {
                if (err) {
                    process.stderr.write(`failed ${err} `);
                    process.exit(400);

                } else {
                    console.log('succeeded.' + endOfLine);
                }
            }
        );

    }

    processStdinToFile(stdin, shift, output, action) {
        this.isAvaibleFile(output);
        pipeline(
            stdin,
            new Transformer(action, shift),
            fs.createWriteStream(output, {flags: 'a'}),
            (err) => {
                if (err) {
                    process.stderr.write(`failed ${err} `);
                    process.exit(400);

                } else {
                    console.log('succeeded.' + endOfLine);
                }
            }
        );
    }

    /**
     *
     * @param path
     */
    isAvaibleFile(path) {

        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                process.stderr.write(`file ${path} not found or no access to file ${endOfLine}`);
                process.exit(400);
            }

        })

    }
}

module.exports = new Filer();
