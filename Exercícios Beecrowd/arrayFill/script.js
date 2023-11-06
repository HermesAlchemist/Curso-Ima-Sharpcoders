var input = require('fs').readFileSync('stdin', 'utf8');
const V = parseInt(input);


let N = [];
N[0] = V;
console.log(`N[0] = ${N[0]}`);
for (i = 1; i < 10; i++) {
    N[i] = N[i - 1] * 2;
    console.log(`N[${i}] = ${N[i]}`);
}