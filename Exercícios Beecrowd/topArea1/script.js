var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const operation = lines.shift();

let sum = 0;
let count = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const n = parseFloat(lines.shift());
        if (i < 5 && j < i && j > 11 - i) {
            sum += n;
            count++;
        }
    }
}

let resultado = 0;

if (operation === 'S') {
    resultado = sum;
} else {
    resultado = sum / count;
}

console.log(resultado.toFixed(1));