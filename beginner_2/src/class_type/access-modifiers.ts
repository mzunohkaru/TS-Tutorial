export {};

class Person {
  name: string;
  age: number;
  gender: boolean;
  private cardNumber: string;
  protected nationality: string;

  constructor(name: string, age: number, gender: boolean, cardNumber: string, nationality: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.cardNumber = cardNumber;
    this.nationality = nationality;
  }

  profile(): string {
    const gender = this.gender ? "male" : "female";
    const cardNumber = this.cardNumber.slice(0, 3) + "*******";
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${gender}, CardNumber: ${cardNumber}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, gender: boolean, cardNumber: string, nationality: string) {
    super(name, age, gender, cardNumber, nationality);
  }

  profile(): string {
    // privateプロパティは、サブクラスで参照不可能
    // const cardNumber = this.cardNumber.slice(0, 3) + "*******";

    // protectedプロパティは、サブクラスで参照可能
    const n = this.nationality;

    return `${super.profile()}, Nationality: ${n}`;
  }
}

let taro = new Person("taro", 20, true, "1234567890", "Japan");

console.log(taro.name);
// privateプロパティなので、エラーが発生 (Class内では参照可能)
// console.log(taro.cardNumber);
console.log(taro.profile());
// protectedプロパティなので、エラーが発生 (Class内とSubClass内では参照可能)
// console.log(taro.nationality);

let john = new Android("John", 20, true, "1234567890", "USA");
console.log(john.profile());

