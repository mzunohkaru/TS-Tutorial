export {};

type Profile = {
    name: string;
    age: number;
}

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof PartialProfile;

const n : PropertyTypes = 'name';
const a : PropertyTypes = 'age';
// Error
// const test:PropertyTypes = 'gender';

type Optional<T> = {
    [P in keyof T]?: T[P];
};
type OptionalProfile = Optional<Profile>;

