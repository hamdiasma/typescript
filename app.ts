// keybord type
type Combinable = number | string
type ConversionDesc = "as-number" | "as-string"


function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDesc
) {

    let result;
    if (typeof input1 === "number" && typeof input2 === "number" ||resultConversion ==="as-number") {
        result = +input1 +  +input2
    }else {
        result = input1.toString() + input2.toString()
    } 
    return result
}
    
const combinedAges = combine(30, 26,"as-number")
console.log(combinedAges) 


const combinedAges2 = combine("30", "26","as-number")
console.log(combinedAges2) 

const combinedNames = combine("ha", "mdi","as-string")
console.log(combinedNames)  