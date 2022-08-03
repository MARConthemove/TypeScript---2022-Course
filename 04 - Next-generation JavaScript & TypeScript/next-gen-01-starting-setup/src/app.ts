const userName = "Max"
// userName = "Maximilian"
let age = 30

age = 29

function add(a: number, b: number) {
  var result
  result = a + b
  return result
}

// with let active blockscope!
if (age > 20) {
  let isOld = true
}

console.log(isOld)
// console.log(result)
