export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}

      profile() {
        return `Name: ${this.name}`;
      }
    }
  }
  export namespace Hiroshima {
    export class Person {
      constructor(public name: string) {}

      profile() {
        return `Name: ${this.name} じゃけぇ〜`;
      }
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}

    profile() {
      return `Name: ${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }
}

const taro = new Japanese.Tokyo.Person("Taro");
const yamada = new Japanese.Hiroshima.Person("Yamada");
const john = new English.Person("John", "Doe", "Smith");

console.log(taro.profile());
console.log(yamada.profile());
console.log(john.profile());
