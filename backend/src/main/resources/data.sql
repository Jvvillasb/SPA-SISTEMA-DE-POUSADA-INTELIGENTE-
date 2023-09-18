INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_caravana(id, cidade, nome, guia_id) VALUES (1, '', 'Sem caravana', null);

INSERT INTO tb_guia(id, cidade, data_entrada, data_nascimento, data_saida, documento, email, estado, evento, genero, nacionalidade, nome, nome_caravana, telefone, caravana_id) VALUES (1, '', '', '', '', '', '', '', '', '', '', 'Sem Guia', '', '', 1);

UPDATE tb_caravana SET guia_id = 1 WHERE id = 1;

INSERT INTO tb_guest(id, nome, documento, data_nascimento, telefone, genero, email, cidade, estado, nacionalidade, data_entrada, data_saida, evento, caravana_id, nome_caravana, guia_id, nome_guia ) VALUES (1, 'João', '503.060.258-50', '27/03/2001', '996470064', 'Masculino', 'joao@gmail.com', 'Cachoeira Paulista', 'SP', 'Brasileiro', '', '','Hosana Brasil',1,'Sem Caravana',1,'Sem Guia');
INSERT INTO tb_guest(id, nome, documento, data_nascimento, telefone, genero, email, cidade, estado, nacionalidade, data_entrada, data_saida, evento, caravana_id, nome_caravana, guia_id, nome_guia ) VALUES (2, 'Maria', '503.060.258-50', '27/03/2001', '996470064', 'Feminino', 'maria@gmail.com', 'Cachoeira Paulista', 'SP', 'Brasileiro', '', '','Hosana Brasil',1,'Sem Caravana',1,'Sem Guia');
