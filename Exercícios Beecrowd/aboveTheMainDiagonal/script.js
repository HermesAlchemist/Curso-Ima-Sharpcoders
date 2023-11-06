var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var operation = lines[0].trim();
var sum = 0;
var count = 0;

for (var i = 0; i < 12; i++) {
  var row = lines[i + 1].split(' ').map(parseFloat);
  for (var j = 0; j < 12; j++) {
    if (j > i) { 
      sum += row[j];
      count++;
    }
  }
}

if (operation === 'S') {
  console.log(sum.toFixed(1));
} else if (operation === 'M') {
  var average = sum / count;
  console.log(average.toFixed(1));
}
