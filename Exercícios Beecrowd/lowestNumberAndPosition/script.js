var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let N = parseInt(lines[0]);
let X = lines[1].split(' ').map(x => parseInt(x));
let lowestValue = X[0];
let position = 0;

for (i = 1; i < N; i++) {
    if (X[i] < lowestValue) {
        lowestValue = X[i];
        position = i;
    }
}
console.log(`Menor valor: ${lowestValue}`)
console.log(`Posicao: ${position}`)