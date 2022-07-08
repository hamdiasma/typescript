function add3(n1:number,n2:number) {
    return n1 + n2
}

// white type
// function printResult2(num:number):undefined { // error no undefined type for function
//     console.log("Result: " + num)
// }

function printResult(num:number):void {
    console.log("Result: " + num);
}


// callback function type

function addHandler(n1: number, n2: number,cb:(num:number)=> void) {
    const result = n1 + n2
    cb(result)
    
}

//function without retun any things === undefined
printResult(add3(10, 9)) // 19

// let combineValues:Function; type Function
let combineValues:(a:number,b:number)=> number; //accept any nuber and return number 

combineValues = add3
// combineValues= 5 // error type function
//combineValues = printResult // undefined

console.log(combineValues(8,8))

// return undefined
//console.log(printResult(add3(10,9))) //undifined




addHandler(10, 5, (res) => {
    console.log("cb: ", res)
})