// unknown : どのようなような型になるか分からない時に使用
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// anyより安全な理由として、unknown型は型チェックが必須
if (typeof userInput === "string") {
  userName = userInput;
}

// never : 戻り値は必ず無い
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred", 500);

