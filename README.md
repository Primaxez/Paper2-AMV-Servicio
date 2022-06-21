# Paper2-AMV-Servicio
Repositorio del servicio Buscar Doctores por Especialidad (Paper 2). 
Subgrupo conformado por Alejandro Pestana, Miguel Cuadrado y Vicente Mirabal del equipo The Geeks.

# Tabla de Contribuciones:
| Alejandro Pestana                                                                                                                                                                                                                                                                                                                                                                               | Miguel Cuadrado                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Crear módulo de especialidad con sus respectivas capas. Modificación de la capa del doctor para agregar decorador ManyToMany para obtener las especialidades de cada doctor y agregar Buffer para la imagen. Crear scripts base para la base de datos MySQL. (Commits "Crear Especialidad, Scripts de DB, Modificar Doctor", "Agregar propiedad eager" e "Implementar buscar por especialidad") | Creación base del servicio. Creación de los módulos base y doctor con sus respectivas capas. Conexión con MySQL a través de localhost (Commits "Re-Creación del Servicio", "Creación de Servicio NESTJS" y "Update de Servicio") |
| Crear inserts de la base de datos (100 doctores, 20 especialidades, y 125 relaciones doctor-especialidad). Cambiar imagen de doctor a string para utilizar urls (Cloudinary) en lugar de blobs. (Commits "Crear Inserts", "Update inserts.sql" y "Cambiar imagen de Blob a string")                                                                                                             |                                                                                                                                                                                                                                  |
| Usar Dependency Cruiser para verificar las dependencias y generar un gráfico de ellas. Cambiar imports restantes a relativos para que no hayan dependencias duplicadas en el gráfico (Commits "Incluir Dependency Cruiser" y "Cambiar imports a relativos")                                                                                                                                     |                                                                                                                                                                                                                                  |

# Instalación y Setup

Primero que nada, se debe descargar e instalar [Node.JS](https://nodejs.org/es/). 

Después, es necesario instalar y descargar NestJS de forma global:

```
npm i -g @nestjs/cli
```

Debes descargar las dependencias utilizadas por el servicio ubicándote en la carpeta "servicio" y ejectuando:

```
npm install
```

Se utiliza el manejador de bases de datos MySQL, por lo que debes descargar [XAMPP](https://www.apachefriends.org/es/index.html) o crear una imagen de MySQL en [Docker](https://www.docker.com).

Debes levantar el manejador en el localhost.

Finalmente, ejecuta los scripts ubicados en la carpeta "database" en orden: creates y luego inserts.

# Ejecución del Servicio

Para poder correr el servicio, ejecuta en la carpeta "servicio" lo siguiente:

```
npm start
```
