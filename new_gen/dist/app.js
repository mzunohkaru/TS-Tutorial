"use strict";
const add = (a, b = 1) => a + b;
const printOutput = output => {
    console.log(output);
};
printOutput(add(5));
const button = document.querySelector("button");
button.addEventListener("click", event => {
    console.log(event);
});
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstname: "Tanaka",
    age: 30
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const sum = (...numbers) => {
    return numbers.reduce((cur, acc) => cur + acc, 0);
};
const addedNumbers = sum(1, 2, 3.3, 7, 5);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);
console.log(remainingHobbies);
const { firstname: username, age } = person;
console.log(username, age);
