DROP TABLE IF EXISTS PERSON;

CREATE TABLE PERSON
(
    id serial PRIMARY KEY NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255),
    creation_date date
);