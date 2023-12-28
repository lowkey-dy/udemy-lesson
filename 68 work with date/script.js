'use strict';

const now = new Date();

console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
console.log(now.setHours(40));

let start = new Date();

for (let i = 0; i < 10000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`The cycle completed in ${end - start} milliseconds!`)