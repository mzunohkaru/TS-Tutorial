export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('Taro', 47);
console.log(taro);

type PersonType = ConstructorParameters<typeof Person>;

const rei: PersonType = ['Rei', 21];

const person = new Person(...rei);
console.log(person);

