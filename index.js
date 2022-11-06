const mysql = require('mysql2');
const utils =require('util')
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query = utils.promisify(db.query);



// View All departments
// SELECT * FROM departments;

// View all roles
// SELECT * FROM roles;

// view all employees
// SELECT * FROM employees;


// Create new departments 

// prompt the user for the "name" of the department

        // Then Run the Query
        // INSERT INTO departments(name)
        // VALUES ('sales');

              // THEN ask the user what they want to do next?


// Create a new role 

// Get The Existing Deparments from the 'department' table

        // THEN prompt the user for the "title", "salary" , and "department  for the role"

        // THEN Run the Query 
        // INSERT INTO role (title, sale, department_id)
        // VALUES (?, ?, ?)

            
            // THEN ask the user what they want to do next?