export {};

// 親クラス
abstract class Animal {
    abstract icon(): string;
}

// 抽象メソッドは、必ず継承しなければいけない
class Cat extends Animal {
    icon(): string {
        return "🦁";
    }
}

class Horse extends Animal {
    icon(): string {
        return "🐎";
    }
}

