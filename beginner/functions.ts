function add(a: number, b: number) {
  return a + b;
}

// 返り値なし = void
function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(a: number, b: number, callback: (num: number) => void) {
  const result = a + b;
  callback(result);
}

addAndHandle(15, 15, (result) => {
  console.log(result);
});

// 引数と返り値を定義することで、add関数以外の関数を代入不可能にする
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 3;

console.log(combineValues(5, 10));

printResult(add(5, 10));
