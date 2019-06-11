-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.6.34-log - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para tictactoe
CREATE DATABASE IF NOT EXISTS `tictactoe` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tictactoe`;

-- Volcando estructura para tabla tictactoe.partida
CREATE TABLE IF NOT EXISTS `partida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resultado` varchar(50) DEFAULT '0',
  `creada` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `terminada` timestamp NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `casilla1` int(1) DEFAULT '0',
  `casilla2` int(1) DEFAULT '0',
  `casilla3` int(1) DEFAULT '0',
  `casilla4` int(1) DEFAULT '0',
  `casilla5` int(1) DEFAULT '0',
  `casilla6` int(1) DEFAULT '0',
  `casilla7` int(1) DEFAULT '0',
  `casilla8` int(1) DEFAULT '0',
  `casilla9` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
