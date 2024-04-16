export {};

function add(a: number, b: number) {
    return a + b;
}

const result = add(1, 2);
console.log(result);

// add関数の戻り値の型を取得
type ReturnTypeFromAdd = ReturnType<typeof add>;

