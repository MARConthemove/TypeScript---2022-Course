// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string,
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// }

enum Role {ADMIN = 5, READ_ONLY, AUTHOR = 200};

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
}

// person.role.push("admin")
// person.role[1] = 10 => ERROR

// person.role = [0, "admin", "user"] // ERROR

let favoriteActivities: string[]
favoriteActivities = ["Sports"]

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) !!! ERROR !!!! because typescript knows its map works only for arrays not on strings
}

if (person.role === Role.AUTHOR) {
  console.log("is author")
}

// console.log(person.name)
