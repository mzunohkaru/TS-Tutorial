export {};

// owner
// + 所有権
// + 初期化時に設定可能
// + 途中で変更不可
// + 参照可能

// secretNumber
// + 個人番号
// + 初期化時に設定可能
// + 途中で変更可能
// + 参照不可能

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(value: number) {
        this._secretNumber = value;
    }

    debugPrint() {
        return `owner: ${this._owner}, secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard("taro", 1234567890);
console.log(card.debugPrint());
console.log(card.owner);
// 途中で変更不可のためエラー
// card.owner = "TARO";

card.secretNumber = 6666666666;
console.log(card.debugPrint());

// 出力結果 : undefinedとなっており、参照不可になっている
console.log(card.secretNumber);

