const employeesArr = require("../array_folder/employees");
const rolesArr = require("../array_folder/roles")
const addEmployees = [
    {
      name: "newHireFirstName",
      type: "input",
      message: "Enter New Hire's First Name?" ,
    },
    {
      name:"newHireLastName" ,
      type:"input",
      message:"What is their Last Name?" ,
    },
    { 
      name:"newHireRole" ,
      type:"list" ,
      message:"What is their Role?" ,
      choices: rolesArr
    },
    {
      name: "newHireManager",
      type: "list",
      message:"Who is their Manager? Please enter their ID." ,
      choices: employeesArr
    },
  ];
  
  module.exports = addEmployees