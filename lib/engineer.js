class Engineer {
    constructor(empLink){
        this.empLink = `[GitHub Link]("\https://github.com/${empLink}")`
        
    }
  
}

Engineer.prototype.getGithub = function(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'empLink',
            message: 'What is the GitHub user name for this employee?'
        },
    ]).then((response) => {
        console.log(response);
    });
}

Engineer.prototype.getRole = function(){
    const newRole = "Engineer";
    return newRole;
}


module.exports = Engineer;