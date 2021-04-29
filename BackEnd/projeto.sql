-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Abr-2021 às 20:22
-- Versão do servidor: 10.4.18-MariaDB
-- versão do PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `projeto`
--

CREATE TABLE `projeto` (
  `Tecnico` varchar(30) NOT NULL,
  `Gestor` varchar(30) NOT NULL,
  `Data` date NOT NULL,
  `Tipo_atendimento` text NOT NULL,
  `Cliente` varchar(30) NOT NULL,
  `Observacao` text NOT NULL,
  `IdTecnico` int(3) NOT NULL,
  `IdCliente` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `projeto`
--

INSERT INTO `projeto` (`Tecnico`, `Gestor`, `Data`, `Tipo_atendimento`, `Cliente`, `Observacao`, `IdTecnico`, `IdCliente`) VALUES
('Testing@tesing.com', 'Testing', '0000-00-00', '', 'Test', '', 0, 0),
('', '', '0000-00-00', '', '', '', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
