function add(n1: number, n2: number) {
  return n1 + n2
}

// "void" for function which dont return a value
function printResult(num: number): void {
  console.log('Result: ' + num)
}

// let someValue: undefined

printResult(add(5, 12))

let combineValues: (a: number, b: number) => number
// combineValues = 5

combineValues = add
// combineValues = printResult

console.log(combineValues(8, 8))
