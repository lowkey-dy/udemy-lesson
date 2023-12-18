'use strict';

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log(`I teach: ${lang}`);
    callback();
} 

function done () {
    console.log('I complete this lesson');
};

learnJs('JavaScript', done);