function add_1(a: number, b: number): number {
  return a + b;
}
const result_1 = add_1(1, 2);
console.log(result_1);

const add_2 = function (a: number, b: number): number {
  return a + b;
};

console.log(add_2);

const result_2 = add_2(1, 2);
console.log(result_2);

// アロー関数
const add_3 = (a: number, b: number) => a + b;

console.log(add_3);

// 無名関数
const anotherAdd: (n1: number, n2: number) => number = function (
  num1,
  num2
): number {
  return num1 + num2;
};
