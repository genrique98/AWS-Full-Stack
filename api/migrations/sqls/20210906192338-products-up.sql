/* Replace with your SQL commands */

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price INTEGER NOT NULL,
    url VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL
);