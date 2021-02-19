const Intern = require("../lib/intern");

describe("intern", () => {
    it("should return new intern school", () =>{
        let empSchool = "University of Utah";
        let newSchool = new Intern(empSchool);
        expect(newSchool.empSchool).toBe(empSchool);
    })
})