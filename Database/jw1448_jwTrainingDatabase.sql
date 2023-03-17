-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 17, 2023 at 10:30 PM
-- Server version: 5.7.41
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jw1448_jwTrainingDatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `articleId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `main_content` text NOT NULL,
  `quiz_content` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`articleId`, `title`, `description`, `tags`, `video_link`, `main_content`, `quiz_content`) VALUES
(1, 'Test_Title', 'test description 1', 'History, Educational', 'jNQXAC9IVRw', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Quis blandit turpis cursus in hac habitasse platea. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Leo vel orci porta non pulvinar neque laoreet suspendisse. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Porttitor rhoncus dolor purus non enim praesent. At augue eget arcu dictum varius. Nibh tortor id aliquet lectus proin. Elementum integer enim neque volutpat ac tincidunt vitae. Leo a diam sollicitudin tempor id eu. Morbi blandit cursus risus at ultrices mi.\r\n\r\nUt porttitor leo a diam sollicitudin tempor id eu. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Aliquam ut porttitor leo a. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Erat nam at lectus urna duis convallis convallis tellus id. Tempus egestas sed sed risus pretium quam. Tristique magna sit amet purus gravida. At augue eget arcu dictum varius duis at consectetur. Ac ut consequat semper viverra nam libero. Bibendum at varius vel pharetra vel turpis nunc eget. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Diam quam nulla porttitor massa id neque aliquam vestibulum.\r\n\r\nUt placerat orci nulla pellentesque dignissim. Velit euismod in pellentesque massa placerat duis. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Amet aliquam id diam maecenas. Leo integer malesuada nunc vel risus. Metus dictum at tempor commodo ullamcorper a lacus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Dui faucibus in ornare quam viverra orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. In ante metus dictum at tempor commodo. Euismod in pellentesque massa placerat duis ultricies lacus. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Semper viverra nam libero justo laoreet sit. Neque aliquam vestibulum morbi blandit cursus risus. Vulputate mi sit amet mauris commodo. Nullam ac tortor vitae purus faucibus ornare.\r\n\r\nArcu cursus vitae congue mauris. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Semper auctor neque vitae tempus quam pellentesque nec nam. Eget nunc lobortis mattis aliquam faucibus. Vestibulum morbi blandit cursus risus at ultrices. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum neque egestas congue quisque egestas diam in arcu. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Integer malesuada nunc vel risus commodo viverra maecenas. Sit amet risus nullam eget felis eget. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Cras semper auctor neque vitae tempus. Vitae ultricies leo integer malesuada. Eu scelerisque felis imperdiet proin fermentum leo vel. Erat nam at lectus urna duis convallis convallis. Ut pharetra sit amet aliquam. Diam quam nulla porttitor massa id neque aliquam. Integer eget aliquet nibh praesent tristique magna sit amet purus.\r\n\r\nEt ultrices neque ornare aenean euismod elementum nisi quis eleifend. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Consectetur purus ut faucibus pulvinar elementum integer. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Cras semper auctor neque vitae. Orci porta non pulvinar neque laoreet suspendisse interdum. Vel pharetra vel turpis nunc. Ornare lectus sit amet est placerat in egestas. Turpis massa sed elementum tempus egestas. Tristique senectus et netus et malesuada fames ac turpis egestas. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Neque gravida in fermentum et sollicitudin. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Velit euismod in pellentesque massa placerat duis ultricies. Ut porttitor leo a diam sollicitudin tempor. Eu consequat ac felis donec et. Nibh mauris cursus mattis molestie. Risus at ultrices mi tempus imperdiet.', '[\r\n  {\r\n    \"question\": \"Which year did World War II begin?\",\r\n    \"answers\": [\r\n      \"1914\",\r\n      \"1939\",\r\n      \"1945\",\r\n      \"1967\"\r\n    ],\r\n    \"correctAnswerIndex\": 1\r\n  },\r\n  {\r\n    \"question\": \"Who was the first president of the United States?\",\r\n    \"answers\": [\r\n      \"Thomas Jefferson\",\r\n      \"George Washington\",\r\n      \"Abraham Lincoln\",\r\n      \"Franklin Roosevelt\"\r\n    ],\r\n    \"correctAnswerIndex\": 1\r\n  },\r\n  {\r\n    \"question\": \"What year did the Berlin Wall fall?\",\r\n    \"answers\": [\r\n      \"1989\",\r\n      \"1991\",\r\n      \"1993\",\r\n      \"1987\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(2, 'Test Title 2', 'test description 2', 'World, Educational', 'R1MECfpUfag', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea. Rhoncus urna neque viverra justo. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Vitae congue mauris rhoncus aenean vel elit. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Nisl rhoncus mattis rhoncus urna. Eget nulla facilisi etiam dignissim diam quis. In iaculis nunc sed augue lacus viverra vitae congue eu. Quam elementum pulvinar etiam non quam.\r\n\r\nNeque laoreet suspendisse interdum consectetur libero id faucibus nisl. In nibh mauris cursus mattis. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Augue lacus viverra vitae congue eu consequat ac. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Scelerisque fermentum dui faucibus in ornare. Senectus et netus et malesuada fames ac turpis egestas sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Enim facilisis gravida neque convallis. Turpis tincidunt id aliquet risus feugiat in ante metus. Elementum integer enim neque volutpat.\r\n\r\nA iaculis at erat pellentesque adipiscing commodo elit at. Iaculis nunc sed augue lacus viverra vitae. Neque laoreet suspendisse interdum consectetur. Vivamus at augue eget arcu dictum varius. At elementum eu facilisis sed odio. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. At in tellus integer feugiat scelerisque. Dui sapien eget mi proin sed libero. Nisl suscipit adipiscing bibendum est ultricies integer quis. At varius vel pharetra vel turpis nunc eget lorem dolor. Mauris commodo quis imperdiet massa. Bibendum ut tristique et egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Nullam non nisi est sit amet facilisis magna etiam tempor. Sodales neque sodales ut etiam. Enim nunc faucibus a pellentesque. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Placerat in egestas erat imperdiet.\r\n\r\nIpsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ut eu sem integer vitae justo eget magna fermentum. Urna neque viverra justo nec ultrices. Tempus urna et pharetra pharetra massa. Non consectetur a erat nam at. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Semper eget duis at tellus at. Varius vel pharetra vel turpis nunc. Magna etiam tempor orci eu lobortis. Venenatis a condimentum vitae sapien pellentesque habitant. Id consectetur purus ut faucibus pulvinar elementum integer enim. Cursus euismod quis viverra nibh.', '[\r\n  {\r\n    \"question\": \"What is the capital of France?\",\r\n    \"answers\": [\r\n      \"Paris\",\r\n      \"Berlin\",\r\n      \"London\",\r\n      \"Madrid\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"What is the tallest mountain in the world?\",\r\n    \"answers\": [\r\n      \"Mount Kilimanjaro\",\r\n      \"Mount Everest\",\r\n      \"Mount Fuji\",\r\n      \"Mount McKinley\"\r\n    ],\r\n    \"correctAnswerIndex\": 1\r\n  },\r\n  {\r\n    \"question\": \"What is the largest country in the world?\",\r\n    \"answers\": [\r\n      \"Canada\",\r\n      \"Russia\",\r\n      \"China\",\r\n      \"Brazil\"\r\n    ],\r\n    \"correctAnswerIndex\": 1\r\n  }\r\n]'),
(3, 'Test Title 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem.', 'Science', 'hzGmbwS_Drs', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"What is the smallest unit of life?\",\r\n    \"answers\": [\r\n      \"Atom\",\r\n      \"Molecule\",\r\n      \"Cell\",\r\n      \"Organism\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"What is the largest organ in the human body?\",\r\n    \"answers\": [\r\n      \"Heart\",\r\n      \"Brain\",\r\n      \"Skin\",\r\n      \"Liver\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"What is the formula for water?\",\r\n    \"answers\": [\r\n      \"CO2\",\r\n      \"H2O\",\r\n      \"NaCl\",\r\n      \"NH3\"\r\n    ],\r\n    \"correctAnswerIndex\": 1\r\n  }\r\n]\r\n'),
(4, 'Test Title 4', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(5, 'Test Title 5', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(6, 'Test Title 6', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(7, 'Test Title 7', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(8, 'Test Title 8', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(9, 'Test Title 9', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(10, 'Test Title 10', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(11, 'Test Title 11', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n'),
(12, 'Test Title 12', 'Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id.', 'Computer Literacy', 'v_oZ9Pe0yRg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada turpis vitae malesuada laoreet. Donec bibendum vehicula ultricies. Aenean vel ultricies lorem. Morbi porttitor neque vitae auctor mattis. Nulla maximus libero at nibh condimentum porta. Fusce at tellus ullamcorper, egestas justo id, eleifend elit. Proin varius nisl felis, a cursus orci condimentum ac. Nam et diam maximus, blandit quam a, pellentesque purus.', '[\r\n  {\r\n    \"question\": \"Who directed the movie \'Jaws\'?\",\r\n    \"answers\": [\r\n      \"Steven Spielberg\",\r\n      \"Martin Scorsese\",\r\n      \"Alfred Hitchcock\",\r\n      \"Quentin Tarantino\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  },\r\n  {\r\n    \"question\": \"Which movie won the Best Picture at the 2020 Oscars?\",\r\n    \"answers\": [\r\n      \"The Irishman\",\r\n      \"Marriage Story\",\r\n      \"Parasite\",\r\n      \"Joker\"\r\n    ],\r\n    \"correctAnswerIndex\": 2\r\n  },\r\n  {\r\n    \"question\": \"Who played the role of Tony Stark in the Marvel Cinematic Universe?\",\r\n    \"answers\": [\r\n      \"Robert Downey Jr.\",\r\n      \"Chris Evans\",\r\n      \"Tom Holland\",\r\n      \"Mark Ruffalo\"\r\n    ],\r\n    \"correctAnswerIndex\": 0\r\n  }\r\n]\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `assigned_articles`
--

CREATE TABLE `assigned_articles` (
  `userId` int(11) NOT NULL,
  `articleId` int(11) NOT NULL,
  `due_date` date DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assigned_articles`
--

INSERT INTO `assigned_articles` (`userId`, `articleId`, `due_date`, `completed`) VALUES
(4, 1, '2023-03-23', 0),
(3, 1, '2023-03-23', 1),
(1, 1, '2023-03-23', 1),
(1, 2, '2023-03-24', 0),
(3, 2, '2023-03-24', 0),
(4, 2, '2023-03-24', 0),
(9, 2, '2023-03-24', 0),
(9, 1, '2023-03-24', 0),
(1, 3, '2023-04-30', 0),
(3, 3, '2023-04-30', 0),
(4, 3, '2023-04-30', 0),
(9, 3, '2023-04-30', 0),
(1, 4, '2023-05-07', 0),
(3, 4, '2023-04-30', 0),
(4, 4, '2023-04-30', 0),
(9, 4, '2023-04-30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `job_title` varchar(64) NOT NULL DEFAULT 'unassigned'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `email`, `username`, `password`, `job_title`) VALUES
(1, 'test1@email.com', 'testusername1', 'testpassword1', 'intern'),
(2, 'mrtestuser@gmail.com', 'mrtestuser123', 'mypassword45', 'full-time'),
(3, 'testtest@test.com', 'testtest', 'testtest2', 'intern'),
(4, 'jwtest@gmail.com', 'jwtest', 'test4', 'intern'),
(5, 'test@gmail.com', 'tesyuser', 'testpassword', 'full-time'),
(6, 'j.ward26@uni.brighton.ac.uk', 'j.ward26', 'password', 'admin'),
(9, 'newuser1@gmai.com', 'newuser1', 'password2', 'intern'),
(10, 'newuser2@gmail.com', 'newuser2', 'password1', 'unassigned'),
(15, 'jakewardspam@gmail.com', 'jwspam', 'spam1', 'unassigned'),
(16, 'newuser3@gmail.com', 'newuser3', 'Passw@rd3', 'unassigned'),
(18, 'jakewardspam1@gmail.com', 'jwspam1', 'Sp@m11', 'unassigned');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`articleId`);

--
-- Indexes for table `assigned_articles`
--
ALTER TABLE `assigned_articles`
  ADD PRIMARY KEY (`userId`,`articleId`),
  ADD KEY `articleId` (`articleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `articleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
