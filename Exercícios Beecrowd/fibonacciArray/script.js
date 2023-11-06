var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let T = parseInt(lines[0]);

function unsignedLimit(number) {
    return number >= 0 && number <= 18446744073709551615; // 2^64 - 1
}

function fibonacci(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= N; i++) {
        let result = a + b;
        if (!unsignedLimit(result)) {
            console.error(`Fibonacci number exceeds 64-bit limit for N = ${N}`);
            return -1; // Indicar que excedeu o limite
        }
        a = b;
        b = result;
    }

    return b; // Retorna b em vez de a + b
}

for (let i = 1; i <= T; i++) {
    let N = parseInt(lines[i]);
    let result = fibonacci(N);
    if (result >= 0) {
        console.log(`Fib(${N}) = ${result}`);
    } else {
        console.log(`Fib(${N}) = Exceeded 64-bit limit`);
    }
}