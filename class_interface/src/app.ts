// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 10));

// interfaceには、構造のみ記述
interface Named {
  // readonly : interfaceを実装するfirstNameプロパティは、初期化時に1度だけ値を設定可能
  readonly firstName?: string;
  lastName?: string;

  // outputName? : 存在してもしなくても良い
  outputName?: string;
}

interface Greetable extends Named {
  great(phrase: string): void;
}

class Person implements Greetable {
  //   lastName: string;
  firstName?: string;
  age = 30;

  constructor(firstName?: string) {
    if (firstName) {
      this.firstName = firstName;
    }
    // this.lastName = lastName;
  }

  great(phrase: string) {
    if (this.firstName) {
      console.log(phrase + " " + this.firstName);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = "Yamada";

user1.great("Hello");
console.log(user1);
