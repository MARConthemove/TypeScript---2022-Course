// const userName = "Max"
// userName = "Maximilian"
// let age = 30

// age = 29

// function add(a: number, b: number) {
//   var result
//   result = a + b
//   return result
// }

// default parameter for "b"
// default arguments have to be at the last position otherwise it will not work!
// const add = (a: number, b: number = 1) => a + b

// const printOutput: (a: string | number) => void = output  => {
//   console.log(output)
// }

// const button = document.querySelector("button")

// if (button) {
//   button.addEventListener("click", event => console.log(event))
// }

const hobbies = ["sports", "cooking"]

// spread opperator:
const activeHobbies = ["hiking", ...hobbies]

// activeHobbies.push(hobbies[0], hobbies[1])
// better:
activeHobbies.push(...hobbies)

const person = {
  firstName: "Max",
  age: 30
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  }, 0)
}

const addedNumbers = add(5, 10 , 2, 3.7)
console.log(addedNumbers)

// array or object destructuring:
const [hobby1, hobby2, ...remainingHobbies] = hobbies
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
console.log(hobbies, hobby1, hobby2)


const { firstName: userName, age } = person
console.log(userName, age)

// console.log(copiedPerson)
// console.log(activeHobbies)
// console.log(add(2,5))

// printOutput(add(5))

// with let active blockscope!
// if (age > 20) {
//   let isOld = true
// }

// console.log(isOld)

// console.log(result)
