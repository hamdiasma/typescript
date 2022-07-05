function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedAges2 = combine("30", "26", "as-number");
console.log(combinedAges2);
var combinedNames = combine("ha", "mdi", "as-string");
console.log(combinedNames);
