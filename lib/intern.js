class Intern {
    constructor(empSchool){
        this.empSchool = empSchool;
        
    }
  
}

Intern.prototype.getSchool = function (){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empSchool',
            message: 'What school did this intern attend?'
        },
    ]).then((response)=>{
        console.log(response);
    });
}

Intern.prototype.getRole = function(){
    const newRole = "Intern";
    return newRole;
}


module.exports = Intern;