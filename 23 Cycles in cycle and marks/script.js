'use strict';

/* for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result+= '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
} */

//From 5 to 10
for (let i = 5; i < 11; i++) { 
    if (i === 11) {
        break;
    }
    console.log(i);
}

for(let i = 20; i > 10; i--) {
    if (i === 13) {
        console.log(`Stop: ${i}`);
        break;
    }
    
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 2;

while (num <= 15) {
    num++
    if (num%2) console.log(num);
}
console.log(num);

let arr = [];

for (let i = 5; i < 11; i++) {
   arr.push(i);
}
console.log(arr);

function NewArr() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
}
NewArr();

function secondTask() {
    const data = [5, 10, 'Shoping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i] === 'string')) {
            data[i] =`${data[i]} - done`;
        }
    }
    console.log(data);
}   
secondTask();

function ThirdTask() {
    const data = [5, 10, 'Shoping', 20, 'Homework'],
          result = [];

    for (let i = 0; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
        result == data;
    }
    console.log(result);
    return result;
}
ThirdTask();

// *
// ***
// *****
// *******
// *********
// ***********

let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);




