"use strict";
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(5, 10));
class Person {
    constructor(firstName) {
        this.age = 30;
        if (firstName) {
            this.firstName = firstName;
        }
    }
    great(phrase) {
        if (this.firstName) {
            console.log(phrase + " " + this.firstName);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1;
user1 = new Person();
user1.great("Hello");
console.log(user1);
//# sourceMappingURL=app.js.map