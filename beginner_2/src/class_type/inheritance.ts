export {};

class Animal {
  constructor(public name: string, public readonly icon: string) {}

  run(speed: number): string {
    return `${this.icon} ${this.name} 💨, RunSpeed: ${speed}`;
  }
}

class Bard extends Animal {
  public speed: number;

  constructor(name: string, icon: string, speed: number) {
    super(name, icon);
    this.speed = speed;
  }

  run(speed: number): string {
    return super.run(speed);
  }

  fly(): string {
    return `${this.icon} ${this.name} 🪽, FlySpeed: ${this.speed}`;
  }
}

let animal = new Animal("Animal", "動物");
let bard = new Bard("Bard", "🐔", 230);

console.log(animal.run(10));
console.log(bard.run(2));
console.log(bard.fly());

bard.name = "BARD";
// readonly : 読み取り専用のためエラー
// bard.icon = "🦆";
