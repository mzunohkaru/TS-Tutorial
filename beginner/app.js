// unknown : どのようなような型になるか分からない時に使用
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// anyより安全な理由として、unknown型は型チェックが必須
if (typeof userInput === "string") {
    userName = userInput;
}
// never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
