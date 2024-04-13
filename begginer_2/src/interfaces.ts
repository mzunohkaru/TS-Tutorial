export {};

type ObjectType = { name: string; age: number };

interface ObjectInterface {
    name: string;
    age: number;
}

let profile1: ObjectInterface = { name: "Yamada", age: 24 };
console.log(profile1);
