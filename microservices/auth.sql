create database  AuthenticationDb;
use AuthenticationDb;
show tables;

insert into application_user values(1,"root","password");
select * from application_user;
insert into application_user values(2,"dummy","dummy");

insert into application_user values(4,"yash","yash12345");
insert into application_user values(5,"12345678","do");