function add1(n1: number, n2: number, printResult1: boolean) {
  
  if (printResult1) {
   console.log(n1 + n2)
  } else {
    return n1 + n2
  }
  
}


const number1: number = 5
const number2 = 2.8
const printResult1 = true



const result1 = add1(number1, number2,printResult1)
