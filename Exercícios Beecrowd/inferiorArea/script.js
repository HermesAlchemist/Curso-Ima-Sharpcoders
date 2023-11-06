var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const operation = lines.shift();

let sum = 0;
let count = 0;

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        const n = parseFloat(lines.shift());
        if (j > 6 && i > j && i < 11 - j) {
            sum += n;
            count++;
        }
    }
}

let result = 0;
if (operation === 'S') {
    result = sum;
} else {
    result = sum / count;
}
console.log(result.toFixed(1));