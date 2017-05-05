/*
Navicat MySQL Data Transfer

Source Server         : localhsot
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : koa

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-05 12:00:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhengqiangzi', '30', '男', 'china');
INSERT INTO `user` VALUES ('3', 'wuhan', '33', '男', 'china');
INSERT INTO `user` VALUES ('4', 'adi', '29', '女', 'usa');
INSERT INTO `user` VALUES ('5', 'hicl', '38', '女', 'uk');
INSERT INTO `user` VALUES ('6', 'luic', '77', '男', 'korea');
INSERT INTO `user` VALUES ('7', 'tata', '33', '女', 'japan');
INSERT INTO `user` VALUES ('8', 'yuu', '32', '女', 'russian');
