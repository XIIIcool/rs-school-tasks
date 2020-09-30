const {program} = require('commander');

program
    .requiredOption('-a, --actions <type>', ' an action encode/decode')
    .requiredOption('-s, --shift <number>', ' a shift (integer argument)', (value, dummyPrevious) => {
        return parseInt(value);
    })
    .option('-i, --input <type>', ' an input file')
    .option('-o, --output <type>', ' an output file')

program.parse(process.argv);

if (isNaN(program.shift)) {
    // TODO RETURN ERROR need integer value;
    console.error('error: -s --shift need integer value');
    throw new Error('error: -s --shift need integer value');
}

if (program.actions) {
    if (validateActions.indexOf(program.actions.toLowerCase().trim()) !== -1) {

    } else {
        console.error('error: -a --actions unknown parameter');
        throw new Error('error: -a --actions unknown parameter');
    }
}

module.exports = program;
