var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let N = lines.map(Number);
let highest = 0;
let index = 0;
for (i = 0; i < N.length; i++) {
    if (N[i] > highest) {
        highest = N[i];
        index = i;
    }
}
console.log(`${highest}\n${index + 1}`);