// const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const db = require('./db/connection');
// const util = require('util');

// db.query=util.promisify(db.query);

// var departments = [
//   {name:"Engineering", value:1},
//   {name: "legal", value:2},
//   {name: "Finance", value:3},
//   {name: "Sales", value: 4}
// ];

// var roles=[
//   {name: "Senior Engineer", value:1},
//   {name: "Junior  Engineer", value:2},
//   {name: "Clerk", value:3},
//   {name: "Lawyer", value:4},
//   {name: "Lead Accountant", value:5},
//   {name: "Senior Sales Agent", value:6},
//   {name: "Sales Agent", value:7},
// ];

// var newRoleID = roles.lenght+1;

// var employees =[
//   {name:"Barry Allen",value:1},
//   {name:"Wally West",value:2},
//   {name:"Jay Garrick",value:3},
//   {name:" Bart Allen",value:4},
//   {name:"Eobard Thawn",value:5},
//   {name:"Jonathan Chambers",value:6},
//   {name:"August Heart",value:7},
// ];

// var newEmployeeID = employees.length+1;

// // inquirer questions

// const menu = [{
//   name: "mainMenu",
//   type: "list",
//   message: "Select an option, please",
//   choices: [
//     {
//       name: "See All Employees",value: "View_Employees"
//     },
//     {
//       name: "Add Employees", value: "Add_Employee" 
//     },
//     {
//       name: " Update Employee",value: "Update_Role"
//     },
//     {
//       name: "View All Roles ", value: "View_Roles"
//     },
//     {
// name: "Add Role", value:"Add_Role"
//     },
//     {
// name: "View All Departments", value: "View_Departments"
//     },
//     {
//       name : "Add Department", value: "Add_Department"
//     },
//     {
//       name: "Quit", value: "QUIT"
//     },
//   ]
// }];


// // add employees inquirer
// const addEmployees = [
//   {
//     name: "newHireFirstName",
//     type: "input",
//     message: "Enter New Hire's First Name?" ,
//   },
//   {
//     name:"newHireLastName" ,
//     type:"input",
//     message:"What is their Last Name?" ,
//   },
//   { 
//     name:"newHireRole" ,
//     type:"list" ,
//     message:"What is their Role?" ,
//     choices: roles
//   },
//   {
//     name: "newHireManager",
//     type: "list",
//     message:"Who is their Manager? Please enter their ID." ,
//     choices: employees
//   },
// ];

// // update employees inquirer

// const updateRole =[
//   {name:"updateEmployee",
// type:"list",
// message:"Who would you like to update",
// choices:employees},
//   {name:"updateRole",
// type:"list",
// message:"Which role will be assigned to selected employee",
// choices:roles}
// ];

// // add role 
// const addRole =[
//   {name: "newRoleTitle",
// type:"input",
// message:"Enter Role Title"},
//   {name: "newRoleSalary",
// type:"input",
// message:"Enter the Salary for this Role",},
//   {name: "newRoleDepartment",
// type:"list",
// message:"Select Department for this new role",
// choices:departments},
// ]
// // add department

// const addDepartment =[
//   {name:"departmentName",
// type:"input",
// message:"Please enter Department Name ?"}
// ]

// // show menu

// const showMenu = async()=>{
//   const response =await inquirer.createPromptModule(menu)

//   if(response.mainMenu=='View_Employees'){
//     await allEmployees();
//     showMenu();
//   }
//   if(response.mainMenu == 'Add_Employee'){
//     await addEmployee();
//     showMenu();
//   }
//   if(response.mainMenu=='Update_Role'){
//     await updateEmpRole();
//     showMenu();
//   }
//   if (response.mainMenu=='View_Roles'){
//     await viewAllRoles();
//     showMenu();
//   }
//   if(response.mainMenu=='Add_Role'){
//     await addNewRole();
//     showMenu();
//   }
//   if(response.mainMenu=='View_Departments'){
//     await showAllDepartments();
//     showMenu();
//   }
//   if (response.mainMenu=='Add_Department'){
//     await addNewDepartment();
//     showMenu();
//   }
//   if(response.mainMenu == 'QUIT'){
//     console.log('Thank You, GoodBye ✌️😁')
//       process.exit();
    
//   }
// }

// const showEmployees = async()=>{
//   const allEmployees = await db.query('SELECT employees.id, employees.first_name AS "First Name ",employees.last_name AS "Last Name",empRole.title AS Role,departments.name AS Department, roles.salary AS Salary, CONCAT(manager.first_name," ",manager.last_name) AS Manager FROM employees LEFT JOIN employees manager ON manager_id INNER JOIN roles ON roles.id=employees.role_id INNER JOIN departments ON(departments.id=roles.department_id)');

//   console.table(allEmployees);
// }



// // view all employees
// const addEmployee = async()=>{
//   await inquirer,prompt(addEmployees).then(function(data){
//     const newEmployee ={};
//     newEmployee["name"]= `${data.newHireFirstName}${data.newHireLastName}`;
//     newEmployee["value"]=newEmployeeID;
//     employees.push(newEmployee);
//     db.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,[data.newHireFirstName,data.newHireLastName,data.newHireRole,data.newHireManager]);
//   })
// }

// // add employees


// // update employee role


