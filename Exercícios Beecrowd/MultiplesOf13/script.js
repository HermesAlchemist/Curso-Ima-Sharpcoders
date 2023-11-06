var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

var X = parseInt(lines[0]);
var Y = parseInt(lines[1]);
var sum = 0;

if (X > Y) {
    let temp = X;
    X = Y;
    Y = temp;
}

for (var i = X; i <= Y; i++) {
    if (i % 13 !== 0) {
        sum += i;
    }
}

console.log(sum);