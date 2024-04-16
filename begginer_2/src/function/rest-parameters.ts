export {};

const reducer = (acc: number, cur: number): number => {
  console.log({ acc, cur });
  return acc + cur;
};

// : (...values: number[]) => number = -関数の型アノテーション
// (...values: number[]): number =>　{} -数値の引数を配列として扱う
// => number = -関数全体の型を定義する際に使用され、関数の外側で使用する
// : number => -アロー関数の型アノテーションで、関数の内側で使用する
const sum: (...values: number[]) => number = (...values: number[]): number => {
  let total = values.reduce(reducer);
  return total;
};

console.log(sum(1, 2, 3, 4, 5));
