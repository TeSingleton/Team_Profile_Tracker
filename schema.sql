DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT PRIMARY KEY,
    dep_name VARCHAR(30),
);

CREATE TABLE emp_role(
        id INT PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL,
        Foreign Key (department_id) REFERENCES department (id)
);