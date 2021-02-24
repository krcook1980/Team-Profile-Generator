const Manager = require("../lib/manager");

describe("manager", () => {
    describe ("number", () => {
        it("should return new manager office number", () => {
         let empNum = "10";
         let newEmp = new Manager("","","",empNum);
         expect(newEmp.empNum).toBe("10"); 
        })
    })
    describe ("role", () => {
        it("should return new manager role", () => {
         let empRole = "Manager";
         let newEmp = new Manager(empRole);
         expect(newEmp.empRole).toBe("Manager"); 
        })
    })
    
    describe("name", () => {

        it("should return new employee name", () => {
            let empName = "Bob Barker";
            let newEmp = new Manager(empName);
            expect(newEmp.empName).toBe("Bob Barker");
            console.log(newEmp.empName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let empId = "e107";
            let newEmp = new Manager("", empId);
            expect(newEmp.empId).toBe("e107");
            console.log(newEmp.empId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let empEmail = "bbarker@gmail.com";
            let newEmp = new Manager("", "", empEmail);
            expect(newEmp.empEmail).toBe("bbarker@gmail.com");
            console.log(newEmp.empEmail);
        })
    })
})