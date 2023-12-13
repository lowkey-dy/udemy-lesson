'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);

}
showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(cacl(4, 3));
console.log(cacl(5, 6));
console.log(cacl(4, 7));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};
logger();

const calc = (a, b) => a + b;

/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr); */

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
    
}

function promotion(result) {
    console.log(result * discount);

}

const res = convert(500, usdCurr);
promotion(res);



function sayHello(text) {

    return `Privet, ${text}!`;
}
sayHello('Anton');







