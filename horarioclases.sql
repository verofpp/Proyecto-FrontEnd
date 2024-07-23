-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2024 a las 21:04:42
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos`
--
CREATE DATABASE IF NOT EXISTS `basededatos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `basededatos`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `Id` int(11) NOT NULL,
  `Actividad` varchar(20) NOT NULL,
  `Materia` varchar(20) NOT NULL,
  `Semana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_sección`
--

CREATE TABLE `actividades_sección` (
  `Id` int(11) NOT NULL,
  `Id_Actividad` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Id_Sección` int(11) NOT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth`
--

CREATE TABLE `auth` (
  `Id` int(10) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth`
--

INSERT INTO `auth` (`Id`, `Usuario`, `Password`) VALUES
(1, '@verofpp', '$2b$05$2k5DlhoC8/xZIHxy8EA2B.StnkB8XrSmm92CiQnoG1Eo1UzYOd6Lu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth2`
--

CREATE TABLE `auth2` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(20) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `auth2`
--

INSERT INTO `auth2` (`Id`, `Usuario`, `Password`) VALUES
(2, '@cr7', '$2b$05$..w2uIAVABylzFIU9fnHGOknf4Qjq2bEhpaeyr7dvrUIOQ93C/9G.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `Id` int(11) NOT NULL,
  `Tipo` varchar(20) DEFAULT NULL,
  `Fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`Id`, `Nombre`) VALUES
(1, 'Matematica IV'),
(2, 'Diseño Logico II'),
(3, 'Entornos De desarrollo'),
(4, 'Analisis y Diseño de Sistemas'),
(5, 'Estructura de datos I'),
(6, 'Backend'),
(7, 'Base de Datos I'),
(8, 'Lógica Básica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`Id`, `Nombre`, `Apellido`) VALUES
(1, 'Katiuska', 'Morillo'),
(2, 'Yerson', 'Gonzales'),
(3, 'Suleima', 'Espinoza'),
(4, 'Roberto', 'Di Michele');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores_materias`
--

CREATE TABLE `profesores_materias` (
  `Id_Profesor` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Horario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores_materias`
--

INSERT INTO `profesores_materias` (`Id_Profesor`, `Id_Materia`, `Horario`) VALUES
(1, 1, ''),
(1, 2, ''),
(2, 5, ''),
(3, 3, ''),
(3, 4, ''),
(4, 6, ''),
(4, 7, ''),
(4, 8, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`Id`, `Nombre`) VALUES
(1, 'Semipresencial'),
(2, 'Virtual'),
(3, 'Fin de semana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trimestre`
--

CREATE TABLE `trimestre` (
  `Id` int(11) NOT NULL,
  `Inicio` date NOT NULL,
  `Fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `correo` varchar(20) NOT NULL,
  `rol` enum('Profesor','Director') NOT NULL,
  `activo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `rol`, `activo`) VALUES
(1, 'Verónica', '@verofpp', 'Profesor', 1),
(2, 'Cris', '@cr7', 'Director', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fkidmateria` (`Materia`);

--
-- Indices de la tabla `actividades_sección`
--
ALTER TABLE `actividades_sección`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `fkidactividad` (`Id_Actividad`),
  ADD KEY `fkidmateria` (`Id_Materia`),
  ADD KEY `fkidseccion` (`Id_Sección`);

--
-- Indices de la tabla `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `auth2`
--
ALTER TABLE `auth2`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `profesores_materias`
--
ALTER TABLE `profesores_materias`
  ADD PRIMARY KEY (`Id_Profesor`,`Id_Materia`),
  ADD KEY `materia_id` (`Id_Materia`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades_sección`
--
ALTER TABLE `actividades_sección`
  ADD CONSTRAINT `actividades_sección_ibfk_1` FOREIGN KEY (`id_sección`) REFERENCES `secciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actividades_sección_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actividades_sección_ibfk_3` FOREIGN KEY (`id_actividad`) REFERENCES `actividades` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auth`
--
ALTER TABLE `auth`
  ADD CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `auth2`
--
ALTER TABLE `auth2`
  ADD CONSTRAINT `auth2_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `profesores_materias`
--
ALTER TABLE `profesores_materias`
  ADD CONSTRAINT `profesores_materias_ibfk_1` FOREIGN KEY (`Id_Profesor`) REFERENCES `profesores` (`id`),
  ADD CONSTRAINT `profesores_materias_ibfk_2` FOREIGN KEY (`Id_Materia`) REFERENCES `materias` (`id`);
--
-- Base de datos: `basededatosfrontend`
--
CREATE DATABASE IF NOT EXISTS `basededatosfrontend` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `basededatosfrontend`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albumes`
--

CREATE TABLE `albumes` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `albumes`
--

INSERT INTO `albumes` (`Nombre`, `Año`) VALUES
('Il ballo della vita', '2018'),
('Teatro d\'Ira - Vol. I', '2021'),
('RUSH!', '2023');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones notables`
--

CREATE TABLE `canciones notables` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones notables`
--

INSERT INTO `canciones notables` (`Nombre`, `Año`) VALUES
('Torna a casa', '2021'),
('Coraline', '2021'),
('Amandoti', '2021'),
('In Nome dell\'Amore', '2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ep`
--

CREATE TABLE `ep` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ep`
--

INSERT INTO `ep` (`Nombre`, `Año`) VALUES
('Chosen', '2017'),
('Il Ballo della Vita', '2018');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sencillos`
--

CREATE TABLE `sencillos` (
  `Nombre` varchar(50) NOT NULL,
  `Año` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sencillos`
--

INSERT INTO `sencillos` (`Nombre`, `Año`) VALUES
('Chosen', '2017'),
('Morte', '2017'),
('For Your Love', '2017'),
('Recovery', '2018'),
('L\'altra metà di me', '2018'),
('Fearless', '2019'),
('Volpone', '2020'),
('Zitti e buoni', '2021'),
('I Wanna Be Your Slave', '2021'),
('Mammamia', '2021'),
('The Loneliest', '2022'),
('Supermodel', '2022'),
('If I Can Dream', '2022'),
('GOSSIP (feat. Tom Morello)', '2023'),
('Kool Kids', '2023'),
('LA FINE', '2022'),
('Beggin\'', '2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Nombre` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Reseña` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Nombre`, `Email`, `Reseña`) VALUES
('Cris', 'parraparravefa@uvm.edu.ve', 'asffdd');
--
-- Base de datos: `front`
--
CREATE DATABASE IF NOT EXISTS `front` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `front`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `id_cla` int(11) NOT NULL,
  `actividad` varchar(50) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `id_cla`, `actividad`, `descripcion`) VALUES
(1, 1, 'E-actividad 2.1', 'Esta pruebas es fuerte pero vamos por buen camino a punto de terminar, ya es hora, ya que estoy un poco cansado'),
(2, 2, 'E-actividad 1.1', 'Esta pruebas es fuerte pero vamos por buen camino a punto de terminar, ya es hora, ya que estoy un poco cansado'),
(3, 2, 'E-actividad 1.1', 'Esta pruebas es fuerte pero vamos por buen camino a punto de terminar, ya es hora, ya que estoy un poco cansado y ahora con ajuste'),
(4, 1, 'E-actividad 4.3', 'muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\nsmuchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos muchos v\ns\ns'),
(5, 1, 'Otra 1.2', 'asdfxzv'),
(6, 1, 'Uno 1', 'Por ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsdPor ejemplo\nsd'),
(7, 2, 'asdfasdf', 'asdfasdf'),
(8, 4, 'sadfasdf', 'asdfasdf'),
(9, 1, 'prueba au', 'dsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdfdsfdsfs\nzvxcvdfgqdsfsdf'),
(10, 8, 'prueba funcional', 'esta es la prueba de edici´on con prueba funcional a prueba funcional 2'),
(11, 8, 'Vamos a Editar esta', 'buena prueba'),
(12, 8, 'Vamos a Editar esta 2', 'no me joda'),
(13, 9, 'con la clase nueva creada y editada', 'con la nueva clase.. para completar.'),
(14, 6, 'con la clase nueva creada y editada', 'con la nueva clase.. para completar.'),
(15, 11, 'Actividad #01', 'Una actividad Sugerida por la maestra de back, Veronica'),
(16, 12, 'Actividad Profesor', 'Nueva actividad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `id_sec` int(11) NOT NULL,
  `id_tri` int(11) NOT NULL,
  `semana` int(2) NOT NULL,
  `dia` enum('lunes','martes','miercoles','jueves','viernes','sabado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `id_sec`, `id_tri`, `semana`, `dia`) VALUES
(1, 13, 3, 6, 'martes'),
(2, 13, 3, 5, 'jueves'),
(3, 13, 4, 4, 'jueves'),
(4, 13, 3, 10, 'lunes'),
(5, 13, 3, 6, 'sabado'),
(6, 18, 5, 7, 'martes'),
(7, 20, 5, 1, 'lunes'),
(8, 4, 4, 2, 'martes'),
(9, 18, 4, 1, 'lunes'),
(10, 25, 5, 4, 'miercoles'),
(11, 26, 10, 3, 'miercoles'),
(12, 26, 10, 2, 'martes'),
(13, 26, 10, 4, 'martes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `id_tri` int(11) NOT NULL,
  `motivo` varchar(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `id_tri`, `motivo`, `fecha`) VALUES
(1, 3, 'Expoferia industrial Octubre 2024', '2024-07-23'),
(2, 3, 'Charla de jose manuel', '2024-08-01'),
(3, 6, 'asdf', '2024-08-25'),
(4, 5, 'fdsafd', '2024-04-24'),
(5, 4, 'Evento de prueba para validar la funcionalidad.', '2024-11-05'),
(6, 10, 'Evento creado', '2024-08-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `siglas` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id`, `nombre`, `siglas`) VALUES
(2, 'Back end', 'BE'),
(3, 'Front end', 'FE'),
(7, 'Comunicacion de datos', 'CD'),
(8, 'Prueba', 'PP'),
(9, 'Otra', 'OO'),
(10, 'Nueva', 'NN'),
(11, 'Ba', 'bb'),
(12, 'Arquitectura del computador', 'Ad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `id_usu` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `id_usu`, `nombre`, `apellido`) VALUES
(11, 12, 'José Manuel', 'Correa Díaz'),
(12, 13, 'Manuel', 'Correa'),
(13, 15, 'Prue', 'Eba'),
(14, 16, 'Prueba', 'Prueba'),
(15, 17, 'Manuel Alejandro', 'Correa Diaz'),
(16, 19, 'Prueba1', 'Prueba2'),
(17, 22, 'Samuel', 'Castillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `id_pro` int(11) NOT NULL,
  `id_mat` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `id_pro`, `id_mat`, `nombre`) VALUES
(4, 12, 2, '01'),
(5, 11, 2, '02'),
(6, 12, 2, '03'),
(7, 11, 2, '04'),
(8, 12, 2, '05'),
(9, 11, 2, '06'),
(10, 12, 2, '07'),
(11, 11, 2, '08'),
(12, 11, 3, '1'),
(13, 12, 3, '14'),
(14, 11, 3, '3'),
(15, 12, 3, '4'),
(16, 11, 3, '5'),
(17, 12, 3, 'PRUEBA'),
(18, 12, 7, 'PRUEBA'),
(19, 12, 7, 'PRUEBA1'),
(20, 11, 7, 'PRUEBA2'),
(21, 11, 3, 'PRUEBA3'),
(22, 15, 2, 'SECCION TXV'),
(23, 12, 10, 'B01'),
(24, 16, 2, 'TS4'),
(25, 12, 7, '01'),
(26, 17, 12, 'B2-01'),
(27, 11, 12, 'N02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trimestre`
--

CREATE TABLE `trimestre` (
  `id` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trimestre`
--

INSERT INTO `trimestre` (`id`, `inicio`, `fin`) VALUES
(3, '2024-07-15', '2024-10-18'),
(4, '2024-10-19', '2024-12-19'),
(5, '2024-04-17', '2024-07-17'),
(6, '2024-07-19', '2024-11-09'),
(7, '2024-04-06', '2024-07-14'),
(8, '2024-09-18', '2024-12-31'),
(9, '2024-08-06', '2024-09-27'),
(10, '2024-07-29', '2024-09-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `rol` enum('Profesor','Director') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `usuario`, `contrasena`, `rol`) VALUES
(12, 'jose121correa@gmail.com', 'jcorrea', '$2a$10$c.9LAPisn8oxQnNZklFaauTXsLqKBY18GNCIgVTu7XPoeXtlcSL.O', 'Profesor'),
(13, 'mcorrea@gmail.com', 'mcorrea2', '$2a$10$PDO7Df4jshlBVjhXZbmccOx46Ov9Hh0JsnMzTzX2jHlROpHOb39Ga', 'Profesor'),
(14, 'mcorrea@ula.ve', 'director', '$2a$10$SQnCyiVd2orUcCr0vQJafeu6UN9YuQe7CufqUeP4fowqc3XQSBxaq', 'Director'),
(15, 'prueba@gmail.com', 'prueba', '$2a$10$7FerR5EaCE4kk0m3qxSpNOc8YUyEsy0GxwBZKqX8voEXdD19FrWum', 'Profesor'),
(16, 'prueba1@gmail.com', 'prueba1', '$2a$10$04piIKNgGcwFmka1ddS6SuhPnQKJLG3KXRXEnI4UTVnZpQpuedvWC', 'Profesor'),
(17, 'alejandro@gmail.com', 'alejandro', '$2a$10$9MOqCImP5FPEeo7np0mnCOwIF1l7eIDyN.r3aTpk57KJgFJXt2XRC', 'Profesor'),
(18, 'prueba@ula.ve', 'directorsectorial', '$2a$10$QE6qC/T6YZO0RUgyBU8iMewFa6YeyK1QQeN2dTY.kxPBM2al8mfti', 'Director'),
(19, 'pruebap@yopmail.com', 'mcorrea', '$2a$10$8ogskfp5dIskRVTyA.TIiOipEFfjC49nGZEWUxGA2WrPQWvHhswba', 'Profesor'),
(20, 'director2@gmail.com', 'director2', '$2a$10$/qg6gYgZ3P7kzF8GAWxg7.g9wjENOS1Yf9bPG0tEZ.nI1ieAYwUiG', 'Director'),
(21, 'directora@yopmail.com', 'directora', '$2a$10$hhKp7O83gskD/Gj4Fs.dSOERtov3.G4B8ZgQdyf/.suCprrKPPpXi', 'Director'),
(22, 'profesor@yopmail.com', 'josue', '$2a$10$MvpPVH1nQhDnrtuj267BCOykEorHA0jCgRpZLdlQTDykcb9cVpy4m', 'Profesor');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cla` (`id_cla`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sec` (`id_sec`),
  ADD KEY `id_tri` (`id_tri`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tri` (`id_tri`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pro` (`id_pro`),
  ADD KEY `id_mat` (`id_mat`);

--
-- Indices de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `actividades_ibfk_1` FOREIGN KEY (`id_cla`) REFERENCES `clases` (`id`);

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`id_sec`) REFERENCES `secciones` (`id`),
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`id_tri`) REFERENCES `trimestre` (`id`);

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_tri`) REFERENCES `trimestre` (`id`);

--
-- Filtros para la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD CONSTRAINT `profesores_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`id_pro`) REFERENCES `profesores` (`id`),
  ADD CONSTRAINT `secciones_ibfk_2` FOREIGN KEY (`id_mat`) REFERENCES `materias` (`id`);
--
-- Base de datos: `horarioclases`
--
CREATE DATABASE IF NOT EXISTS `horarioclases` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `horarioclases`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `id_cla` int(11) NOT NULL,
  `actividad` varchar(50) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `id_cla`, `actividad`, `descripcion`) VALUES
(17, 14, 'Actividad de Prueba', 'La siguiente es una prueba para comprobar que todo en el sistema se maneja correctamente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `id_sec` int(11) NOT NULL,
  `id_tri` int(11) NOT NULL,
  `semana` int(2) NOT NULL,
  `dia` enum('lunes','martes','miercoles','jueves','viernes','sabado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `id_sec`, `id_tri`, `semana`, `dia`) VALUES
(14, 28, 7, 9, 'martes'),
(15, 28, 7, 3, 'lunes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `id_tri` int(11) NOT NULL,
  `motivo` varchar(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `id_tri`, `motivo`, `fecha`) VALUES
(3, 9, 'Año Nuevo', '2024-01-01'),
(4, 9, 'Día de Reyes', '2024-01-06'),
(5, 8, 'Carnaval', '2024-02-12'),
(6, 8, 'Carnaval', '2024-02-13'),
(7, 6, 'Semana Santa - Jueves Santo', '2024-04-04'),
(8, 6, 'Semana Santa - Viernes Santo', '2024-04-05'),
(9, 3, 'Día del Trabajador', '2024-05-01'),
(10, 3, 'Día de la Independencia', '2024-07-05'),
(11, 3, 'Día de la Batalla de Carabobo', '2024-06-24'),
(12, 4, 'Día de la Resistencia Indígena', '2024-10-12'),
(13, 4, 'Día de Todos los Santos', '2024-11-01'),
(14, 4, 'Navidad', '2024-12-25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `siglas` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id`, `nombre`, `siglas`) VALUES
(1, 'BackEnd', 'BA'),
(2, 'FrontEnd', 'FR'),
(3, 'Arquitectura del Computador', 'AR'),
(4, 'Metodología Numérica', 'MN'),
(5, 'Matemática Combinatoria', 'MA'),
(6, 'Ingeniería Económica', 'IE'),
(7, 'Estructura de Datos', 'ED');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `id_usu` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `id_usu`, `nombre`, `apellido`) VALUES
(1, 23, 'Yerson', 'Gonzales'),
(19, 24, 'Yackeline', 'Gonzalez'),
(20, 25, 'Verónica', 'Parra'),
(21, 26, 'Samuel', 'Castillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `id_pro` int(11) NOT NULL,
  `id_mat` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `id_pro`, `id_mat`, `nombre`) VALUES
(28, 1, 3, '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trimestre`
--

CREATE TABLE `trimestre` (
  `id` int(11) NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trimestre`
--

INSERT INTO `trimestre` (`id`, `inicio`, `fin`) VALUES
(3, '2024-07-15', '2024-10-18'),
(4, '2024-10-19', '2024-12-19'),
(5, '2024-04-17', '2024-07-17'),
(6, '2024-07-19', '2024-11-09'),
(7, '2024-04-06', '2024-07-14'),
(8, '2024-09-18', '2024-12-31'),
(9, '2024-08-06', '2024-09-27'),
(10, '2024-07-29', '2024-09-30'),
(11, '2024-07-11', '2024-07-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `rol` enum('Profesor','Director') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `usuario`, `contrasena`, `rol`) VALUES
(23, 'Yerson@gmail.com', 'yer', '$2a$10$gzLBYZdqAW3/m3KU8j4f2O/AYA.URI7QzWkRL1Eiz4GbOSKUxLE3O', 'Profesor'),
(24, 'Yackeline@gmail.com', 'yaque', '$2a$10$AUY7mXRhcXyy0lLPo0eD3OlL4wqspUYuxBN47nnAQ4Eo0junUrLdy', 'Profesor'),
(25, 'verofpp@gmail.com', 'vero', '$2a$10$mTpcAE2qNROWtrzB7TjQ2eexEySu5uorP0yx4tWK95jN1OGdE6tcS', 'Profesor'),
(26, 'Samuel@mail.com', 'samuel', '$2a$10$j.sswMY.4A0jbiY3wBMmPOTNMOFjd/bUjZQp5TOmIWHPJCKCV4CKO', 'Profesor'),
(27, 'Cris@mail.com', 'cristhofer', '$2a$10$BHw/BlJiwCSfq23lsUkbZ.WnGPVQe7L7a.pKhOsYTrVYwmk66w.U6', 'Director');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cla` (`id_cla`);

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sec` (`id_sec`),
  ADD KEY `id_tri` (`id_tri`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tri` (`id_tri`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pro` (`id_pro`),
  ADD KEY `id_mat` (`id_mat`);

--
-- Indices de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `trimestre`
--
ALTER TABLE `trimestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `actividades_ibfk_1` FOREIGN KEY (`id_cla`) REFERENCES `clases` (`id`);

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`id_sec`) REFERENCES `secciones` (`id`),
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`id_tri`) REFERENCES `trimestre` (`id`);

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_tri`) REFERENCES `trimestre` (`id`);

--
-- Filtros para la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD CONSTRAINT `profesores_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`id_pro`) REFERENCES `profesores` (`id`),
  ADD CONSTRAINT `secciones_ibfk_2` FOREIGN KEY (`id_mat`) REFERENCES `materias` (`id`);
--
-- Base de datos: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Volcado de datos para la tabla `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{\"angular_direct\":\"direct\",\"relation_lines\":\"true\",\"snap_to_grid\":\"off\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Volcado de datos para la tabla `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"bookworm\",\"table\":\"evento_literario\"},{\"db\":\"bookworm\",\"table\":\"libro\"},{\"db\":\"bookworm\",\"table\":\"rese\\u00f1a\"},{\"db\":\"bookworm\",\"table\":\"lista_libros\"},{\"db\":\"bookworm\",\"table\":\"lista_de_lectura\"},{\"db\":\"bookworm\",\"table\":\"lector\"},{\"db\":\"bookworm\",\"table\":\"g\\u00e9nero\"},{\"db\":\"bookworm\",\"table\":\"clasificaci\\u00f3n\"},{\"db\":\"bookworm\",\"table\":\"autor\"},{\"db\":\"bookworm\",\"table\":\"Lector\"}]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Volcado de datos para la tabla `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2023-11-26 17:03:05', '{\"Console\\/Mode\":\"collapse\",\"lang\":\"es\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indices de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indices de la tabla `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indices de la tabla `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indices de la tabla `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indices de la tabla `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indices de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indices de la tabla `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indices de la tabla `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indices de la tabla `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indices de la tabla `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indices de la tabla `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Base de datos: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
