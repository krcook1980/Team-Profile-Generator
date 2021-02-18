const Employee = require("../lib/employee");

describe("employee", () => {

   describe("name", () => {

        it("should return new employee name", () => {
            let empName = "Bob Barker";
            let newEmp = new Employee(empName);
            expect(newEmp.empName).toBe("Bob Barker");
            console.log(newEmp);
        })
   })
//    describe("id", () => {
//        it("should return new employee id", () =>{
//            let empId = "e100";
//            let newEmpId = new Employee(empId);
//            expect(newEmpId.empId).toBe("e100");
//            console.log(newEmpId.empId)
//        })
//    })
//    describe("email", () => {

//     it("should return new employee email", () => {
//         let empEmail = "bbarker@gmail.com";
//         let newEmpEmail = new Employee(empEmail);
//         expect(newEmpEmail.empEmail).toBe("bbarker@gmail.com");
//         console.log(newEmpEmail);
//     })
})

})