function add(a: number, b: number): number {
  console.log("DEBUG: Add");
  return a + b;
}

function calculate(
  a: number,
  b: number,
  callback: (a: number, b: number) => number
) {
  console.log("DEBUG: Calculate");
  return callback(a, b);
}

const addResult = calculate(1, 2, add);
console.log(addResult);

function multiply(a: number, b: number): number {
  console.log("DEBUG: Multiply");
  return a * b;
}

const multiplyResult = calculate(1, 2, multiply);
console.log(multiplyResult);

setTimeout(() => {
  console.log("DEBUG: setTimeout");
}, 2000);

/*
DEBUG: Calculate
DEBUG: Add
3
DEBUG: Calculate
DEBUG: Multiply
2
DEBUG: setTimeout
*/