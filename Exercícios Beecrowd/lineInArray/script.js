// var input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split('\n');

// var linha = parseInt(lines.shift());
// var operacao = lines.shift().trim();
// var matriz = [];
// var soma = 0;
// var elementos = 12;

// for(var i = 0; i < 12; i++) {
//     matriz.push([]);
//     for(var j = 0; j <12; j++) {
//         matriz[i][j] = parseFloat(lines.shift());
//         if(i === linha){
//             soma += matriz[i][j];
//         }
//     }
// }

// if(operacao === 'M'){
//     soma /= elementos;
// }
// console.log(soma.toFixed(1));
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = parseInt(lines.shift());
var operacao = lines.shift().trim();
var matriz = [];
var soma = 0;
var elementos = 0;

for (var i = 0; i < 12; i++) {
    matriz.push([]);
    console.log(matriz)
    for (var j = 0; j < 12; j++) {
        matriz[i][j] = parseFloat(lines.shift());
        if (i === linha) {
            soma += matriz[i][j];
            elementos++;
        }
    }
}

if (operacao === 'M') {
    soma /= elementos;
}

console.log(soma.toFixed(1));