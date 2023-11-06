var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let X = parseFloat(lines[0]);
let N = [];
N[0] = X;
console.log(`N[0] = ${N[0].toLocaleString('en', { minimumFractionDigits: 4, maximumFractionDigits: 4, useGrouping: false })}`)
for (i = 1; i < 100; i++) {
    N.push(N[i - 1] / 2);
    console.log(`N[${i}] = ${N[i].toLocaleString('en', { minimumFractionDigits: 4, maximumFractionDigits: 4, useGrouping: false})}`);
}
