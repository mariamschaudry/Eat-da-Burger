-- 
-- USE burger_db;
-- 
-- INSERT INTO burgers (burger_name, devoured)
-- VALUE ("Veggie Heaven Burger", true);
-- SELECT * FROM burgers;

USE burger_db;

INSERT INTO burgers(burger_name, devoured)
VALUES ("Sundried Tomato and Portobello Mushroom Burger", True), 
("Ultimate Falafel Burger", False), 
("Spicy Cauliflower Burger", False), 
("Black Bean Quinoa with Spicy Mango Chutney Burger", False), 
("Buffalo Chickpea Burger", False);


SELECT * FROM burgers;

DELETE from burger_db.burgers WHERE item_id in (6,7,8,9,10,11,12,13);
