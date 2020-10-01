const {program} = require('commander');
const validateActions = ['encode', 'decode'];

program
    .requiredOption('-a, --actions <type>', ' an action encode/decode')
    .requiredOption('-s, --shift <number>', ' a shift (integer argument)', (value) => {
        if (parseInt(value) < 0) {
            process.stderr.write(`error: -s --shift need only positive number`);
            process.exit(400);
        }
        return parseInt(value);
    })
    .option('-i, --input <type>', ' an input file')
    .option('-o, --output <type>', ' an output file')

program.parse(process.argv);

if (isNaN(program.shift)) {
    process.stderr.write(`error: -s --shift need integer value`);
    process.exit(400);
}

if (program.actions) {
    if (validateActions.indexOf(program.actions.toLowerCase().trim()) !== -1) {

    } else {
        process.stderr.write(`error: -a --actions unknown parameter`);
        process.exit(400);
    }
}

module.exports = program;
