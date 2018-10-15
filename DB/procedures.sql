USE EXAMENCIFRADO;
DELIMITER $$
DROP FUNCTION IF EXISTS getidUsuario$$
DROP PROCEDURE IF EXISTS InsertarReporte$$
DROP PROCEDURE IF EXISTS VerReporte$$

CREATE FUNCTION getidUsuario(nom_usuario VARCHAR(45)) RETURNS INT
    BEGIN
        RETURN(SELECT id_user FROM USUARIO WHERE nombre = nom_usuario);
    END$$

CREATE PROCEDURE InsertarReporte(IN id_usuario INT, IN cuerpo VARCHAR(100), IN fecha DATE)
    BEGIN
       INSERT INTO REPORTE (id_user,cuerpo, fec_rep)VALUES(id_usuario,cuerpo,fecha);
    END$$

CREATE PROCEDURE VerReporte(IN id_usuario INT, IN fecha DATE, IN nombre_usu VARCHAR(100))
    BEGIN
       SELECT REPORTE.cuerpo FROM REPORTE INNER JOIN USUARIO ON REPORTE.id_user = USUARIO.id_user WHERE USUARIO.nombre = nombre AND REPORTE.fec_rep = fecha; 
       SELECT cuerpo FROM REPORTE WHERE id_user = id_usuario AND fec_rep = fecha;
    END$$
CREATE PROCEDURE ReportesAnteriores(IN id_usuario INT, IN fecha DATE, IN nombre_usu VARCHAR(100))
	BEGIN
		SELECT REPORTE.cuerpo FROM REPORTE INNER JOIN USUARIO ON REPORTE.id_user = USUARIO.id_user WHERE USUARIO.nombre = nombre AND REPORTE.fec_rep < fecha; 
		SELECT REPORTE.cuerpo FROM REPORTE INNER JOIN USUARIO ON REPORTE.id_user = USUARIO.id_user WHERE USUARIO.id_usuario = nombre AND REPORTE.fec_rep < fecha; 
	END$$
CREATE PROCEDURE ReportesPosteriores(IN id_usuario INT, IN fecha DATE, IN nombre_usu VARCHAR(100))
	BEGIN
		SELECT REPORTE.cuerpo FROM REPORTE INNER JOIN USUARIO ON REPORTE.id_user = USUARIO.id_user WHERE USUARIO.nombre = nombre AND REPORTE.fec_rep > fecha; 
				SELECT REPORTE.cuerpo FROM REPORTE INNER JOIN USUARIO ON REPORTE.id_user = USUARIO.id_user WHERE USUARIO.id_usuario = nombre AND REPORTE.fec_rep > fecha;
	END$$

