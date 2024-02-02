INSERT INTO department (department_name)
VALUES ("Backend"),
       ("Frontend");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer Manager", 200000.00, NULL),
       ("Backend Lead Engineer", 150000.00, 1),
       ("Frontend Lead Engineer", 150000.00, 2),
       ("Backend Engineer II", 12000.00, 1),
       ("Frontend Engineer II", 12000.00, 2),
       ("Backend Engineer I", 90000.00, 1),
       ("Frontend Engineer I", 90000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luffy", "Monkey", 1, NULL),
       ("Zoro", "Roronoa", 2, 1),
       ("Sanji", "Vinsmoke", 3, 1),
       ("Nami", "Tangerine", 4, 2),
       ("Usopp", "Yasopp", 5, 3),
       ("Tony", "Chopper", 6, 2),
       ("Robin", "Nico", 7, 3);