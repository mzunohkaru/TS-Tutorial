export {};

type BaseballPlayer = {
  name: string;
  number: number;
};

type Pitcher = BaseballPlayer & {
  pitchingHand: "right" | "left";
};

type Batter = BaseballPlayer & {
  battingAverage: number;
};

type Player = Pitcher & Batter;

let player: Player = {
  name: "佐々木",
  number: 1,
  pitchingHand: "right",
  battingAverage: 0.3,
};

console.log(player);
