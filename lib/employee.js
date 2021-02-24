class Employee {    
    constructor(empName, empId, empEmail) {
        
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
        
    }
    getName (){
        const newEmpName = response.empName;
        return newEmpName;
       
    }
    getId(){
        const newEmpID = response.empId;
        return newEmpID;
    }
    getEmail (){
        const newEmpEmail = response.empEmail;
        return newEmpEmail;
    }
    getRole(){
        const empRole = "Employee";
        return empRole;
    }
}


module.exports = Employee;