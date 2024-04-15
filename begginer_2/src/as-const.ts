export {};

let name = "Yamada";

name = "Tanaka";

let nickname = "Tanaka" as const;

// nickname = "TanakA";

// as const を設定すると、すべてのプロパティが readonly になる
let profile = {
    name: "Yamada",
    height: 170,
} as const;


// profile.name = "Tanaka";
// profile.height = 180;
