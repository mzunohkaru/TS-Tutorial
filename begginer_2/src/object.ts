export {};

// 非推奨
let profile1: object = { name: "山田" };
console.log(profile1);
profile1 = { age: 32 };
console.log(profile1);

// 推奨
let profile2: { name: string; age: number } = { name: "山田", age: 30 };
console.log(profile2);
// name & age のプロパティがないとエラーになる
profile2 = {
    name: "YAMADA",
    age: 32
    };
console.log(profile2);

