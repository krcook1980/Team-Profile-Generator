const Engineer = require("../lib/engineer");

describe("engineer", () => {
    it("should return new engineer github link", () =>{
        let empLink = "BigBird";
        let newLink = new Engineer("","","",empLink);
        expect(newLink.empLink).toBe(`https://github.com/BigBird`);
    })
})