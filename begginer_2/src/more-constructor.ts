export {};

class Person {
  // 初期化処理を自動でしてくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person("ひかる", 20);
console.log(me);
