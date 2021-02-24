const Employee = require("../lib/employee");

describe("employee", () => {

    describe("name", () => {

        it("should return new employee name", () => {
            let empName = "Bob Barker";
            let newEmp = new Employee(empName);
            expect(newEmp.empName).toBe("Bob Barker");
            console.log(newEmp.empName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let empId = "e107";
            let newEmp = new Employee("", empId);
            expect(newEmp.empId).toBe("e107");
            console.log(newEmp.empId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let empEmail = "bbarker@gmail.com";
            let newEmp = new Employee("", "", empEmail);
            expect(newEmp.empEmail).toBe("bbarker@gmail.com");
            console.log(newEmp.empEmail);
        })
    })
   
})