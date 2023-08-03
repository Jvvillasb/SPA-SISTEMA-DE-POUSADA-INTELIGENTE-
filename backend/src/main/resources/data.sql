INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_guest(id, caravana, cidade, data_entrada, data_nascimento, data_saida, documento, email, estado, genero, nacionalidade, nome, telefone) VALUES (1, true, 'Lorena', '27032001', '27/03/2001', '55', '503.060.258-50', 'ana@gmail.com', 'SP', 'Masculino', 'Brasileiro', 'Ana Red', '31012203');
INSERT INTO tb_guest(id, caravana, cidade, data_entrada, data_nascimento, data_saida, documento, email, estado, genero, nacionalidade, nome, telefone) VALUES (2, true, 'Cachoeira Paulista', '27032001', '27/03/2001', '28032001', '503.060.258-50', 'ana@gmail.com', 'SP', 'Masculino', 'Brasileiro', 'Ana Red', '31012203');
INSERT INTO tb_guest(id, caravana, cidade, data_entrada, data_nascimento, data_saida, documento, email, estado, genero, nacionalidade, nome, telefone) VALUES (3, true, 'Lorena', '27032001', '27/03/2001', '29032001', '503.060.258-50', 'ana@gmail.com', 'SP', 'Masculino', 'Brasileiro', 'Ana Red', '31012203');
INSERT INTO tb_guest(id, caravana, cidade, data_entrada, data_nascimento, data_saida, documento, email, estado, genero, nacionalidade, nome, telefone) VALUES (4, true, 'Cachoeira Paulista', '27032001', '27/03/2001', '55', '503.060.258-50', 'ana@gmail.com', 'SP', 'Masculino', 'Brasileiro', 'Ana Red', '31012203');

