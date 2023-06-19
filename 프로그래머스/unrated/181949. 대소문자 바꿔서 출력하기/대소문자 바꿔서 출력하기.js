const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const isUpperCase = (str) => str.toUpperCase() === str;
    console.log([...str].map(x => isUpperCase(x) ? x.toLowerCase() : x.toUpperCase()).join(''));
});