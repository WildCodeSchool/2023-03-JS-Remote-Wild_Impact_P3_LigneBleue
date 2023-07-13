-- SQLBook: Code
CREATE TABLE users (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100),
  mail varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  admin TINYINT NOT NULL DEFAULT 0,
  creation_date DATETIME NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE formations (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  icon varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE quizz (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE images (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  src VARCHAR(255),
  alt VARCHAR(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE tutorials (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  icon varchar(255) NOT NULL,
  target varchar(255) NOT NULL,
  explanation longtext NOT NULL,
  published TINYINT NOT NULL,
  creation_date date NOT NULL,
  image_id INT NOT NULL,
  CONSTRAINT fk_image_id FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE,
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
  name varchar(255) NOT NULL,
  content longtext NOT NULL,
  tutorial_id INT NOT NULL,
    CONSTRAINT fk_resource_tutorial FOREIGN KEY (tutorial_id) REFERENCES tutorials(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE questions (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content longtext NOT NULL,
  quizz_id INT NOT NULL,
    CONSTRAINT fk_question_quizz FOREIGN KEY (quizz_id) REFERENCES quizz(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE answers (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content longtext NOT NULL,
  question_id INT NOT NULL,
    CONSTRAINT fk_question_id FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Nina Robinson','nina.robinson@example.com','bethany',false,'2021/07/01');
INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Don Bishop','don.bishop@example.com','abraham',false,'2021/02/03');
INSERT INTO users(name,mail,password,admin,creation_date) VALUES ('Heather Simmmons','heather.simmmons@example.com','575757',true,'2021/03/04');


INSERT INTO formations(title,icon) VALUES ('Utiliser Ligne bleue','lignebleue');
INSERT INTO formations(title,icon) VALUES ('Utiliser mon téléphone','utiliser');
INSERT INTO formations(title,icon) VALUES ('Aller sur internet','internet');
INSERT INTO formations(title,icon) VALUES ('Vie courante','vie');
INSERT INTO formations(title,icon) VALUES ('Me divertir','divertir');
INSERT INTO formations(title,icon) VALUES ('Mes emails','email');
INSERT INTO formations(title,icon) VALUES ('Communiquer','communiquer');
INSERT INTO formations(title,icon) VALUES ('Utiliser mon téléphone en sécurité','securite');
INSERT INTO formations(title,icon) VALUES ('Se déplacer','deplacer');


INSERT INTO quizz(title) VALUES ('Quizz 1 - Vérifiez vos connaissances sur WhatsApp');
INSERT INTO quizz(title) VALUES ('Quizz 2 - Vérifiez vos connaissances sur l''utilisation de votre téléphone');
INSERT INTO quizz(title) VALUES ('Quizz 3 - Vérifiez vos connaissances sur le visionnage d''une vidéo');

INSERT INTO images(src, alt) VALUES ('Src1','alt1');
INSERT INTO images(src, alt) VALUES ('Src2','alt2');
INSERT INTO images(src, alt) VALUES ('Src3','alt3');
INSERT INTO images(src, alt) VALUES ('Src4','alt4');
INSERT INTO images(src, alt) VALUES ('Src5','alt5');
INSERT INTO images(src, alt) VALUES ('Src6','alt6');

INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Arrêter/démarrer le téléphone','telephone','Aenean vitae mauris magna. Pellentesque ultrices nisl orci, eget viverra tellus pharetra vulputate. Quisque dictum.','Explanation1',true,'2023/04/14',1,1,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Utiliser un QR code','qrcode','Ut dignissim at nulla vel rhoncus. Sed vitae felis sit amet quam consectetur congue. Morbi','Explanation2',true,'2023/04/05',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Manipuler écran tactile','tactile','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Téléphoner','telephoner','Aenean vitae mauris magna. Pellentesque ultrices nisl orci, eget viverra tellus pharetra vulputate. Quisque dictum.','Explanation1',true,'2023/04/14',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Différence entre SMS, mail, message','messagerie','Ut dignissim at nulla vel rhoncus. Sed vitae felis sit amet quam consectetur congue. Morbi','Explanation2',true,'2023/04/05',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Envoyer et recevoir SMS','sms','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Gestion des contacts','contact','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Lexicologie Android','lexicologie','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Faire une photo ou une vidéo','media','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Partager une photo ou vidéo','partager','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Ecouter de la musique','musique','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Regarder des vidéos','videos','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Jouer','jouer','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Facebook','facebook','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Instagram','instagram','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Tiktok','tiktok','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,3,3);



INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (1,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (3,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (2,3);

INSERT INTO resources(name,content,tutorial_id) 
VALUES ('Ressource 1','Pellentesque dolor magna, interdum et vulputate quis, vulputate sed neque. Proin luctus in risus vitae faucibus. Curabitur volutpat et urna vel accumsan. Ut gravida est non quam maximus mattis. Donec urna elit, elementum eu ligula quis, lobortis faucibus arcu. Cras sem purus, sagittis id neque vel, accumsan posuere arcu. Suspendisse rhoncus tellus id nisl vehicula, in pellentesque tortor sodales. Vestibulum ultricies bibendum pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla auctor metus et diam pulvinar ullamcorper. Curabitur efficitur sapien elit, sed vulputate sem scelerisque consectetur. Curabitur ut bibendum sem.',3);
INSERT INTO resources(name,content,tutorial_id) VALUES ('Ressource 2','Duis justo orci, pellentesque quis ante at, congue hendrerit justo. Donec luctus, enim quis ultricies interdum, risus tellus hendrerit nisl, a luctus arcu eros sit amet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget mauris a magna auctor congue feugiat vel sem. Nulla facilisi. Proin sit amet fringilla purus. Duis sed aliquam nisl. Nulla feugiat nibh quis turpis commodo accumsan. Duis aliquam quam vel lorem dictum suscipit. Duis massa metus, interdum eu dui sit amet, lobortis consequat nulla.',2);
INSERT INTO resources(name,content,tutorial_id) VALUES ('Ressource 3','Curabitur bibendum finibus pellentesque. Nunc sollicitudin vitae neque ullamcorper finibus. Nullam rutrum sed ante sed fringilla. Pellentesque sagittis fermentum aliquet. Maecenas pulvinar ipsum risus, a consectetur mauris ornare vel. Curabitur eget iaculis elit. Maecenas cursus justo at lobortis eleifend. Fusce vitae lorem venenatis, varius nunc eu, tincidunt justo. Curabitur a lectus laoreet, posuere nulla eu, malesuada mauris. Curabitur at mi tortor.',1);


INSERT INTO questions(content,quizz_id) VALUES ('Question 1 Quizz 1',1);
INSERT INTO questions(content,quizz_id) VALUES ('Question 2 Quizz 1',1);
INSERT INTO questions(content,quizz_id) VALUES ('Question 3 Quizz 1',1);
INSERT INTO questions(content,quizz_id) VALUES ('Question 4 Quizz 1',1);

INSERT INTO questions(content,quizz_id) VALUES ('Question 1 Quizz 2',2);
INSERT INTO questions(content,quizz_id) VALUES ('Question 2 Quizz 2',2);
INSERT INTO questions(content,quizz_id) VALUES ('Question 3 Quizz 2',2);
INSERT INTO questions(content,quizz_id) VALUES ('Question 4 Quizz 2',2);

INSERT INTO answers(content,question_id) VALUES ('Reponse 1',1);
INSERT INTO answers(content,question_id) VALUES ('Reponse 2',2);
INSERT INTO answers(content,question_id) VALUES ('Reponse 3',3);
INSERT INTO answers(content,question_id) VALUES ('Reponse 4',4);
INSERT INTO answers(content,question_id) VALUES ('Reponse 5',5);
INSERT INTO answers(content,question_id) VALUES ('Reponse 6',6);
INSERT INTO answers(content,question_id) VALUES ('Reponse 7',7);
INSERT INTO answers(content,question_id) VALUES ('Reponse 8',8);