// Enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Tanaka",
  age: 20,
  hobby: ["Sports", "Reading"],
  role: Role.ADMIN,
};

console.log(person.name);
console.log(person.age);
console.log(person.role);

// Array
for (const hobby of person.hobby) {
  console.log(hobby.toUpperCase());
}

// Tuple
// const person: {
//     name: string;
//     age: number;
//     hobby: string[];
//     role: [number, string];
//   } = {
//     name: "Tanaka",
//     age: 20,
//     hobby: ["Sports", "Reading"],
//     role: [2, "author"],
//   };
// person.role.push("admin");

// Enum
if (person.role === Role.ADMIN) {
  console.log("管理者ユーザ");
}

// Any = できるだけ使用を避ける
