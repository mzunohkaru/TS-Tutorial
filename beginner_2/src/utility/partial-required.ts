export {};

type Profile = {
    name: string;
    age: number;
    gender?: string;
}

type PartialProfile = Partial<Profile>;

// Partial : オプショナルなプロパティにしてくれる
/*
type PartialProfile = {
    name?: string | undefined;
    age?: number | undefined;
    gender?: string | undefined;
}
*/

type RequiredProfile = Required<Profile>;
// Required : すべて必須のプロパティにしてくれる
/*
type RequiredProfile = {
    name: string;
    age: number;
    gender: string;
}
*/
