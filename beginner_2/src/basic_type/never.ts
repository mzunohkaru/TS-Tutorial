export {};

// never : 関数が値を持たない
function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error("result");
    console.log(result);
} catch (error) {
    console.log({ error });
}

