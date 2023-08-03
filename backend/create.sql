create table tb_guest (id  bigserial not null, caravana boolean, cidade varchar(255), data_entrada varchar(255), data_nascimento varchar(255), data_saida varchar(255), documento varchar(255), email varchar(255), estado varchar(255), genero varchar(255), nacionalidade varchar(255), nome varchar(255), telefone varchar(255), primary key (id));
create table tb_role (id  bigserial not null, authority varchar(255), primary key (id));
create table tb_user (id  bigserial not null, email varchar(255), first_name varchar(255), last_name varchar(255), password varchar(255), primary key (id));
create table tb_user_role (user_id int8 not null, role_id int8 not null, primary key (user_id, role_id));
alter table tb_user add constraint UK_4vih17mube9j7cqyjlfbcrk4m unique (email);
alter table tb_user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table tb_user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;
