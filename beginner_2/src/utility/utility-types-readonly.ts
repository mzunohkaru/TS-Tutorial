export {};

type Profile = {
    name: string;
    age: number;
}

const me: Profile = {
    name: 'Tanaka',
    age: 20,
}

me.age++;

console.log(me);

type PersonalInformation = Readonly<Profile>;

let personalInformation: PersonalInformation = {
    name: 'Tanaka',
    age: 20,
}
// readonlyのプロパティを操作できないため、エラー
// personalInformation.age++;

console.log(personalInformation);

