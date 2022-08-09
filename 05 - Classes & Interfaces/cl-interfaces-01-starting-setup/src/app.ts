class Department {
  name: string = "DEFAULT"

  // function which is executed when an instance is getting created
  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

const accounting = new Department("Accounting")

const accountingCopy = { name: "M.Laundry", describe: accounting.describe }


accounting.describe()
accountingCopy.describe()

console.log(accounting)
