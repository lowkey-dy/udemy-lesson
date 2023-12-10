'use strict';

const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};

const b = 'b';

arrObj.b = '1234';
arrObj['b'] = '1234';


// console.log(arr[1]);
console.log(arrObj['b']);
console.log(arrObj.b);

// const obj = {a: 1, b: 2};

const obj = {
    Anna: 500,
    'Alice': 800
};

let storeName = 'DrugStore';

const storeDescription = {
    budget: 1000,
    employees: ['John', 'Twen', 'AnyDrugDiller'],
    products: {
        Hemp: 1000,
        Salt: 2000
    },
    open:true
}



