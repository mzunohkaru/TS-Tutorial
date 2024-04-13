export {};

// optional : あってもなくても良い引数
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  console.log("DEBUG:", printable);
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.75, 65);
bmi(1.75, 65, true);
bmi(1.75, 65, false);
