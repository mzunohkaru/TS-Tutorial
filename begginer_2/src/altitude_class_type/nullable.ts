export {};

let profile: { name: string; age: number | null, gender: string | null } = {
    name: "Yamada",
    age: 2,
    gender: null,
}

profile.age = null;
profile.gender = "male";

console.log(profile);


// プロパティ名? : number | undefined
const profile2: { name: string; age?: number, gender?: string } = {
    name: "Yamada",
    age: 2,
}

