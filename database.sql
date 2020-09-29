CREATE DATABASE pern_jwt;
--set extention
--create extension if not exists "uuid-ossp";
--^works as the super user for the postgres

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);