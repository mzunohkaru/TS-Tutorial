export {};

class Player {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

interface Magician {
    magic(): void;
}

interface Healer {
    heal(): void;
}

class Player_A extends Player implements Magician, Healer {
    constructor(name: string) {
        super(name);
    }
    magic(): void {
        console.log(`${this.name} 🪄`);
    }
    heal(): void {
        console.log(`${this.name} ❤️‍🩹`);
    }
}


const player_A = new Player_A("Kamereon");
player_A.magic();
player_A.heal();

