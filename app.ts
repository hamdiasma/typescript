function add(n1:number,n2:number) {
    return n1 + n2
}

// white type
// function printResult2(num:number):undefined { // error no undefined type for function
//     console.log("Result: " + num)
// }

function printResult(num:number):void {
    console.log("Result: " + num)
}


//function without retun any things === undefined
printResult(add(10,9)) // 19
console.log(printResult(add(10,9))) //undifined