// unknown type

let userInput: unknown
let userName1: string

userInput = 5;
userInput = "hi"

// userName1 = userInput // Type 'unknown' is not assignable ~/Desktop/ts (partOne) to type 'string'.

if (typeof userInput === "string") {
    // with unknown type we need extra check
    userName1 = userInput

    // console.log(userName1)
}


//

// never => never return any think

function generateerror(message:string,code:number):never {
    throw {
        message: message,
        errorCode: code
    } 
// never return 
    // while (true) {
        
    // }
}

const result2 = generateerror("error accurd", 500)

console.log(result2)