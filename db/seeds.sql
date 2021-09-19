INSERT INTO department (dept_name)
VALUES ("Accounting"),
       ("Sales"),
       ("Engineering"),
       ("Legal"),
       ("HR"),
       ("Management");

INSERT INTO employee_role (title, salary,dept_id)
VALUES ("Sales Engineer", 160000, 2),
        ("Account Executive", 80000, 2),
       ("Developer", 105000, 3),
       ("Solutions Architect", 135000, 3),
       ("Tax Accountant", 98000, 1),
       ("Financial Accountant", 88000, 1),
       ("Senior Counsel", 123000, 4),
       ("HR Partner", 79000, 5),
       ("CEO", 500000,6);

INSERT INTO employee (first_name, last_name, role_id,manager_id)
VALUES ("Satish", "Iyer",9,NULL),
        ("Mike", "Chan",2, 1),
        ("Priya", "Iyer",5,1),
        ("Russ", "Newton",1,2),
        ("Paul", "Nyugen",1,2),
        ("Miguel", "Cancino", 6, 3),
        ("Clayton", "Dasilva", 8, 1),
        ("Yasser", "Elijariah", 4, 1),
        ("Norm", "Freeman", 3, 8),
        ("Sam","Leroy", 7, 1);



