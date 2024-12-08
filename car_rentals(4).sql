-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2020 at 04:40 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rentals`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `guest_id` int(11) DEFAULT NULL,
  `Price` float NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` int(11) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `pick_up_location` varchar(20) NOT NULL,
  `drop_off_location` varchar(20) NOT NULL,
  `payment` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `from_date`, `to_date`, `vehicle_id`, `customer_id`, `guest_id`, `Price`, `email`, `phone`, `last_name`, `first_name`, `pick_up_location`, `drop_off_location`, `payment`) VALUES
(1, '2020-07-15', '2020-07-20', 1, 1, NULL, 0, '', 0, '', '', '', '', ''),
(2, '2020-07-15', '2020-07-20', 2, 1, NULL, 0, '', 0, '', '', '', '', ''),
(3, '2020-07-15', '2020-07-20', 3, 1, NULL, 0, '', 0, '', '', '', '', ''),
(4, '2020-07-15', '2020-07-20', 4, 1, NULL, 0, '', 0, '', '', '', '', ''),
(5, '2020-07-15', '2020-07-20', 5, 1, NULL, 0, '', 0, '', '', '', '', ''),
(6, '2020-07-15', '2020-07-20', 6, 1, NULL, 0, '', 0, '', '', '', '', ''),
(7, '2020-07-15', '2020-07-20', 7, 1, NULL, 0, '', 0, '', '', '', '', ''),
(8, '2020-07-15', '2020-07-20', 8, 1, NULL, 0, '', 0, '', '', '', '', ''),
(9, '2020-07-15', '2020-07-20', 9, 1, NULL, 0, '', 0, '', '', '', '', ''),
(10, '2020-07-15', '2020-07-20', 10, 1, NULL, 0, '', 0, '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `id` int(11) NOT NULL,
  `Fname` varchar(50) NOT NULL,
  `Lname` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` int(11) NOT NULL,
  `Created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`id`, `Fname`, `Lname`, `email`, `phone`, `Created`) VALUES
(1, '', '', '', 0, '2020-06-10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `phone`, `first_name`, `last_name`, `password`) VALUES
(1, 'johnsmith@mail.com', 1231231230, 'John', 'Smith', '$2a$08$8vseQloC7ezZdp2aJd1L..JPkS3UaaBzBumkFP0LISWSZ6/l3kEwu'),
(2, 'billbrown@mail.com', 1234567890, 'Bill', 'Brown', '$2a$08$BHnRkuFTm689mPDCk7YiyOnWb2orDXlSk6lpj//jX.3a6/ZnRSrKO');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL,
  `PlateNumber` varchar(45) NOT NULL,
  `Category` int(11) NOT NULL,
  `Model` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vehicle`
--

INSERT INTO `vehicle` (`id`, `PlateNumber`, `Category`, `Model`) VALUES
(1, 'AX1045', 1, 0),
(2, 'BX1045', 1, 0),
(3, 'GX1045', 1, 0),
(4, 'DX1045', 1, 1),
(5, 'ZX1045', 1, 1),
(6, 'HX1045', 2, 5),
(7, 'AU1045', 2, 5),
(8, 'IX1045', 2, 5),
(9, 'KX1045', 2, 6),
(10, 'LX1045', 2, 6),
(11, 'AZ4055', 1, 1),
(12, 'AZ4056', 1, 1),
(13, 'AZ4057', 1, 1),
(14, 'AZ5055', 1, 2),
(15, 'AZ5056', 1, 2),
(16, 'AZ5057', 1, 2),
(17, 'AZ5058', 1, 2),
(18, 'AZ5059', 1, 2),
(19, 'AZ5065', 1, 3),
(20, 'AZ5066', 1, 3),
(21, 'AL0015', 2, 4),
(22, 'AL0016', 2, 4),
(23, 'AL0017', 2, 4),
(24, 'AL0070', 2, 7),
(25, 'AL0071', 2, 7),
(26, 'AL0073', 2, 7),
(27, 'AS3010', 3, 8),
(28, 'AS3011', 3, 8),
(29, 'AS3012', 3, 8),
(30, 'AS3013', 3, 8),
(31, 'AS3020', 3, 9),
(32, 'AS3021', 3, 9),
(33, 'AS3022', 3, 9),
(34, 'AS3031', 3, 10),
(35, 'AS3032', 3, 10),
(36, 'AS3033', 3, 10),
(37, 'AS3040', 3, 11),
(38, 'AS3041', 3, 11),
(39, 'AS3042', 3, 11),
(40, 'AS3043', 3, 11),
(49, 'AM1210', 4, 12),
(50, 'AM1211', 4, 12),
(51, 'AM1220', 4, 13),
(52, 'AM1221', 4, 13),
(53, 'AM1231', 4, 14),
(54, 'AM1232', 4, 14),
(55, 'AM1233', 4, 15),
(56, 'AM1234', 4, 15),
(57, 'AC7911', 5, 16),
(58, 'AC7912', 5, 16),
(59, 'AC7913', 5, 16),
(60, 'AC7921', 5, 17),
(61, 'AC7922', 5, 17),
(62, 'AC7923', 5, 17),
(63, 'AC7931', 5, 18),
(64, 'AC7932', 5, 18),
(65, 'AC7933', 5, 18),
(66, 'AC7941', 5, 19),
(67, 'AC7942', 5, 19),
(68, 'AC7943', 5, 19);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `customer_id_2` (`customer_id`),
  ADD KEY `guest_id` (`guest_id`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PlateNumber` (`PlateNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `bookings_ibfk_3` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
