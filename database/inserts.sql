-- Doctores:

INSERT INTO doctor (id, nombre, apellido, genero) VALUES (1, 'Pablo', 'Pérez', 'M');
INSERT INTO doctor (id, nombre, apellido, genero) VALUES (2, 'María', 'Fernández', 'F');
INSERT INTO doctor (id, nombre, apellido, genero) VALUES (3, 'Carlos', 'Hernández', 'M');

-- Especialidades:
INSERT INTO especialidad (id, nombre) VALUES (1, 'Cardiología');
INSERT INTO especialidad (id, nombre) VALUES (2, 'Ginecología');
INSERT INTO especialidad (id, nombre) VALUES (3, 'Oftalmología');

-- Relaciones doctor-especialidad:
INSERT INTO doctor_especialidad (id_doctor, id_especialidad) VALUES (1, 1);
INSERT INTO doctor_especialidad (id_doctor, id_especialidad) VALUES (1, 2);
INSERT INTO doctor_especialidad (id_doctor, id_especialidad) VALUES (2, 2);
INSERT INTO doctor_especialidad (id_doctor, id_especialidad) VALUES (3, 3);
