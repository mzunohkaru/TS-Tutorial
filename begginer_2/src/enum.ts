export {};

enum Months {
    January = 1,
    February, // 2
    March, // 3
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

let month: Months = Months.January;
month = Months.February;
month = Months.October;
month = Months.November;
month = Months.December;

console.log(Months.February);

enum COLORS {
    RED = "#FF0000",
    WHITE = "#FFFFFF",
    BLUE = "#0000FF",
}

let color: COLORS = COLORS.RED;
color = COLORS.WHITE;
color = COLORS.BLUE;

console.log(color);

enum COLORS {
    YELLOW = "#FFFF00"
}
console.log(COLORS.YELLOW);

