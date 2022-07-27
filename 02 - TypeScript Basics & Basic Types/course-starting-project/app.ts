// const person: {
  //   name: string;
  //   age: number;
  // } = {
  const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"]
  }

let favoriteActivities: string[]
favoriteActivities = ["Sports"]

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) !!! ERROR !!!! because typescript knows its map works only for arrays not on strings
}

// console.log(person.name)
