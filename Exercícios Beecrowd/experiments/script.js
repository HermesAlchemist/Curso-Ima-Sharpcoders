var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let testCases = parseInt(lines[0]);

let coelhos = lines.filter(str => str.includes('C')).map(line => parseInt(line));
let ratos = lines.filter(str => str.includes('R')).map(line => parseInt(line));
let sapos = lines.filter(str => str.includes('S')).map(line => parseInt(line));

// Total animais
let arrayTotal = coelhos.concat(ratos, sapos);
let totalAnimais = arrayTotal.reduce((a, b) => a + b, 0);
// Total de coelhos
let totalCoelhos = coelhos.reduce((a, b) => a + b, 0);
// Total de ratos
let totalRatos = ratos.reduce((a, b) => a + b, 0);
// Total de sapos
let totalSapos = sapos.reduce((a, b) => a + b, 0);
// Porcentagem Coelhos
let pCoelhos = (totalCoelhos / totalAnimais * 100).toFixed(2);
// Porcentagem ratos
let pRatos = (totalRatos / totalAnimais * 100).toFixed(2);
// Porcentagem Sapos
let pSapos = (totalSapos / totalAnimais * 100).toFixed(2);

console.log(totalAnimais);
console.log(totalCoelhos);
console.log(totalRatos);
console.log(totalSapos);
console.log(pCoelhos);
console.log(pRatos);
console.log(pSapos);