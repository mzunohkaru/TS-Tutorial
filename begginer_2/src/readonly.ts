export {};

class VisaCard {
    constructor(public readonly owner: string) {
        this.owner = owner;
    }
}

let myVisaCard = new VisaCard("taro");
console.log(myVisaCard.owner);

// readonly属性なので、変更不可能
// myVisaCard.owner = "太郎";
