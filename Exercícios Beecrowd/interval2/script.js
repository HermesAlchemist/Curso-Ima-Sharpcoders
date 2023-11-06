
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n').map(line => line.trim());;

let N = parseInt(lines[0]);

let inInterval = 0;
let outInterval = 0;

for (i = 1; i <= N; i++)
{
    if (lines[i] >= 10 && lines[i] < 20) {
        inInterval++;
    } else {
        outInterval++;
    }
}

console.log(`${inInterval} in\n${outInterval} out`)