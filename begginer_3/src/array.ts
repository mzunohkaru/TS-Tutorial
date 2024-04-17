const numbers = [0, 10, 20, 30, 40, 50];

const result_forEach = numbers.forEach((num, i) => {
  const double = num * 2;
  console.log(`${i}: ${num}, ${double}`);
});

console.log(result_forEach);

const names = ["John", "Jane", "Doe"];

const result_map = names.map((name, i) => {
  return {
    id: i,
    name: name,
  };
});

console.log(result_map);

const result_filter = result_map.filter((user) => user.id % 2 === 0);

console.log(result_filter);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

