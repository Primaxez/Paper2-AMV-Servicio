CREATE TABLE doctor (
   
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre      	VARCHAR(30) NOT NULL,
    apellido		VARCHAR(30) NOT NULL,
    genero			VARCHAR(1) NOT NULL,
    imagen			MEDIUMBLOB,

    CONSTRAINT dominio_genero CHECK (genero='M' OR genero='F')
);

CREATE TABLE especialidad (
    
    id				INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre      	VARCHAR(30) NOT NULL
);

CREATE TABLE doctor_especialidad (
    
    id				        INT(11) PRIMARY KEY AUTO_INCREMENT,
    id_doctor				INT(11),
    id_especialidad    	    INT(11),

    FOREIGN KEY (id_doctor) REFERENCES doctor(id),
    FOREIGN KEY (id_especialidad) REFERENCES especialidad(id)
);
