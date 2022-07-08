// unknown type
var userInput;
var userName;
userInput = 5;
userInput = "hi";
// userName = userInput // Type 'unknown' is not assignable ~/Desktop/ts (partOne) to type 'string'.
if (typeof userInput === "string") {
    // with unknown type we need extra check
    userName = userInput;
    console.log(userName);
}
