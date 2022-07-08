// unknown type

let userInput: unknown
let userName: string

userInput = 5;
userInput = "hi"

// userName = userInput // Type 'unknown' is not assignable ~/Desktop/ts (partOne) to type 'string'.

if (typeof userInput === "string") {
    // with unknown type we need extra check
    userName = userInput

    // console.log(userName)
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

const result = generateerror("error accurd", 500)

console.log(result)