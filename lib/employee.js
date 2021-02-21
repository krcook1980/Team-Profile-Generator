class Employee {    
    constructor(empName, empId, empEmail) {
        
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
}

Employee.prototype.getName = function(){
    const newEmpName = response.empName;
    return newEmpName;
   
}


Employee.prototype.getId = function(){
    const newEmpID = response.empId;
    return newEmpID;
}


Employee.prototype.getEmail = function(){
    const newEmpEmail = response.empEmail;
    return newEmpEmail;
}


Employee.prototype.getRole = function(){
    const empRole = "Employee";
    return empRole;
}

module.exports = Employee;