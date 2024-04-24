console.log('DEBUG: Calculate');

const add = (a: number, b: number) => {
  return a + b;
};

console.log('DEBUG: Add');
console.log(add(1, 2));

console.log('DEBUG: Multiply');
console.log(add(1, 2));

console.log('DEBUG: setTimeout');
setTimeout(() => {
  console.log('DEBUG: setTimeout');
}, 1000);

