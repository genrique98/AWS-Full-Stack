/* Replace with your SQL commands */

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL
);