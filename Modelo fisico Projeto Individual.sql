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

SELECT 
                            acertos as acertos_usuarios
                        FROM quiz
                        WHERE fkUsuario = 8
                        ORDER BY id DESC LIMIT 1;
select * from usuario;

SELECT
                       avg(acertos) as media_acertos_usuario
                    FROM quiz
                    WHERE fkUsuario = 2;

select * from quiz;