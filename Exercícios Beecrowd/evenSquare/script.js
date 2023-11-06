var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n').map(line => line.trim());

let N = parseInt(lines);
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        console.log(`${i}^2 = ${i*i}`)
    }
}