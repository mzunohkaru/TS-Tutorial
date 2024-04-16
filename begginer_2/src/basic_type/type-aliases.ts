export {};

type Mojiretsu = string;
type Suji = number;

let name: Mojiretsu = "";
let age: Suji = 23;

name = "Yamada";
age = 24;

console.log(name, age);

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: "山田",
  age: 24,
};

console.log(example1);

// `Profile2` は `Profile` 型に `gender` プロパティ（文字列型）を追加した新しい型です。
// これにより、`Profile2` 型は `name`, `age`, `gender` の3つのプロパティを持つことになります。
type Profile2 = Profile & { gender: string };

const example2: Profile2 = {
  name: "Yamada",
  age: 24,
  gender: "male",
};

console.log(example2);

