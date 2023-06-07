CREATE TABLE users (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  mail varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  admin TINYINT NOT NULL,
  creation_date date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE formations (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  icon varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE quizz (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE tutorials (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  target varchar(255) NOT NULL,
  explanation longtext NOT NULL,
  image longtext,
  published TINYINT NOT NULL,
  creation_date date NOT NULL,
  quizz_id INT NOT NULL,
    CONSTRAINT fk_quizz_id FOREIGN KEY (quizz_id) REFERENCES quizz(id) ON DELETE CASCADE,
  formation_id INT NOT NULL,
    CONSTRAINT fk_formation_id FOREIGN KEY (formation_id) REFERENCES formations(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE validated_by_user (
  user_id INT NOT NULL,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  tutorial_id INT NOT NULL,
    CONSTRAINT fk_tutorial_id FOREIGN KEY (tutorial_id) REFERENCES tutorials(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE resources (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  content longtext NOT NULL,
  tutorial_id INT NOT NULL,
    CONSTRAINT fk_resource_tutorial FOREIGN KEY (tutorial_id) REFERENCES tutorials(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE questions (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content varchar(255) NOT NULL,
  quizz_id INT NOT NULL,
    CONSTRAINT fk_question_quizz FOREIGN KEY (quizz_id) REFERENCES quizz(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE answers (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content varchar(255) NOT NULL,
  question_id INT NOT NULL,
    CONSTRAINT fk_question_id FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Nina Robinson','nina.robinson@example.com','bethany',false,'01/07/1993');
INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Don Bishop','don.bishop@example.com','abraham',false,'03/02/1975');
INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Heather Simmmons','heather.simmmons@example.com','575757',true,'09/03/1950');


INSERT INTO formations(title,icon) VALUES ('Utiliser Ligne bleue','https://img.icons8.com/?size=512&id=13616&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Utiliser mon téléphone','https://img.icons8.com/?size=512&id=5wGnhtHODuE9&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Me divertir sur mon téléphone','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Aller sur internet','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Vie courante','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Mes emails','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Communiquer','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Utiliser mon téléphone en sécurité','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Se déplacer','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Se faire aider','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Rechercher un tuto','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');
INSERT INTO formations(title,icon) VALUES ('Pour aller plus loin','https://img.icons8.com/?size=512&id=nWZlu7wJW-Sr&format=png%27');


INSERT INTO quizz(title) VALUES ('Vérifiez vos connaissances sur WhatsApp');
INSERT INTO quizz(title) VALUES ('Vérifiez vos connaissances sur l''utilisation de votre téléphone');
INSERT INTO quizz(title) VALUES ('Vérifiez vos connaissances sur le visionnage d''une vidéo');


INSERT INTO tutorials(name,target,explanation,published,creation_date,quizz_id,formation_id) VALUES ('Donec tincidunt sodales purus eu','Aenean vitae mauris magna. Pellentesque ultrices nisl orci, eget viverra tellus pharetra vulputate. Quisque dictum.','https://randompicturegenerator.com/img/dragon-generator/g9b72abb3388f87375d88f2c3cb2fa279a0fe380ab82edac115301d9331dfe3b7c3e453d72e99ba931de26c3f1540df1e_640.jpg',true,'14/04/2023',1,1);
INSERT INTO tutorials(name,target,explanation,published,creation_date,quizz_id,formation_id) VALUES ('Sed ut venenatis nunc. Mauris.','Ut dignissim at nulla vel rhoncus. Sed vitae felis sit amet quam consectetur congue. Morbi','https://randompicturegenerator.com/img/dragon-generator/g9d319c882c20258e422f2e608f9cb4f132faccc2c5d0d8f642b331e75e59815d87c2cba770a8ce77fce4afdacaacc782_640.jpg',true,'04/05/2023',3,2);
INSERT INTO tutorials(name,target,explanation,published,creation_date,quizz_id,formation_id) VALUES ('Vestibulum semper et lorem sed','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','https://randompicturegenerator.com/img/dragon-generator/g43a4ef235a57ff339250b27e486be537454a43ec5fb652c2cdc99754019d679e232a4785776983bc39a755e687f362a3_640.jpg',false,'17/06/2023',2,3);


INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (1,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (3,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (2,3);
