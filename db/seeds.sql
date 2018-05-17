USE burger_db;

INSERT INTO burgers(burger_name, devoured)
VALUES ("Sundried Tomato and Portobello Mushroom Burger", True), 
("Ultimate Falafel Burger", False), 
("Spicy Cauliflower Burger", False), 
("Black Bean Quinoa with Spicy Mango Chutney Burger", False), 
("Buffalo Chickpea Burger", False);

SELECT * FROM burgers;