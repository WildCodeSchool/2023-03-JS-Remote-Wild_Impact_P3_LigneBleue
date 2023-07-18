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
  name  varchar(255) NOT NULL,
  icon varchar(255),
  target varchar(255) NOT NULL,
  explanation longtext NOT NULL,
  published TINYINT NOT NULL,
  creation_date date NOT NULL,
  image_id INT NOT NULL,
  CONSTRAINT fk_image_id FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE,
  quizz_id INT,
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
INSERT INTO formations(title,icon) VALUES ('Me divertir','divertir');
INSERT INTO formations(title,icon) VALUES ('Aller sur internet','internet');
INSERT INTO formations(title,icon) VALUES ('Vie courante','vie');
INSERT INTO formations(title,icon) VALUES ('Mes emails','email');
INSERT INTO formations(title,icon) VALUES ('Communiquer','communiquer');
INSERT INTO formations(title,icon) VALUES ('Utiliser mon téléphone en sécurité','securite');
INSERT INTO formations(title,icon) VALUES ('Se déplacer','deplacer');


INSERT INTO quizz(title) VALUES ('Quizz - Arrêter/démarrer le téléphone');
INSERT INTO quizz(title) VALUES ('Quizz - Utiliser un QR code');
INSERT INTO quizz(title) VALUES ('Quizz - Manipuler écran tactile');
INSERT INTO quizz(title) VALUES ('Quizz - Téléphoner');
INSERT INTO quizz(title) VALUES ('Quizz - Différence entre SMS, mail, message');

INSERT INTO quizz(title) VALUES ('Quizz - Envoyer et recevoir SMS');

INSERT INTO quizz(title) VALUES ('Quizz -Gestion des contacts');
INSERT INTO quizz(title) VALUES ('Quizz - Lexicologie Android');

INSERT INTO quizz(title) VALUES ('quizz -Faire une photo ou une vidéo');
INSERT INTO quizz(title) VALUES ('Quizz - Partager une photo ou une video');
INSERT INTO quizz(title) VALUES ('Quizz - Ecouter de la musique');

INSERT INTO quizz(title) VALUES ('Quizz - Regarder des videos');
INSERT INTO quizz(title) VALUES ('Quizz - Jouer');

INSERT INTO quizz(title) VALUES ('Quizz - Facebook');

INSERT INTO quizz(title) VALUES ('Quizz -Instagram');
INSERT INTO quizz(title) VALUES ('Quizz - TikTok');



INSERT INTO images(src, alt) VALUES ('Arreter/Démarrer téléphone','Arreter/Démarrer téléphone');
INSERT INTO images(src, alt) VALUES ('/assets/images/QRCode.png','Utiliser QR code');
INSERT INTO images(src, alt) VALUES ('/assets/images/EcranTactile.png','Manipuler écran tactile');
INSERT INTO images(src, alt) VALUES ('/assets/images/Téléphoner.png','Téléphoner');
INSERT INTO images(src, alt) VALUES ('Src5','Différence entre SMS, mail, message');
INSERT INTO images(src, alt) VALUES ('/assets/images/SMS.png','Envoyer et recevoir SMS');
INSERT INTO images(src, alt) VALUES ('Src6','Gestion des contacts');
INSERT INTO images(src, alt) VALUES ('Src6','Lexicologie Android');
INSERT INTO images(src, alt) VALUES ('Faire une photo ou une video','Faire une photo ou une video');
INSERT INTO images(src, alt) VALUES ('partager une photo ou une video','partager une photo ou une video');
INSERT INTO images(src, alt) VALUES ('Ecouter de la musique','Ecouter de la musique');
INSERT INTO images(src, alt) VALUES ('Regarder des videos','Regarder des videos');
INSERT INTO images(src, alt) VALUES ('Jouer','Jouer');
INSERT INTO images(src, alt) VALUES ('Facebook','Facebook');
INSERT INTO images(src, alt) VALUES ('Instagram','Instagram');
INSERT INTO images(src, alt) VALUES ('Tiktok','Tiktok');

INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Arrêter/démarrer le téléphone','telephone','Aenean vitae mauris magna. Pellentesque ultrices nisl orci, eget viverra tellus pharetra vulputate. Quisque dictum.','Explanation1',true,'2023/04/14',1,1,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Utiliser un QR code','qrcode','Ut dignissim at nulla vel rhoncus. Sed vitae felis sit amet quam consectetur congue. Morbi','Explanation2',true,'2023/04/05',2,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Manipuler écran tactile','tactile','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',3,2,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Téléphoner','telephoner','Aenean vitae mauris magna. Pellentesque ultrices nisl orci, eget viverra tellus pharetra vulputate. Quisque dictum.','Explanation1',true,'2023/04/14',4,2,2);
INSERT INTO tutorials(name,icon,target,explanation, published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Différence entre SMS, mail, message','messagerie','Ut dignissim at nulla vel rhoncus. Sed vitae felis sit amet quam consectetur congue. Morbi','Explanation2',true,'2023/04/05',5,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Envoyer et recevoir SMS','sms','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',6,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Gestion des contacts','contact','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',7,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Lexicologie Android','lexicologie','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',8,2,2);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Faire une photo ou une vidéo','media','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',9,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Partager une photo ou vidéo','partager','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',10,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Ecouter de la musique','musique','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',11,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Regarder des vidéos','videos','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',12,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Jouer','jouer','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',13,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Facebook','facebook','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',14,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Instagram','instagram','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',15,3,3);
INSERT INTO tutorials(name,icon,target,explanation,published,creation_date,image_id, quizz_id,formation_id) 
VALUES ('Tiktok','tiktok','Etiam ut sapien quam. Proin lacus leo, elementum in volutpat at, pulvinar sit amet urna.','Explanation3',false,'2022/06/17',16,3,3);



INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (1,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (3,2);
INSERT INTO validated_by_user(user_id,tutorial_id) VALUES (2,3);

INSERT INTO resources(name,content,tutorial_id) 
VALUES ('Ressource 1','Pellentesque dolor magna, interdum et vulputate quis, vulputate sed neque. Proin luctus in risus vitae faucibus. Curabitur volutpat et urna vel accumsan. Ut gravida est non quam maximus mattis. Donec urna elit, elementum eu ligula quis, lobortis faucibus arcu. Cras sem purus, sagittis id neque vel, accumsan posuere arcu. Suspendisse rhoncus tellus id nisl vehicula, in pellentesque tortor sodales. Vestibulum ultricies bibendum pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla auctor metus et diam pulvinar ullamcorper. Curabitur efficitur sapien elit, sed vulputate sem scelerisque consectetur. Curabitur ut bibendum sem.',3);
INSERT INTO resources(name,content,tutorial_id) VALUES ('Ressource 2','Duis justo orci, pellentesque quis ante at, congue hendrerit justo. Donec luctus, enim quis ultricies interdum, risus tellus hendrerit nisl, a luctus arcu eros sit amet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget mauris a magna auctor congue feugiat vel sem. Nulla facilisi. Proin sit amet fringilla purus. Duis sed aliquam nisl. Nulla feugiat nibh quis turpis commodo accumsan. Duis aliquam quam vel lorem dictum suscipit. Duis massa metus, interdum eu dui sit amet, lobortis consequat nulla.',2);
INSERT INTO resources(name,content,tutorial_id) VALUES ('Ressource 3','Curabitur bibendum finibus pellentesque. Nunc sollicitudin vitae neque ullamcorper finibus. Nullam rutrum sed ante sed fringilla. Pellentesque sagittis fermentum aliquet. Maecenas pulvinar ipsum risus, a consectetur mauris ornare vel. Curabitur eget iaculis elit. Maecenas cursus justo at lobortis eleifend. Fusce vitae lorem venenatis, varius nunc eu, tincidunt justo. Curabitur a lectus laoreet, posuere nulla eu, malesuada mauris. Curabitur at mi tortor.',1);


INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question1',1);
INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question2',1);

INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question3',1);

INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question4',1);

INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question1',2);
INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question2',2);

-- -- //REPONSES Quizz1 Question 1

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question1-Reponse 1',1);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question1-Reponse 2',1);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question1-Reponse 3',1);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question1-Reponse 4',1);

-- -- //REPONSES Quizz Question 2
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question2-Reponse 1',2);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question2-Reponse 2',2);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question2-Reponse 3',2);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question2-Reponse 4',2);

-- -- //REPONSES Quizz Question 3


INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question3-Reponse 1',3);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question3-Reponse 2',3);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question3-Reponse 3',3);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question"-Reponse 4',3);
-- -- //REPONSES Quizz Question 3

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question4-Reponse 1',4);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question4-Reponse 2',4);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question4-Reponse 3',4);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Arrêter-démarrer mon téléphone/Quizz1-Question4-Reponse 4',4);

INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question1-Reponse 1',5);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question1-Reponse 2',5);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question1-Reponse 3',5);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question1-Reponse 4',5);


INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question2-Reponse 1',6);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question2-Reponse 2',6);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question2-Reponse 3',6);
INSERT INTO answers(content,question_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz2-Question2-Reponse 4',6);


-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz-Question2',2);
-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz-Question3',2);
-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Utiliser un QR Code/Quizz-Question4',2);

-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Manipuler un écran tactile/Quizz-Question1',2);
-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Manipuler un écran tactile/Quizz-Question2',2);
-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Manipuler un écran tactile/Quizz-Question3',2);
-- -- INSERT INTO questions(content,quizz_id) VALUES ('Utiliser mon téléphone/Manipuler un écran tactile/Quizz-Question4',2);

-- INSERT INTO questions(content,quizz_id) VALUES ('Formation2/Tuto1/Question1',9);

-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 2',1);
-- INSERT INTO questions(content,quizz_id) VALUES ('Formation2/Tuto2/Question2',9);
-- INSERT INTO questions(content,quizz_id) VALUES ('Formation2/Tuto3/Question3',9);
-- INSERT INTO questions(content,quizz_id) VALUES ('Formation2/Tuto2/Question4',9);


-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 2',2);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 3',3);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 4',4);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 5',5);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 6',6);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 7',7);
-- -- INSERT INTO answers(content,question_id) VALUES ('Reponse 8',8);