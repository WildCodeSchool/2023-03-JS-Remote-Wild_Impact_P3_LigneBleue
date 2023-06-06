DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS formations;
DROP TABLE IF EXISTS quizz;
DROP TABLE IF EXISTS tutorials;

CREATE TABLE users (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  mail varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  role varchar(100) NOT NULL,
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