'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('To much');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */

const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Bingo!');
        break;
    default:
        console.log('Not this time');
        break;
}