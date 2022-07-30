let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// typeof check for strings
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {thor error // message}
}

generateError('An error occurred!', 500);
