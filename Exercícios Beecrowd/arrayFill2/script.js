var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let T = parseInt(lines[0]);
let maxTimes = T - 1;
let N = [];
let x = 0;
for (let i = 0; i < 1000; i++) {
    N.push(x);
    x++;
    if(x > maxTimes) {
        x = 0;
    }
    console.log(`N[${i}] = ${N[i]}`);
}