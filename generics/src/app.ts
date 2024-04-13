// const names: Array<string> = [];
// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Finished!!");
  }, 1000);
});

promise.then((result) => {
  console.log("wow " + result);
});

// Generic 関数
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Nakamura", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
const mergedObj2 = merge({ name: "Takahara" }, { age: 19 });
console.log(mergedObj2);
console.log(mergedObj2.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "No value";
  if (element.length > 0) {
    descriptionText = "Total value" + element.length;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Hello", "Afternoon"]));

// 制約
// keyof : keyプロパティが、第一引数のプロパティとして存在していることを保証する
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Sakota" }, "name");

// Generic Class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // 参照型 (object & array) では、indexOf で比較できない
    // → 配列の場合、indexOf で比較可能
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const obj = { name: "D_1" };
// objectStorage.addItem(obj);
// objectStorage.addItem({ name: "D_2" });
// objectStorage.removeItem(obj);
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial : Generic型に指定されたオブジェクトのプロパティをオプショナル型に変更する
  // Partial<CourseGoal> : いずれCourseGoal型にキャストする
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// readonly : 読み取り専用の配列と宣言するため、push(), pop()は使えない
const names: readonly string[] = ["A", "B", "C"];
// names.push("D");
// names.pop();

console.log(names);
