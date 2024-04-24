export {};

let value: number | string;

value = 1;
console.log(value);
value = "foo";
console.log(value);

// ※ エラー
// value = true;

let unionTypes: (number | string)[] = [1, "foo"];
console.log(unionTypes);

