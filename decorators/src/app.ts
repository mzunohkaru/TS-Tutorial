// デコレータ
// デコレーターファクトリー
function Logger(logString: string) {
  console.log("Loggerファクトリー");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// デコレーターファクトリー : デコレーター関数を返す関数
function WithTemplate(template: string, hookId: string) {
  console.log("WithTemplateファクトリー");
  // Tはコンストラクタ関数を持ち、そのインスタンスはnameという文字列プロパティを持つ必要があります
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // 元のコンストラクタを拡張する新しいクラスを返します
    // 新しいクラスは、元のクラスの機能を継承しつつ、追加の機能を提供します
    return class extends originalConstructor {
      // 新しいクラスのコンストラクタを定義
      constructor(..._: any[]) {
        // 元のコンストラクタの機能を実行
        super();
        console.log("テンプレートを表示");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// Loggerデコレータは、JSがクラスの定義された時に実行 (インスタンスの初期設定を行う)
@Logger("ログ出力中 - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Tanaka";

  constructor() {
    console.log("Person オブジェクトを作成中...");
  }
}

const pers = new Person();
console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property デコレータ");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter デコレータ");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax / 100);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  console.log("Autobind デコレータ");
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "Clickしました";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", p.showMessage);
}

//　バリデータ
interface ValidatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  // target.constructor.name : "Course"を取得
  registeredValidators[target.constructor.name] = {
    // 現在のクラス名に対応する既存のバリデーションルールを新しいオブジェクトにコピー
    ...registeredValidators[target.constructor.name],
    // バリデーションを適用するプロパティ名(propName)をキーとして使用し、その値としてバリデーションルールの配列を設定
    [propName]: [
      // 現在のプロパティに対して既に登録されているバリデーションルールがある場合はそれを取得し、ない場合は空の配列を使用
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      // バリデーションルールの配列に"required"文字列を追加
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any): boolean {
  // obj.constructor.name : "Course"を取得
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
if (courseForm) {
  courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEL = document.getElementById("title") as HTMLInputElement;
    const priceEL = document.getElementById("price") as HTMLInputElement;

    const title = titleEL.value;
    const price = +priceEL.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
      alert("Invalid input");
      return;
    }
    console.log(createdCourse);
  });
}
