abstract class Department {
  static fiscalYear = 2020
  // public is default = accessable from outside
  // private only allows to change properties with methods from inside the class

  // private readonly id: string
  // private name: string = "DEFAULT"
  // protected is like private but also accessible with inheritance
  protected employees: string[] = []

  // function which is executed when an instance is getting created
  // readonly allows only set property during initilization
  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
    // console.log(Department.fiscalYear)
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  // methods
  abstract describe(this: Department): void
    // console.log(`Department (${this.id}): ${this.name}`)


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

  describe() {
    console.log("IT DEPARTMENT - ID: " + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report found.")
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!")
    }
    this.addEmployee(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment("d2, []")
    return this.instance
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
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee("Max")
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["Marc", "Manu"])

// const accounting = new AccountingDepartment("d2", [])
const accounting = AccountingDepartment.getInstance()

accounting.addReport("Something went wrong ...")
console.log(accounting.mostRecentReport)

accounting.addEmployee("Max")
accounting.addEmployee("Manu")

accounting.printReports()
// accounting.printEmployeeInformation()

it.addEmployee("Max")
it.addEmployee("Manu")

// this shouldn't be allowed!
// it.employees[2] = "Anna"

it.printEmloyeeInformation()

it.describe()
console.log(it)


// const accountingCopy = { name: "DUMMY", describe: accounting.describe }

// accountingCopy.describe()
