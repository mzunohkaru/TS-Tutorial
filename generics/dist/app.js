"use strict";
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Finished!!");
    }, 1000);
});
promise.then((result) => {
    console.log("wow " + result);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Nakamura", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.age);
const mergedObj2 = merge({ name: "Takahara" }, { age: 19 });
console.log(mergedObj2);
console.log(mergedObj2.age);
function countAndDescribe(element) {
    let descriptionText = "No value";
    if (element.length > 0) {
        descriptionText = "Total value" + element.length;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Hello", "Afternoon"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
extractAndConvert({ name: "Sakota" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Data1");
textStorage.addItem("Data2");
textStorage.removeItem("Data1");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["A", "B", "C"];
console.log(names);
//# sourceMappingURL=app.js.map