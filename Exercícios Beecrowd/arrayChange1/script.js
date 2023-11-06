var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let X = lines.map(x => Number(x))
let N = [];
for (let i = 0; i < X.length; i++) {
    N.push(X[19 - i]);
    console.log(`N[${i}] = ${N[i]}`);
}