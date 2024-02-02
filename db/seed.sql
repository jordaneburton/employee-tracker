INSERT INTO department (department_name)
VALUES ("Cloud"),
       ("Server"),
       ("Mobile Design");
       
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer Manager", 200000.00),
       ("Lead Engineer", 150000.00, 1),
       ("Lead Engineer", 150000.00, 2),
       ("Lead Engineer", 150000.00, 3),
       ("Engineer II", 11000.00, 1),
       ("Engineer II", 11000.00, 2),
       ("Engineer II", 11000.00, 3),
       ("Engineer I", 90000.00, 1),
       ("Engineer I", 90000.00, 2),
       ("Engineer I", 90000.00, 3);

INSERT INTO role (first_name, last_name, role_id, manager_id)
VALUES ("Luffy", "Monkey", 1),
       ("Zoro", "Roronoa", 2, 1),
       ("Sanji", "Vinsmoke", 3, 1),
       ("Nami", "Tangerine", 10, 10),
       ("Usopp", "Yasopp", 9, 3),
       ("Tony", "Chopper", 8, 2),
       ("Robin", "Nico", 5, 2),
       ("Franky", "Super", 7, 10),
       ("Brook", "Soul", 6, 3),
       ("Jin", "Bei", 4, 1);