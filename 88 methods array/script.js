'use strict';


// const names = ['Ivan', 'Dima', 'Archibald', 'Srachibald'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);

// let answers = ['Bill', 'DrIll', 'AvToNdil, GOMODRILL'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);

// every/some

const some = [4, 7, 9];

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 7, 21];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

const arr = ['apple', 'plum', 'srum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);