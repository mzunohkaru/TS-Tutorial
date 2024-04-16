export {};

const func = (): number => 23;

let numberAny: any = func();
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;
console.log(sumAny);

if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
