-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2020 at 11:25 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `curd`
--

-- --------------------------------------------------------

--
-- Table structure for table `curdtbl`
--

CREATE TABLE `curdtbl` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `curdtbl`
--

INSERT INTO `curdtbl` (`id`, `fullname`, `lastname`, `email`, `password`, `mobile`, `gender`, `city`) VALUES
(3, 'jaydeep', 'kushwah', 'jaydeep@gmail.com', '123456', '9147732323', 'male', 'indore'),
(4, 'pooja', 'kushwah', 'pooja@gmail.com', '12456', '9745632152', 'female', 'indore'),
(5, 'jay', 'kushwah', 'jay@gmail.com', '741258', '987456321', 'male', 'ujjain'),
(7, 'Pranay', 'Patody', 'Patody.mmfinfotech@gmail.com', '12345678', '07894561230', 'male', 'Indore'),
(8, 'abhishek', 'yadav', 'abhishek.mmfinfotech@gmail.com', '12345678', '98745632', 'male', 'Mhow'),
(9, 'dheeraj', 'kumar', 'dheeraj.mmfinfotech@gmail.com', '745896', '987456321', 'male', 'Datia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `curdtbl`
--
ALTER TABLE `curdtbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `curdtbl`
--
ALTER TABLE `curdtbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
