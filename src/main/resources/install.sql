/*
Navicat MySQL Data Transfer

Source Server         : local_mysql
Source Server Version : 50624
Source Host           : 192.168.3.13:3306
Source Database       : fangzhengju

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2017-03-06 12:11:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bill
-- ----------------------------
DROP TABLE IF EXISTS `bill`;
CREATE TABLE `bill` (
  `uuid` varchar(64) NOT NULL,
  `duty_uuid` varchar(64) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `type` varchar(5) NOT NULL COMMENT '0/1/2: 上分/下分/售卖',
  `pay_type` varchar(5) NOT NULL COMMENT '1/2/3: 现金/微信/支付宝',
  `comment` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_user_uuid` varchar(64) DEFAULT NULL,
  `update_user_uuid` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bill
-- ----------------------------

-- ----------------------------
-- Table structure for duty
-- ----------------------------
DROP TABLE IF EXISTS `duty`;
CREATE TABLE `duty` (
  `uuid` varchar(64) NOT NULL,
  `shop_uuid` varchar(64) DEFAULT NULL COMMENT '''-1'': 系统班次',
  `active` varchar(5) DEFAULT NULL COMMENT '0/1: 结束/进行中',
  `amount_cash` decimal(10,0) DEFAULT NULL,
  `amount_wx` decimal(10,0) DEFAULT NULL,
  `amount_zfb` decimal(10,0) DEFAULT NULL,
  `amount_card` decimal(10,0) DEFAULT NULL,
  `amount_pos` decimal(10,0) DEFAULT NULL,
  `profit` decimal(10,0) DEFAULT NULL,
  `card1_count` decimal(10,0) DEFAULT NULL,
  `card5_count` decimal(10,0) DEFAULT NULL,
  `card10_count` decimal(10,0) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `owner_uuid` varchar(64) DEFAULT NULL,
  `manager_uuid` varchar(64) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `create_user_uuid` varchar(64) NOT NULL,
  `update_user_uuid` varchar(64) NOT NULL,
  `current_amount_cash` decimal(10,0) DEFAULT NULL,
  `current_amount_wx` decimal(10,0) DEFAULT NULL,
  `current_amount_zfb` decimal(10,0) DEFAULT NULL,
  `current_amount_card` decimal(10,0) DEFAULT NULL,
  `current_amount_pos` decimal(10,0) DEFAULT NULL,
  `up_amount` decimal(10,0) DEFAULT NULL,
  `down_amount` decimal(10,0) DEFAULT NULL,
  `sale_amount` decimal(10,0) DEFAULT NULL,
  `pay_amount` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of duty
-- ----------------------------
INSERT INTO `duty` VALUES ('sys-internal-duty-uuid', '1', '-1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2017-03-06 10:40:26', '2017-03-06 10:40:41', null, null, '2017-03-06 10:40:16', '2017-03-06 12:05:56', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `uuid` varchar(64) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `amount_cash` decimal(10,0) DEFAULT NULL,
  `amount_wx` decimal(10,0) DEFAULT NULL,
  `amount_zfb` decimal(10,0) DEFAULT NULL,
  `amount_card` decimal(10,0) DEFAULT NULL,
  `amount_pos` decimal(10,0) DEFAULT NULL,
  `current_amount_cash` decimal(10,0) DEFAULT NULL,
  `current_amount_wx` decimal(10,0) DEFAULT NULL,
  `current_amount_zfb` decimal(10,0) DEFAULT NULL,
  `current_amount_card` decimal(10,0) DEFAULT NULL,
  `current_amount_pos` decimal(10,0) DEFAULT NULL,
  `up_amount` decimal(10,0) DEFAULT NULL,
  `down_amount` decimal(10,0) DEFAULT NULL,
  `sale_amount` decimal(10,0) DEFAULT NULL,
  `pay_amount` decimal(10,0) DEFAULT NULL,
  `card1_count` decimal(10,0) DEFAULT NULL COMMENT '1分卡数量',
  `card5_count` decimal(10,0) DEFAULT NULL COMMENT '5分卡数量',
  `card10_count` decimal(10,0) DEFAULT NULL COMMENT '10分卡数量',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_user_uuid` varchar(255) DEFAULT NULL,
  `update_user_uuid` varchar(255) DEFAULT NULL,
  `profit` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '方正居', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2017-03-05 13:33:10', '2017-03-06 12:05:56', '1', '1', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uuid` varchar(64) NOT NULL,
  `name` varchar(150) NOT NULL,
  `nick_name` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_user_uuid` varchar(64) DEFAULT NULL,
  `update_user_uuid` varchar(64) DEFAULT NULL,
  `role` varchar(5) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '管理员', '124b188b837105a212485079d407408b85cf20c0', '2017-03-09 16:00:38', '2017-03-22 16:00:41', '1', '1', '1');
