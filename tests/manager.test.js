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
})