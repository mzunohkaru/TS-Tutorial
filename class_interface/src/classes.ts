// abstract : 継承されるためだけのもの
abstract class Department {
  static fiscalYear = 2020;
  //   name: string;
  // protected : このクラスと、Departmentを継承したクラス (サブクラス) からのみアクセス可能
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.fiscalYearだとエラーになる。
    // console.log(Department.fiscalYear);
  }

  // メソッドの設計を実装
  // 引数 : Departmentクラスか Departmentクラスを継承した
  //   void : 戻り値は無い
  abstract describe(this: Department): void;

  addEmployee(e: string) {
    this.employees.push(e);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // Getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  // Setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  //  private constructor : クラスの外で、Newを使いインスタンスを生成できなくする
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(e: string) {
    if (e === "Zako") {
      return;
    }
    this.employees.push(e);
  }
}

// staticをnewでインスタンス化せずに呼び出せる
const emp1 = Department.createEmployee("Max");
console.log(emp1, Department.fiscalYear);

// const marketing = new Department("d1", "Marketing");

// marketing.addEmployee("Tanaka");
// marketing.addEmployee("Sato");

// エラー
// marketing.employees[2] = ("Yamada");

// marketing.name = "Sales";

// marketing.describe();
// marketing.printEmployeeInformation();

// const marketingCopy = { name: "MR", describe: marketing.describe };

// marketingCopy.describe();

const it = new ITDepartment("d2", ["ZZZ"]);
it.addEmployee("Yamada");
it.addEmployee("Aizawa");
it.describe();
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment("d3", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "下半期レポート";

// console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.printReports();

accounting.addEmployee("Zako");
accounting.addEmployee("Sawada");
accounting.printEmployeeInformation();

accounting.describe();
