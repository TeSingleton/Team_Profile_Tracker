DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    dep_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE emp_role(
        id INT AUTO_INCREMENT ,
        title VARCHAR(30),
        salary DEC(15,2),
        PRIMARY KEY(id),
        Foreign Key (department_id) REFERENCES department (id) ON DELETE SET NULL
        
);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    emp_role_id INT,
    manager_id INT,
    Foreign Key (emp_role_id) REFERENCES emp_role (id) ON DELETE SET NULL,
    Foreign Key (manager_id) REFERENCES employees(id) ON DELETE SET NULL

);