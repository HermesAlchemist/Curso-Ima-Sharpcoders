var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let X = lines.map(xTemporario => Number(xTemporario));

for (i = 0; i < X.length; i++) {
    if (X[i] <= 0) {
        X[i] = 1
        console.log(`X[${i}] = 1`)
    } else {
        console.log(`X[${i}] = ${X[i]}`)
    }
}