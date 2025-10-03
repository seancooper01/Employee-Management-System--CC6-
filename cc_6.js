// Coding Challenge 06
// Step 1 - Complete 

// Step 2
class Employee {
    constructor(name, department) {
        this.name = name; 
        this.department = department;
        
    }


describe() {
    return `${this.name} currently works in the ${this.department} department.`

    }
};

// Step 3
class Manager extends Employee {
    constructor(name, department, teamSize){
        super(name, department)
        this.teamSize = teamSize; 
    }
    
    describe() {
        return `${this.name} is a manager who oversees ${this.teamSize} people 
that work in the ${this.department} department.`
    }
};
// Step 4 
const emp1 = new Employee("Linda", "Hospitality")
const emp2 = new Employee("Sam", "Tech")
const emp3 = new Employee("Paul", "Marketing")
const mgr1 = new Manager("Todd", "Hospitality", 20)
const mgr2 = new Manager("Susan", "Marketing", 8)
const mgr3 = new Manager("Victor", "Tech", 25)

const people = [emp1, emp2, emp3, mgr1, mgr2, mgr3]
for (const p of people) {
    console.log(`${p.describe()} \n`) 
}; // test console log for the new employees and managers

// Step 5
class Company {
    constructor(name) {
        this.name = name; 
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        console.log(`\n${this.name} Employee Directory`);
        for (const person of this.employees) {
            console.log(person.describe());
            console.log(); // blank line in the console 
        }
    }
};
/*
const testCompany = new Company("Test Inc");
testCompany.addEmployee(emp1);
testCompany.listEmployees();
*/ //test only 
//Code goes here