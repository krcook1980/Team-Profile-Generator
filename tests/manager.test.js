const Manager = require("../lib/manager");

describe("manager", () => {
    describe ("number", () => {
        it("should return new manager office number", () => {
         let empNum = "801-867-5309";
         let newEmp = new Manager(empNum);
         expect(newEmp.empNum).toBe("801-867-5309")   
        })
    })
})