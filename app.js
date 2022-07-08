// unknown type
var userInput;
var userName;
userInput = 5;
userInput = "hi";
// userName = userInput // Type 'unknown' is not assignable ~/Desktop/ts (partOne) to type 'string'.
if (typeof userInput === "string") {
    // with unknown type we need extra check
    userName = userInput;
    // console.log(userName)
}
//
// never => never return any think
function generateerror(message, code) {
    throw {
        message: message,
        errorCode: code
    };
    // never return 
    // while (true) {
    // }
}
var result = generateerror("error accurd", 500);
console.log(result);
