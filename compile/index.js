"use strict";
console.log('DEBUG: Calculate');
const add = (a, b) => {
    return a + b;
};
console.log('DEBUG: Add');
console.log(add(1, 2));
console.log('DEBUG: Multiply');
console.log(add(1, 2));
console.log('DEBUG: setTimeout');
setTimeout(() => {
    console.log('DEBUG: setTimeout');
}, 1000);
