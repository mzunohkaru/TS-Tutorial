export {};

function double(value: number): number;
function double(value: string): string;
function double(value: number | string) {
  return typeof value === "number" ? value * 2 : value + value;
}

console.log(double(10));
console.log(double("10"));

