class Department {
  // public is default = accessable from outside
  // private only allows to change properties with methods from inside the class
  public name: string = "DEFAULT"
  private employees: string[] = []

  // function which is executed when an instance is getting created
  constructor(n: string) {
    this.name = n
  }

  // methods
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee)
  }
  printEmloyeeInformation() {
    console.log("length: ", this.employees.length)
    console.log("employee array: ", this.employees)
  }

}

const accounting = new Department("Accounting")

accounting.addEmployee("Max")
accounting.addEmployee("Manu")

// this shouldn't be allowed!
// accounting.employees[2] = "Anna"

accounting.printEmloyeeInformation()

accounting.describe()


// const accountingCopy = { name: "DUMMY", describe: accounting.describe }

// accountingCopy.describe()


