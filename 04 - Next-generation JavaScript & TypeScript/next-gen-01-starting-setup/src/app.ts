const userName = "Max"
// userName = "Maximilian"
let age = 30

age = 29

// function add(a: number, b: number) {
//   var result
//   result = a + b
//   return result
// }

// default parameter for "b"
// default arguments have to be at the last position otherwise it will not work!
const add = (a: number, b: number = 1) => a + b

const printOutput: (a: string | number) => void = output  => {
  console.log(output)
}

const button = document.querySelector("button")

if (button) {
  button.addEventListener("click", event => console.log(event))
}

console.log(add(2,5))

printOutput(add(5))

// with let active blockscope!
// if (age > 20) {
//   let isOld = true
// }

// console.log(isOld)

// console.log(result)
