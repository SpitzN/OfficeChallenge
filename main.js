//write your code here to make the tests pass



class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name, office) {
        this.name = name
        this.office = office
    }
    work(office) {
        for (let index = 0; index < 10; index++) {
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name
        this.employees = []
    }
    askEmployeesToWork(office) {
        for (let emp of this.employees) {
            emp.work(office)
        }
    };
    hireEmployee(name){
        this.employees.push(new Employee(name))
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }
    hireManager(name) {
        this.managers.push(new Manager(name))
    }
    startWorkDay() {
        for (let man of this.managers){
        man.askEmployeeToWork(this)
        }
        this.cleaners.forEach(cln => {
            cln.clean()
        });
        
    }
}
