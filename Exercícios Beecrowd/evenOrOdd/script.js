var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n').map(line => line.trim());

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) 
{
    let X = parseInt(lines[i]);

    if (X === 0) 
    {
        console.log('NULL');
    }
    if (X % 2 === 0 && X !== 0) 
    {
        if (X > 0) {
            console.log("EVEN POSITIVE");
        } else {
            console.log("EVEN NEGATIVE");
        }
    }
    if (X % 2 !== 0) 
    {
        if (X > 0) {
            console.log("ODD POSITIVE");
        } else {
            console.log("ODD NEGATIVE");
        }
    }
}