const index = require("../index")



function generateHTML(newEmp){
console.log(newEmp)
if(newEmp.empRole === "Manager") {
//generate code to go in index.html
return (`
$('.cardRow').append("${newEmp.empName}")\n
I need to get actual bootstrap to look at this properly 
`);
}  

else if(newEmp.empRole === "Engineer"){

return ("I got my info")

}
else if(newEmp.empRole === "Intern"){

return ("Intern is getting it")

}
}



module.exports = generateHTML;
