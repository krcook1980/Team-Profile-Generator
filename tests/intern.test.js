const Intern = require("../lib/intern");

describe("intern", () => {
    it("should return new intern school", () =>{
        let empSchool = "University of Utah";
        let newSchool = new Intern("","","",empSchool);
        expect(newSchool.empSchool).toBe(empSchool);
    })
    
    describe("name", () => {

        it("should return new employee name", () => {
            let empName = "Bob Barker";
            let newEmp = new Intern(empName);
            expect(newEmp.empName).toBe("Bob Barker");
            console.log(newEmp.empName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let empId = "e107";
            let newEmp = new Intern("", empId);
            expect(newEmp.empId).toBe("e107");
            console.log(newEmp.empId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let empEmail = "bbarker@gmail.com";
            let newEmp = new Intern("", "", empEmail);
            expect(newEmp.empEmail).toBe("bbarker@gmail.com");
            console.log(newEmp.empEmail);
        })
    })
    
    describe ("role", () => {
        it("should return new manager role", () => {
         let empRole = "Intern";
         let newEmp = new Intern(empRole);
         expect(newEmp.empRole).toBe("Intern"); 
        })
    })
})