// ****SEQUENCE IJ 1****
// let I = 1;
// let J = 60;

// while (J >= 0) {
//     console.log(`I=${I} J=${J}`)
//     J -= 5;
//     I += 3;
// }

// ****SEQUENCE IJ 2****

// let I = 1;
// let J = 7;

// while (J >= 5) {
//     console.log(`I=${I} J=${J}`)
//     J -= 1;
//     if (J < 5) {
//         I += 2;
//         J = 7;
//         if (I > 9) {
//             break;
//         }
//     }
// }

// ****SEQUENCE IJ 3****
let Jinit = 7;
let I = 1;
let J = 7;

while (J >= (Jinit - 2)) {
    console.log(`I=${I} J=${J}`)
    J -= 1;
    if (J < (Jinit - 2)) {
        I += 2;
        J = Jinit + 2;
        Jinit += 2;
        if (I > 9) {
            break;
        }
    }
}