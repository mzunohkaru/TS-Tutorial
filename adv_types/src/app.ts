// 交差型
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// 関数オーバーロード
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // typeガード
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(1, 2));
console.log(add("1", "2"));
console.log(add("Hello", 2));

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // typeガード
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Max", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(cargo: number) {
    console.log("Loading cargo..." + cargo);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // typeガード
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });
moveAnimal({ type: "horse", runningSpeed: 50 });

// type cast
const paragraph = document.querySelector("p")! as HTMLParagraphElement;
paragraph.textContent = "Pタグ";

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);
userInputElement.value = "ユーザー名";

// どのようなプロパティが入るか分からない状態
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Invalid email",
  username: "Invalid username",
};

const { email, username } = errorBag;
console.log(email);
console.log(username);

// オプショナルチェーン
const fetchedUserData = {
  id: "u1",
  name: "Ohtani",
  job: { title: "CEO", description: "My own company" },
};
// ? : バックエンドから取得したデータのjobフィールドがnullで帰ってきても、エラーにならにようにする
console.log(fetchedUserData?.job?.title);

// const userInput = null;
// const userInput = "";
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
