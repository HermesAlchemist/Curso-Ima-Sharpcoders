var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let arrayInt = lines.map(x => parseInt(x));
let par = [];
let impar = [];

let x = 0; // Índice para o array 'par'
let y = 0; // Índice para o array 'impar'

for (let i = 0; i < 15; i++) {
    if (arrayInt[i] % 2 === 0) {
        par.push(`par[${x}] = ${arrayInt[i]}`);
        x++;

        if (x === 5) {
            // Imprime os valores de 'par' e reinicializa o array
            for (let j = 0; j < 5; j++) {
                console.log(par[j]);
            }
            par = [];
            x = 0;
        }
    } else {
        impar.push(`impar[${y}] = ${arrayInt[i]}`);
        y++;

        if (y === 5) {
            // Imprime os valores de 'impar' e reinicializa o array
            for (let j = 0; j < 5; j++) {
                console.log(impar[j]);
            }
            impar = [];
            y = 0;
        }
    }
}
for (let j = 0; j < y; j++) {
    console.log(impar[j]);
};

for (let j = 0; j < x; j++) {
    console.log(par[j]);
};