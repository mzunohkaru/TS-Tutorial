// アロー関数

const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = output => {
  console.log(output);
};

printOutput(add(5));

const button = document.querySelector("button")!;

button.addEventListener("click", event => {
  console.log(event);
});

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// const union = [...hobbies, ...activeHobbies];
activeHobbies.push(...hobbies);

console.log(activeHobbies);

// スプレッドオペレータ

const person = {
    firstname: "Tanaka",
    age: 30
}

const copiedPerson = {
  ...person,
};

console.log(copiedPerson);

// レストパラメータ

const sum = (...numbers: number[]) => {
  return numbers.reduce((cur, acc) => cur + acc, 0);
};

const addedNumbers = sum(1, 2, 3.3, 7, 5);

console.log(addedNumbers);

// 分割代入

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2);
console.log(remainingHobbies);

const { firstname: username, age } = person;

console.log(username, age);

