class Department {
  // public is default = accessable from outside
  // private only allows to change properties with methods from inside the class

  // private readonly id: string
  // private name: string = "DEFAULT"
  // protected is like private but also accessible with inheritance
  protected employees: string[] = []

  // function which is executed when an instance is getting created
  // readonly allows only set property during initilization
  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  // methods
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }
  addEmployee(employee: string) {
    // validation etc
    // this.id = "d2" not allowed because of readonly property
    this.employees.push(employee)
  }
  printEmloyeeInformation() {
    console.log("length: ", this.employees.length)
    console.log("employee array: ", this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]

  constructor(id: string, admins: string[]) {
    // whenever the inheriting class has its own constructor function we need to call super()
    // super() has to stand on top
    super(id, "IT")
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return
    }
    // not accessible here because of private keyword in the parent class
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment("d1", ["Marc", "Manu"])
const accounting = new AccountingDepartment("d2", [])

accounting.addReport("Something went wrong ...")

it.addEmployee("Max")
it.addEmployee("Manu")

// this shouldn't be allowed!
// it.employees[2] = "Anna"

it.printEmloyeeInformation()

it.describe()
console.log(it)


// const accountingCopy = { name: "DUMMY", describe: accounting.describe }

// accountingCopy.describe()
