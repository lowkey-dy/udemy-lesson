'use strict';

/* const burger = 5,
      fries = null;

if (burger && fries) {
    console.log('Im full');
} */

/* const burger = 3,
      fries = 1,
      coke = 0;

console.log(burger === 3 && coke && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'gfgsfgs');

if (burger === 3 && coke && fries) {
    console.log('Everyone is full');
} else {
    console.log('We are going somewhere else!')
} */

/* const burger = 3,
      fries = 3,
      coke = 0,
      nuggets = 2; */

console.log(burger === 3 && coke && fries);

if (burger === 3 && coke === 2 || fries === 3 && nuggets) {
    console.log('Everyone is happy!');
} else {
    console.log('We are going somewhere else!')
}

console.log(burger === 3 && coke === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}







