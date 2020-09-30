const Cipher = require('./modules/Cipher');
const Filer = require('./modules/Filer');
const program = require('./modules/Program');
const validateActions = ['encode', 'decode'];
const readline = require('readline');
const endOfLine = require('os').EOL;

// если не указан входной файл то запросим ввод текста из консоли
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

            // если указан выходной файл то записываем в него

    })


} else {
    Filer.processFile(program.input, program.shift, program.output, program.actions);
}
