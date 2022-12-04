const employeesArr = require("../array_folder/employees");
const rolesArr = require("../array_folder/roles")

const updateEmployee =[
    {name:"updateEmployee",
  type:"list",
  message:"Who would you like to update",
  choices:employeesArr},
    {name:"updateRole",
  type:"list",
  message:"Which role will be assigned to selected employee",
  choices:rolesArr}
  ];

  module.exports = updateEmployee
