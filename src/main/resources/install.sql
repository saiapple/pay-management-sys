/*
Navicat MySQL Data Transfer

Source Server         : local_mysql
Source Server Version : 50624
Source Host           : 192.168.0.124:3306
Source Database       : fangzhengju

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-03-02 14:59:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for duty
-- ----------------------------
DROP TABLE IF EXISTS `duty`;
CREATE TABLE `duty` (
  `uuid` varchar(64) NOT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `ownerUuid` varchar(64) NOT NULL,
  `managerUuid` varchar(64) DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `updateTime` datetime NOT NULL,
  `createUserUuid` varchar(64) NOT NULL,
  `updateUserUuid` varchar(64) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `uuid` varchar(64) NOT NULL,
  `dutyUuid` varchar(64) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `type` varchar(5) NOT NULL COMMENT '0/1/2: 上分/下分/售卖',
  `payType` varchar(5) NOT NULL COMMENT '0/1/2: 现金/微信/支付宝',
  `comment` varchar(500) DEFAULT NULL COMMENT '备注',
  `createTime` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `createUserUuid` varchar(64) DEFAULT NULL,
  `updateUserUuid` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uuid` varchar(64) NOT NULL,
  `name` varchar(150) NOT NULL,
  `nickName` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `createUserUuid` varchar(64) DEFAULT NULL,
  `updateUserUuid` varchar(64) DEFAULT NULL,
  `role` varchar(5) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
