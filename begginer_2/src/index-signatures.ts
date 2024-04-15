export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: "Tanaka",
  underTwenty: true,
};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

profile.name = "田中";
profile.age = 22;
profile.nationality = "Japan";
profile.underTwenty = false;

console.log(profile);
