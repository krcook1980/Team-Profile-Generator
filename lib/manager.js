const Employee = require('./employee');

class Manager extends Employee{
    constructor(empName, empId, empEmail, empNum){
        super(empName, empId, empEmail);
        this.empNum = empNum;
        this.empRole = "Manager";
    }

    getNum (){
        return this.empLink
       };
       
    getRole (){
        return this.empRole;
    };
    
}

module.exports = Manager;