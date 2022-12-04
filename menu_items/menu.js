const menuItems = [{
    name: "mainMenu",
    type: "list",
    message: "Select an option, please",
    choices: [
      {
        name: "See All Employees",value: "View_Employees"
      },
      {
        name: "Add Employees", value: "Add_Employee" 
      },
      {
        name: " Update Employee",value: "Update_Role"
      },
      {
        name: "View All Roles ", value: "View_Roles"
      },
      {
  name: "Add Role", value:"Add_Role"
      },
      {
  name: "View All Departments", value: "View_Departments"
      },
      {
        name : "Add Department", value: "Add_Department"
      },
      {
        name: "Quit", value: "QUIT"
      },
    ]
  }];

  module.exports = menuItems