export {};

class Person {
  name: string;
  age: number;
  gender: boolean;
  
  constructor(name: string, age: number, gender: boolean) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getGender(): string {
    const gender = this.gender ? "male" : "female";
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${gender}`;
  }
}

let taro = new Person("taro", 20, true);

console.log(taro.getGender());

