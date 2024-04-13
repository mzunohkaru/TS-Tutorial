export {};

// bmi関数にアノテーションしている
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
) {
  return weight / (height * height);
};

console.log(bmi(1.75, 65));
