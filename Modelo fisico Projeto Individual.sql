
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

select * from quiz;