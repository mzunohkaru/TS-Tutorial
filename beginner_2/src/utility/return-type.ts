export {};

function add(a: number, b: number) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

// add関数の戻り値の型を取得
type ReturnTypeFromAdd = ReturnType<typeof add>;

// T = 関数の型
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // infer = 条件の一部として型を推論する
  ? R
  : any;
