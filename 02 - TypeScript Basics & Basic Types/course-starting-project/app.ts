let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'

// with unkown we need an extra evaluation. unkown > any: when not sure what type the input is
if (typeof userInput === 'string') {
  userName = userInput
}


// never: never returns anything
function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
  // while (true) {}
}

const result = generateError('An error occurred!', 500)

console.log(result)

