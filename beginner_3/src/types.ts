type User = {
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  isLoggedIn: boolean;
  followers: Followers[];
};

type Followers = {
  name: string;
};

type UserName = User["name"];
type UserFollowers = User["followers"][number]["name"];

const userFollowers: UserFollowers = "John";

console.log(userFollowers);

type UserKeys = keyof User;

const userKeys: UserKeys = "followers";

console.log(userKeys);
