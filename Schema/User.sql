CREATE TABLE Usuario 
(
	id BINARY(16) PRIMARY KEY NOT NULL,
	picture VARCHAR(255),
    nombre VARCHAR(255)  NOT NULL,
	email VARCHAR(255)  NOT NULL,
	password VARCHAR(255)  NOT NULL,
	cedula NUMBER(10) NOT NULL,
	numero_tarjeta VARCHAR(255),
	roleId VARCHAR(255) NOT NULL,
	estado VARCHAR(255) NOT NULL,
    createdAt VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS `Transaccion` (
    `id` BINARY(16) PRIMARY KEY,
    `valor` DECIMAL(10, 2) NOT NULL,
    `estado` TINYINT(1) NOT NULL,
    `cc_usuario` INT NOT NULL,
    `referencia` INT NOT NULL,
	`id_reservacion` BINARY(16) NOT NULL,
    FOREIGN KEY (`cc_usuario`) REFERENCES `Usuario`(`cedula`),
	FOREIGN KEY (`id_reservacion`) REFERENCES `Reserva`(`id`)
);