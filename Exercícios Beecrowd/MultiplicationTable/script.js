var input = require("fs").readFileSync("stdin", "utf8");

let N = parseInt(input);

for (let i = 1; i <= 10; i++)
{
    console.log(`${i} x ${N} = ${i*N}`)
}