class Department {
  name: string = "DEFAULT"

  // function which is executed when an instance is getting created
  constructor(n: string) {
    this.name = n
  }
}

const accounting = new Department("Accounting")

console.log(accounting)
