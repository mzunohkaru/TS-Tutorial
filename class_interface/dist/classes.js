"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(e) {
        this.employees.push(e);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
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
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(e) {
        if (e === "Zako") {
            return;
        }
        this.employees.push(e);
    }
}
const emp1 = Department.createEmployee("Max");
console.log(emp1, Department.fiscalYear);
const it = new ITDepartment("d2", ["ZZZ"]);
it.addEmployee("Yamada");
it.addEmployee("Aizawa");
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = "下半期レポート";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Zako");
accounting.addEmployee("Sawada");
accounting.printEmployeeInformation();
accounting.describe();
//# sourceMappingURL=classes.js.map