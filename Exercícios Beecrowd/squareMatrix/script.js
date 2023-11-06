var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for (let k = 0; k < lines.length; k++) {
    const N = parseInt(lines[k]);
    if (N === 0) {
        break;
    }

    const array = [];

    for (let row = 0; row < N; row++) {
        array[row] = [];
        for (let col = 0; col < N; col++) {
            // Calcula os valores baseado na distância para o centro
            array[row][col] = Math.abs(row - col) + 1;
        }
    }

    for (let i = 0; i < N; i++) {
        console.log(array[i].map(num => num.toString().padStart(3)).join(' '));
    }

    if (k < lines.length - 1) {
        console.log();
    }
}