function add(n1, n2) {
    return n1 + n2;
}
// white type
// function printResult2(num:number):undefined { // error no undefined type for function
//     console.log("Result: " + num)
// }
function printResult(num) {
    console.log("Result: " + num);
}
// callback function type
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
//function without retun any things === undefined
printResult(add(10, 9)); // 19
// let combineValues:Function; type Function
var combineValues; //accept any nuber and return number 
combineValues = add;
// combineValues= 5 // error type function
//combineValues = printResult // undefined
console.log(combineValues(8, 8));
// return undefined
//console.log(printResult(add(10,9))) //undifined
addHandler(10, 5, function (res) {
    console.log("cb: ", res);
});
