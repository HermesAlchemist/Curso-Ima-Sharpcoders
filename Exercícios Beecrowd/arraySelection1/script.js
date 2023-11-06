var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let X = lines.map(converterEmNumero => Number(converterEmNumero));

for (i = 0; i < X.length; i++) {
    if (X[i] <= 10) {
        console.log(`A[${i}] = ${X[i]}`);
    }
}