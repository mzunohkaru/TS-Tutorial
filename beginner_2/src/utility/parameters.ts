export {};

const debugProfile = (name: string, age: number) => {
  console.log(name, age);
};

debugProfile("John", 20);
debugProfile("Doe", 30);

type Profile = Parameters<typeof debugProfile>;
/* [name: string, age: number] */

const profile: Profile = ["Tanaka", 20];

debugProfile(...profile);

// <T extends (...args: any) => any> と T extends (...args: infer P) => any は同じ意味
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
