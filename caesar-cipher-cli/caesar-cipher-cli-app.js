const {program} = require('commander');
const Cipher = require('./modules/Cipher');
const Filer = require('./modules/Filer');
const validateActions = ['encode', 'decode'];
const readline = require('readline');
const endOfLine = require('os').EOL;


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

// если не указан входной файл то запросим вводи текста из консоли
if (!program.input) {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.info('Please write your text. To complete use ctrl+c' + endOfLine)

    rl.on('line', (userInput) => {

            let result;

            if(program.actions === 'encode'){
                result = Cipher.encode(userInput, program.shift);
            } else if(program.actions === 'decode'){
                result = Cipher.decode(userInput, program.shift);
            }

            console.log(`Your ${program.actions} text: ${result}`);

    })


} else {

    Filer.processFile(program.input, program.shift, program.output, program.actions);


}
