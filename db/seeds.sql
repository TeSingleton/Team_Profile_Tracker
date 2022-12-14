INSERT INTO departments (id, name)    
VALUES (1, "Engineering"), (2, "Legal"), (3, "Finance"), (4, "Sales");

INSERT INTO
    roles ( id, title, salary, department_id)
VALUES (1, "Senior Engineer", 130000, 1), 
                (2, "Junior  Engineer", 80000, 1), 
                (3, "Clerk", 50000, 2), 
                (4, "Lawyer", 100000, 2), 
                (5, "Lead Accountant", 55000, 3), 
                (6, "Senior Sales Agent", 90000, 4),
                (7, "Sales Agent", 45000, 4);

INSERT INTO employees(id,first_name, last_name, role_id,  manager_id )
VALUES (1, "Barry", "Allen",  6,  NULL), 
                (2, "Wally", "West", 7, 1), 
                (3, "Jay", "Garrick", 1,  NULL), 
                (4, "Bart", "Allen", 2, 3), 
                (5, "Eobard", "Thawn", 4, NULL), 
                (6, "Jonathan", "Chambers", 3,  5), 
                (7, "August", "Heart", 5, NULL);


                -- double check and clarify association , add something that cleans up manager associations 