const Cipher = require('./modules/Cipher');
const Filer = require('./modules/Filer');
const program = require('./modules/Program');
const readline = require('readline');
const { Readable } = require("stream");
const endOfLine = require('os').EOL;

// если указан параметр ввода и вывода
if(program.input && program.output){
    Filer.processFile(program.input, program.shift, program.output, program.actions);
}

// если нету вводных и выводных параметров
if(!program.input && !program.output){

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
}

// есть есть вводной параметр и нет выводного
if(program.input && !program.output) {
    Filer.processFileReturn(program.input, program.shift, program.output, program.actions);
}

// если нет входного но есть выходной
if(!program.input && program.output) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.info('Please write your text. To complete use ctrl+c' + endOfLine)

    rl.on('line', (userInput) => {

        Filer.processStdinToFile(Readable.from([userInput + endOfLine]), program.shift, program.output, program.actions);

    })
}
