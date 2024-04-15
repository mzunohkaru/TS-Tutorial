export {};

/*
const echo = (arg: number): number => {
    return arg;
}
*/

// T : Generics型
const echo = <T>(arg: T): T => {
    return arg;
}

let result = echo<number>(123);
let result2 = echo<string>("１２３");
let result3 = echo<boolean>(true);

console.log(result);
console.log(result2);
console.log(result3);

class Mirror<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }

    echo(): T {
        return this.value;
    }
}

let mirror = new Mirror<number>(456);
let mirror2 = new Mirror<string>("四五六");
let mirror3 = new Mirror<boolean>(true);

console.log(mirror.echo());
console.log(mirror2.echo());
console.log(mirror3.echo());

