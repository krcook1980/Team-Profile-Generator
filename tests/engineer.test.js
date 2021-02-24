const Engineer = require("../lib/engineer");

describe("engineer", () => {
    describe("github", () => {
        it("should return new engineer github link", () =>{
            let empLink = "BigBird";
            let newLink = new Engineer("","","",empLink);
            expect(newLink.empLink).toBe(`https://github.com/BigBird`);
        })
    })
    describe("name", () => {

        it("should return new employee name", () => {
            let empName = "Bob Barker";
            let newEmp = new Engineer(empName);
            expect(newEmp.empName).toBe("Bob Barker");
            console.log(newEmp.empName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let empId = "e107";
            let newEmp = new Engineer("", empId);
            expect(newEmp.empId).toBe("e107");
            console.log(newEmp.empId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let empEmail = "bbarker@gmail.com";
            let newEmp = new Engineer("", "", empEmail);
            expect(newEmp.empEmail).toBe("bbarker@gmail.com");
            console.log(newEmp.empEmail);
        })
    })
    describe ("role", () => {
        it("should return new engineer role", () => {
         let empRole = "Engineer";
         let newEmp = new Engineer(empRole);
         expect(newEmp.empRole).toBe("Engineer"); 
        })
    })

})