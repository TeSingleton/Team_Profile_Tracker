const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');
const util = require('util');

db.query=util.promisify(db.query);

var departments = [
  {name:"Engineering", value:1},
  {name: "legal", value:2},
  {name: "Finance", value:3},
  {name: "Sales", value: 4}
];

var roles=[
  {name: "Senior Engineer", value:1},
  {name: "Junior  Engineer", value:2},
  {name: "Clerk", value:3},
  {name: "Lawyer", value:4},
  {name: "Lead Accountant", value:5},
  {name: "Senior Sales Agent", value:6},
  {name: "Sales Agent", value:7},
];

var newRoleID = roles.lenght+1;

var employees =[
  {name:"Barry Allen",value:1},
  {name:"Wally West",value:2},
  {name:"Jay Garrick",value:3},
  {name:" Bart Allen",value:4},
  {name:"Eobard Thawn",value:5},
  {name:"Jonathan Chambers",value:6},
  {name:"August Heart",value:7},
];

var newEmployee = employees.length+1;

// inquirer questions

const menu = [{
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


// add employees inquirer
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
    choices: roles
  },
  {
    name: "newHireManager",
    type: "list",
    message:"Who is their Manager? Please enter their ID." ,
    choices: employees
  },
];

// update employees inquirer

// add role 

// add department


// show menu


// view all employees


// add employees

// update employee role


