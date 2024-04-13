export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = "Taro";
    static lastName: string = "Yamada";

    static work() {
        return `${this.firstName} ${this.lastName} is a programmer`;
    }
}

console.log(Me.isProgrammer);
console.log(Me.firstName);
console.log(Me.lastName);
console.log(Me.work());
