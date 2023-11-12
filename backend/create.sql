create table tb_caravana (id  bigserial not null, cidade varchar(255), nome varchar(255), guia_id int8, primary key (id));
create table tb_guest (id  bigserial not null, cidade varchar(255), data_entrada varchar(255), data_nascimento varchar(255), data_saida varchar(255), documento varchar(255), email varchar(255), estado varchar(255), evento varchar(255), genero varchar(255), nacionalidade varchar(255), nome varchar(255), nome_caravana varchar(255), nome_guia varchar(255), telefone varchar(255), caravana_id int8, guia_id int8, leito_id int8, primary key (id));
create table tb_guia (id  bigserial not null, cidade varchar(255), data_entrada varchar(255), data_nascimento varchar(255), data_saida varchar(255), documento varchar(255), email varchar(255), estado varchar(255), evento varchar(255), genero varchar(255), nacionalidade varchar(255), nome varchar(255), nome_caravana varchar(255), telefone varchar(255), caravana_id int8, primary key (id));
create table tb_leito (id  bigserial not null, numero int4, status varchar(255), guest_id int8, quarto_id int8 not null, primary key (id));
create table tb_quarto (id  bigserial not null, nome varchar(255), numero int4, status varchar(255), primary key (id));
create table tb_role (id  bigserial not null, authority varchar(255), primary key (id));
create table tb_user (id  bigserial not null, email varchar(255), first_name varchar(255), last_name varchar(255), password varchar(255), primary key (id));
create table tb_user_role (user_id int8 not null, role_id int8 not null, primary key (user_id, role_id));
alter table tb_leito add constraint UK_g25sbrvavg8rpip0s7wjbqqj0 unique (guest_id);
alter table tb_user add constraint UK_4vih17mube9j7cqyjlfbcrk4m unique (email);
alter table tb_caravana add constraint FKpg9fmbnh3c30qs36w83yw4ldc foreign key (guia_id) references tb_guia;
alter table tb_guest add constraint FKsuo9soeq318ssee9afknlcues foreign key (caravana_id) references tb_caravana;
alter table tb_guest add constraint FKpwimncfp8h2paieex7l97lmt4 foreign key (guia_id) references tb_guia;
alter table tb_guest add constraint FK9g584813ky5exkjtmw8x8jrky foreign key (leito_id) references tb_leito;
alter table tb_guia add constraint FKoom3x8urew106ltr3yxtks9eq foreign key (caravana_id) references tb_caravana;
alter table tb_leito add constraint FKt57vpgc470xllxi4gueqa9u15 foreign key (guest_id) references tb_guest;
alter table tb_leito add constraint FK9dj85a0n66txyp765gak150ks foreign key (quarto_id) references tb_quarto;
alter table tb_user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table tb_user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;
