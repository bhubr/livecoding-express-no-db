-- Création table student
CREATE TABLE student (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  birthday DATE,
  address TEXT,
  school_id INTEGER NOT NULL
);
