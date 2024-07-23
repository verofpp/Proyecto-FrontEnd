# Sistema de Planificación de Clases
Sistema de planificacion de asignaturas con sus respectivos profesores, secciones y horarios a los cuales se le añaden actividades y eventos

    REQUERIMIENTOS DEL SISTEMA
1- Node.js
2- Npm
3- XAMPP
4- Un editor de archivos de código, tal como Visual Studio Code

    PASOS PARA INICIAR EL SISTEMA
1- Descargar el repositorio en el lin de github: https://github.com/verofpp/Proyecto-FrontEnd.git
2- Abrir la carpeta del repositorio en un editor (como Visual Studio Code)
3- Abrir XAMPP e inicializar los módulos de Apache y MySQL
4- Crear una base de datos con el nombre "HorarioClases" e importar la base de datos requerida para el sistema, encontrada en la carpeta del repositorio
5- En el editor de preferencia, crear un archivo .env dentro de la carpeta "Horarios" con la siguiente información:
    DB_HOST = localhost
    DB_DATABASE = horarioclases
    DB_USER = root
    DB_PASSWORD = 
6- En el editor, abrir la consola en la carpeta de "Horarios"
7- En la consola se debe escribir el comando "npm i" para instalar el sistema y sus dependencias
8- Repetir los comandos indicados en el paso anterior en la carpeta de "horario-clases"
9- Después del último paso, se debería iniciar automáticamente el sistema en el navegador predeterminado

(En caso de un sistema operativo macOS, antes de iniciar el sistema se debe desinstalar y reinstalar la dependencia de bcrypt, luego continuar con el resto de los pasos)
