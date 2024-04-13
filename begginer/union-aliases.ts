type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable | boolean,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(5, 6, "as-number");
console.log(combinedAges);

const combinedNumberAges = combine("5", "6", "as-number");
console.log(combinedNumberAges);

const combinedStringAges = combine("5", "6", "as-text");
console.log(combinedStringAges);