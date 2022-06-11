SELECT doctor.id, doctor.nombre, doctor.apellido, doctor.genero, doctor.imagen, especialidad.id, especialidad.nombre
FROM doctor 
INNER JOIN doctor_especialidad ON (doctor.id = doctor_especialidad.id_doctor)
INNER JOIN especialidad ON (doctor_especialidad.id_especialidad = especialidad.id)
WHERE 1;

SELECT doctor.id, doctor.nombre, doctor.apellido, doctor.genero, doctor.imagen, GROUP_CONCAT(especialidad.nombre) AS especialidades
FROM doctor 
INNER JOIN doctor_especialidad ON (doctor.id = doctor_especialidad.id_doctor)
INNER JOIN especialidad ON (doctor_especialidad.id_especialidad = especialidad.id)
GROUP BY doctor.id;