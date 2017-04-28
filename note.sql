/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50621
 Source Host           : localhost
 Source Database       : note

 Target Server Type    : MySQL
 Target Server Version : 50621
 File Encoding         : utf-8

 Date: 04/28/2017 14:56:36 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `notes`
-- ----------------------------
DROP TABLE IF EXISTS `notes`;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `content` text NOT NULL,
  `create_time` datetime NOT NULL,
  `modify_time` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `notes`
-- ----------------------------
BEGIN;
INSERT INTO `notes` VALUES ('10', '213', '<p >123</p>', '2017-04-26 15:46:27', '2017-04-26 16:10:03', '1'), ('11', '222', '<p >2222</p>', '2017-04-26 15:53:58', '2017-04-26 16:10:03', '1'), ('12', '123123', '<p >123123213</p>', '2017-04-26 15:54:35', '2017-04-26 16:10:03', '1'), ('13', '123kkk111', '<p ><strong>dfsaasdfasdfasdfsadf</strong></p>\n<p ><ins>123123asdf</ins></p>\n<p ><code>asdfdsfasdfsadf</code></p>\n<p ><code>sdfdsfdsfdfdfdfdfasd</code></p>', '2017-04-26 15:55:41', '2017-04-27 09:14:17', '1'), ('14', '12', '<p >123</p>', '2017-04-26 15:55:55', '2017-04-26 16:10:03', '1'), ('16', '123123', '<p >asdf</p>', '2017-04-26 16:04:12', '2017-04-26 16:10:03', '1'), ('17', '22222', '<p >asdfhjggjg</p>', '2017-04-26 16:06:35', '2017-04-26 19:52:01', '1'), ('19', 'hahha', '<p ><br></p>\n<p >暗室逢灯</p>\n<p ><br></p>\n<p >asd飞</p>\n<p >ASF</p>\n<p >大师傅</p>\n<p >asd飞撒地方</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p ><br></p>\n<p >撒地方</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p >asd飞</p>\n<p ><br></p>\n<p >asdfasdfsdfasdfasdfasdfhaoa</p>\n<p >asd飞第三方撒地方</p>\n<p >撒地方</p>', '2017-04-26 16:14:09', '2017-04-26 16:17:42', '2'), ('20', '111', '<p >12213</p>', '2017-04-26 16:17:48', '2017-04-26 16:10:03', '2'), ('21', '123', '<p >123123</p>', '2017-04-26 16:17:57', '2017-04-26 16:10:03', '2'), ('22', 'kjkj', '<p >kjkjkj</p>', '2017-04-26 19:52:49', '2017-04-26 16:10:03', '1');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `pwd` varchar(64) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'test', '6d333a000c02b7710385dd6ebb6d1037d572d8b413fb22b8f56a13950e7945cb', '1'), ('2', 'zj', '6d333a000c02b7710385dd6ebb6d1037d572d8b413fb22b8f56a13950e7945cb', '1'), ('3', 'tyq', '6d333a000c02b7710385dd6ebb6d1037d572d8b413fb22b8f56a13950e7945cb', '1'), ('4', 'aaa', '6d333a000c02b7710385dd6ebb6d1037d572d8b413fb22b8f56a13950e7945cb', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
