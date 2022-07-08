// unknown type

let userInput: unknown
let userName: string

userInput = 5;
userInput = "hi"

// userName = userInput // Type 'unknown' is not assignable ~/Desktop/ts (partOne) to type 'string'.

if (typeof userInput === "string") {
    // with unknown type we need extra check
    userName = userInput

    console.log(userName)
}


