-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE buildingtech;

USE buildingtech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table quiz (
id int auto_increment,
acertos int,
erros int,
fkUsuario int,
primary key (id),
foreign key (fkUsuario) references usuario (id)
);


select * from usuario;
select * from quiz;

SELECT	acertos,
		erros,
		fkUsuario
FROM quiz 
WHERE fkUsuario = 4
ORDER BY id DESC LIMIT 1;