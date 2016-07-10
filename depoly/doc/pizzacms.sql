/*
Navicat MySQL Data Transfer

Source Server         : 本地测试
Source Server Version : 50538
Source Host           : localhost:3306
Source Database       : pizzacms

Target Server Type    : MYSQL
Target Server Version : 50538
File Encoding         : 65001

Date: 2016-07-11 01:06:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pz_action
-- ----------------------------
DROP TABLE IF EXISTS `pz_action`;
CREATE TABLE `pz_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '动作名称',
  `action` varchar(255) NOT NULL DEFAULT '' COMMENT '动作编码，英文或数字',
  `menuid` int(11) DEFAULT '0' COMMENT '栏目模块id',
  `state` int(255) DEFAULT '0' COMMENT '动作状态,0有效',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_action
-- ----------------------------

-- ----------------------------
-- Table structure for pz_actionmenu
-- ----------------------------
DROP TABLE IF EXISTS `pz_actionmenu`;
CREATE TABLE `pz_actionmenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '栏目模块名称',
  `link` varchar(255) NOT NULL DEFAULT '' COMMENT '栏目模块编码',
  `state` int(255) DEFAULT '0' COMMENT '栏目模块状态',
  `pid` int(11) DEFAULT '0' COMMENT '父节点',
  `icon` varchar(50) DEFAULT '' COMMENT '图标',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_actionmenu
-- ----------------------------
INSERT INTO `pz_actionmenu` VALUES ('1', 'name', 'link', '1', '1', 'icon');
INSERT INTO `pz_actionmenu` VALUES ('2', 'name', 'link', '1', '1', 'icon');

-- ----------------------------
-- Table structure for pz_actionmodel
-- ----------------------------
DROP TABLE IF EXISTS `pz_actionmodel`;
CREATE TABLE `pz_actionmodel` (
  `actionModelId` int(11) NOT NULL AUTO_INCREMENT,
  `actionModelName` varchar(255) NOT NULL DEFAULT '' COMMENT '栏目模块名称',
  `actionModel` varchar(255) NOT NULL DEFAULT '' COMMENT '栏目模块编码',
  `actionModelState` int(255) DEFAULT '0' COMMENT '栏目模块状态',
  PRIMARY KEY (`actionModelId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_actionmodel
-- ----------------------------

-- ----------------------------
-- Table structure for pz_actionrole
-- ----------------------------
DROP TABLE IF EXISTS `pz_actionrole`;
CREATE TABLE `pz_actionrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleid` int(11) DEFAULT '0' COMMENT '角色id',
  `action` varchar(255) DEFAULT '' COMMENT '权限名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_actionrole
-- ----------------------------

-- ----------------------------
-- Table structure for pz_article
-- ----------------------------
DROP TABLE IF EXISTS `pz_article`;
CREATE TABLE `pz_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT '',
  `timg` varchar(100) DEFAULT '',
  `content` text,
  `brief` varchar(600) DEFAULT '',
  `nodeid` int(11) DEFAULT '0',
  `count` int(11) DEFAULT '0',
  `reco` int(11) DEFAULT '0',
  `uid` int(11) NOT NULL DEFAULT '0',
  `pass` int(11) DEFAULT '0',
  `source` varchar(100) DEFAULT '',
  `tags` varchar(100) DEFAULT '',
  `link` varchar(100) DEFAULT '',
  `comment` int(11) DEFAULT '0',
  `state` int(11) DEFAULT '0',
  `createtime` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id` (`id`),
  KEY `title` (`title`,`nodeid`,`uid`,`pass`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_article
-- ----------------------------
INSERT INTO `pz_article` VALUES ('7', '烟台副市长转任银行后私分7000万 举报者遭威胁', '', '<span style=\"color:#404040;font-family:&quot;font-size:18px;line-height:32px;background-color:#FFFFFF;\">7月10日，恒丰银行高管向《中国经营报》提供证据显示，自其向媒体爆料以来，即受到死亡威胁。“遗憾的是，媒体报道两个月，没有任何主管、监管单位公开表态。”</span>', '', '8', '0', '0', '1', '1', '', '', '/content/7', '0', '0', '1468168558');
INSERT INTO `pz_article` VALUES ('10', '烟台副市长转任银行后私分7000万 举报者遭威胁', '', '', '', '3', '0', '0', '1', '1', '', '', '/content_photo/10', '0', '0', '1468169100');

-- ----------------------------
-- Table structure for pz_block
-- ----------------------------
DROP TABLE IF EXISTS `pz_block`;
CREATE TABLE `pz_block` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_block
-- ----------------------------
INSERT INTO `pz_block` VALUES ('2', 'title11', 'content');
INSERT INTO `pz_block` VALUES ('8', 'title', 'content');
INSERT INTO `pz_block` VALUES ('3', 'title', 'content');
INSERT INTO `pz_block` VALUES ('4', 'title22', 'content');
INSERT INTO `pz_block` VALUES ('5', 'title', 'content');
INSERT INTO `pz_block` VALUES ('6', 'title', 'content');
INSERT INTO `pz_block` VALUES ('7', 'title', 'content');
INSERT INTO `pz_block` VALUES ('48', 'title', 'content');
INSERT INTO `pz_block` VALUES ('47', 'title', 'content');
INSERT INTO `pz_block` VALUES ('49', 'title', 'content');
INSERT INTO `pz_block` VALUES ('50', 'title', 'content');
INSERT INTO `pz_block` VALUES ('51', 'title', 'content');

-- ----------------------------
-- Table structure for pz_comment
-- ----------------------------
DROP TABLE IF EXISTS `pz_comment`;
CREATE TABLE `pz_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleid` int(11) DEFAULT '0' COMMENT '文章id',
  `addtime` int(11) DEFAULT '0' COMMENT '添加时间',
  `content` varchar(1000) DEFAULT '' COMMENT '评论内容',
  `uid` int(11) DEFAULT '0' COMMENT '用户id',
  `username` varchar(30) DEFAULT '' COMMENT '用户昵称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=259 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_comment
-- ----------------------------
INSERT INTO `pz_comment` VALUES ('17', '2', '1', 'content17', '1', 'username');
INSERT INTO `pz_comment` VALUES ('19', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('20', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('21', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('22', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('23', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('24', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('25', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('26', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('27', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('28', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('29', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('30', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('31', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('32', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('33', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('34', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('35', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('36', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('37', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('38', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('39', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('40', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('41', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('42', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('43', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('44', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('45', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('46', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('47', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('48', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('49', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('50', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('51', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('52', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('53', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('54', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('55', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('56', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('57', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('58', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('59', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('60', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('61', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('62', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('63', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('64', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('65', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('66', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('67', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('68', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('69', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('70', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('71', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('72', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('73', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('74', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('75', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('76', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('77', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('78', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('79', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('80', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('81', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('82', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('83', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('84', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('85', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('86', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('87', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('88', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('89', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('90', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('91', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('92', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('93', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('94', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('95', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('96', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('97', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('98', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('99', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('100', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('101', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('102', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('103', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('104', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('105', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('106', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('107', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('108', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('109', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('110', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('111', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('112', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('113', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('114', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('115', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('116', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('117', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('118', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('119', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('120', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('121', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('122', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('123', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('124', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('125', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('126', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('127', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('128', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('129', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('130', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('131', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('132', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('133', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('134', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('135', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('136', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('137', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('138', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('139', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('140', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('141', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('142', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('143', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('144', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('145', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('146', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('147', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('148', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('149', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('150', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('151', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('152', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('153', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('154', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('155', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('156', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('157', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('158', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('159', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('160', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('161', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('162', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('163', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('164', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('165', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('166', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('167', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('168', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('169', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('170', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('171', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('172', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('173', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('174', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('175', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('176', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('177', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('178', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('179', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('180', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('181', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('182', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('183', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('184', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('185', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('186', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('187', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('188', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('189', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('190', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('191', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('192', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('193', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('194', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('195', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('196', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('197', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('198', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('199', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('200', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('201', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('202', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('203', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('204', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('205', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('206', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('207', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('208', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('209', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('210', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('211', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('212', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('213', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('214', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('215', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('216', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('217', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('218', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('219', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('220', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('221', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('222', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('223', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('224', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('225', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('226', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('227', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('228', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('229', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('230', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('231', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('232', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('233', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('234', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('235', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('236', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('237', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('238', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('239', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('240', '2', '1', 'content', '1', 'username');
INSERT INTO `pz_comment` VALUES ('241', '2', '1', 'content', '1', 'username');

-- ----------------------------
-- Table structure for pz_goods
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods`;
CREATE TABLE `pz_goods` (
  `goods_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `cat_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '商品所属商品分类id',
  `goods_sn` varchar(60) NOT NULL DEFAULT '' COMMENT '商品的唯一货号',
  `goods_name` varchar(120) NOT NULL DEFAULT '' COMMENT '商品的名称',
  `goods_name_style` varchar(60) NOT NULL DEFAULT '+' COMMENT '商品名称显示的样式；包括颜色和字体样式；格式如#ff00ff+strong',
  `click_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品点击数',
  `brand_id` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '品牌id',
  `provider_name` varchar(100) NOT NULL DEFAULT '' COMMENT '供货人的名称，程序还没实现该功能',
  `goods_number` mediumint(8) unsigned NOT NULL DEFAULT '0' COMMENT '商品库存数量',
  `goods_weight` decimal(10,3) unsigned NOT NULL DEFAULT '0.000' COMMENT '商品的重量，以千克为单位',
  `market_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '市场售价',
  `virtual_sales` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '虚拟销量',
  `shop_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '本店售价',
  `promote_price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '促销价格',
  `promote_start_date` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '促销价格开始日期',
  `promote_end_date` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '促销价格结束日期',
  `warn_number` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '商品报警数量',
  `keywords` varchar(255) NOT NULL DEFAULT '',
  `goods_brief` varchar(255) NOT NULL DEFAULT '',
  `goods_desc` text NOT NULL COMMENT '商品的详细描述',
  `goods_thumb` varchar(255) NOT NULL DEFAULT '' COMMENT '商品在前台显示的微缩图片，如在分类筛选时显示的小图片',
  `goods_img` varchar(255) NOT NULL DEFAULT '' COMMENT '商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片',
  `original_img` varchar(255) NOT NULL DEFAULT '' COMMENT '上传的商品的原始图片',
  `is_real` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '是否是实物，1，是；0，否；比如虚拟卡就为0，不是实物',
  `extension_code` varchar(30) NOT NULL DEFAULT '' COMMENT '商品的扩展属性，比如像虚拟卡',
  `is_on_sale` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '该商品是否开放销售，1，是；0，否',
  `is_alone_sale` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '是否能单独销售，1，是；0，否；如果不能单独销售，则只能作为某商品的配件或者赠品销售',
  `is_shipping` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '是否免运费,0正常，1免费',
  `integral` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '购买该商品可以使用的积分数量，程序没有实现该功能',
  `add_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '商品的添加时间',
  `sort_order` smallint(4) unsigned NOT NULL DEFAULT '0' COMMENT '应该是商品的显示顺序，不过该版程序中没实现该功能',
  `is_delete` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '商品是否已经删除，0，否；1，已删除',
  `is_best` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否是精品；0，否；1，是',
  `is_new` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否是新品',
  `is_hot` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否热销，0，否；1，是',
  `weight_unit` varchar(10) DEFAULT '' COMMENT '重量单位',
  `is_promote` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否特价促销；0，否；1，是',
  `bonus_type_id` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '购买该商品所能领到的红包类型',
  `last_update` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最近一次更新商品配置的时间',
  `goods_type` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '商品所属类型id，取值表goods_type的cat_id',
  `seller_note` varchar(255) NOT NULL DEFAULT '' COMMENT '商品的商家备注，仅商家可见',
  `give_integral` int(11) NOT NULL DEFAULT '-1' COMMENT '购买该商品时每笔成功交易赠送的积分数量',
  `rank_integral` int(11) NOT NULL DEFAULT '-1' COMMENT '送等级积分数',
  `suppliers_id` smallint(5) unsigned DEFAULT '0' COMMENT '供货商id',
  `is_check` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '供货商商品审核标识',
  PRIMARY KEY (`goods_id`),
  KEY `goods_sn` (`goods_sn`),
  KEY `cat_id` (`cat_id`),
  KEY `last_update` (`last_update`),
  KEY `brand_id` (`brand_id`),
  KEY `goods_weight` (`goods_weight`),
  KEY `promote_end_date` (`promote_end_date`),
  KEY `promote_start_date` (`promote_start_date`),
  KEY `goods_number` (`goods_number`),
  KEY `sort_order` (`sort_order`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goods
-- ----------------------------
INSERT INTO `pz_goods` VALUES ('1', '1', '', '阿萨德', '+', '0', '11', '', '0', '0.000', '150.00', '0', '100.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('2', '1', 'Z6t19_wBQ9UXQAqhTV7NF5dRQTHjU8Mj', '阿萨德1', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('3', '1', 'i71cXS39Rh', '阿萨德1', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('4', '1', 'pcjemyxzmfdfy', '阿萨德1', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('5', '1', 'JITJUMWAGKUOG', 'asd ', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('6', '1', 'JITJUMWAGKUOG', 'asd ', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('7', '1', 'TBSJKWGUD6C_N', 'asd ', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('8', '1', 'ASU1465280386000', 'asd ', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('9', '1', 'ASU1465280494', 'asd ', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('10', '1', 'ASU1465280646', '阿斯达岁的', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('11', '1', 'ASU1465280661', '阿斯达岁的阿萨德', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('12', '1', 'ASU1465280682', '阿斯达岁的阿萨德', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('13', '14', 'ASU1465280932', '爱冕－白18K金钻石戒指', '+', '0', '11', '', '101', '1.000', '150.00', '0', '100.00', '0.00', '0', '0', '1', '关键字3 关键字2 关键字1', '国庆大促，下单再减百分之十', '<p>\n	<br />\n</p>\n<table width=\"900\" border=\"0\">\n	<tbody>\n		<tr>\n			<td>\n				<img src=\"http://imu.zbird.cn/261/88/26188_1\" width=\"900\" height=\"636\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imu.zbird.cn/261/88/26188_4\" width=\"900\" height=\"592\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imp.zbird.cn/261/89/26189_1\" width=\"900\" height=\"1336\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imp.zbird.cn/261/89/26189_4\" width=\"900\" height=\"838\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imu.zbird.cn/261/92/26192_1\" width=\"900\" height=\"694\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imu.zbird.cn/261/92/26192_4\" width=\"900\" height=\"810\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imp.zbird.cn/261/93/26193_1\" width=\"900\" height=\"1372\" alt />\n			</td>\n		</tr>\n		<tr>\n			<td>\n				<img src=\"http://imp.zbird.cn/261/93/26193_4\" width=\"900\" height=\"1122\" alt />\n			</td>\n		</tr>\n	</tbody>\n</table>', '', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '5', '商家备注', '-1', '-1', '0', '0');
INSERT INTO `pz_goods` VALUES ('14', '13', 'ASU1465280932', 'asd asd', '+', '0', '11', '', '0', '0.000', '0.00', '0', '0.00', '0.00', '0', '0', '1', '', '', '', '', '', '', '1', '', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '', '0', '0', '0', '0', '', '-1', '-1', '0', '0');

-- ----------------------------
-- Table structure for pz_goods-del
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods-del`;
CREATE TABLE `pz_goods-del` (
  `goodsid` int(11) NOT NULL AUTO_INCREMENT,
  `catid` smallint(5) DEFAULT '0' COMMENT '商品分类id',
  `goodsn` varchar(60) DEFAULT '' COMMENT '商品货号',
  `name` varchar(120) DEFAULT '' COMMENT '商品名称',
  `nameStyle` varchar(60) DEFAULT '' COMMENT '商品名称显示样式',
  `clickCount` int(10) DEFAULT '0' COMMENT '浏览次数',
  `pinpaiId` smallint(5) DEFAULT '0' COMMENT '品牌ID',
  `providerName` varchar(100) DEFAULT '' COMMENT '供货商名称，程序还没实现该功能',
  `goodsNumber` smallint(5) DEFAULT '0' COMMENT '库存数量',
  `goodWeight` decimal(10,3) DEFAULT '0.000' COMMENT '商品重量,默认单位克',
  `marketPrice` decimal(10,2) DEFAULT '0.00' COMMENT '市场价格',
  `shopPrice` decimal(10,2) DEFAULT '0.00' COMMENT '本店售价',
  `promotePrice` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '促销价格，如果有促销价格，则按照促销价格销售，此价格不再参与会员的折扣计算。',
  `promoteStart` int(11) NOT NULL DEFAULT '0' COMMENT '促销开始日期',
  `promoteEnd` int(11) NOT NULL DEFAULT '0' COMMENT '促销结束日期',
  `warnNumer` tinyint(3) NOT NULL DEFAULT '1' COMMENT '库存警告数量',
  `keywords` varchar(255) NOT NULL DEFAULT '',
  `brief` varchar(255) NOT NULL DEFAULT '',
  `goodDesc` text NOT NULL COMMENT '详细描述',
  `thumb` varchar(255) NOT NULL DEFAULT '' COMMENT '前台显示的微缩图片，如在分类筛选时显示的小图片',
  `goodsImg` varchar(255) NOT NULL DEFAULT '' COMMENT '商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片',
  `original_img` varchar(255) NOT NULL DEFAULT '' COMMENT '商品原始图片地址',
  `isReal` tinyint(3) NOT NULL DEFAULT '1' COMMENT '是否实体商品',
  `extensionCode` varchar(30) NOT NULL DEFAULT '' COMMENT '虚拟商品代码',
  `isOnSale` tinyint(1) NOT NULL DEFAULT '1' COMMENT '能否销售(上架、下架)：1，上架；0，下架；',
  `isAloneSale` tinyint(1) NOT NULL DEFAULT '1' COMMENT '能否单独销售',
  `integral` int(10) NOT NULL DEFAULT '0' COMMENT '商品的积分',
  `addTime` int(10) NOT NULL DEFAULT '0' COMMENT '加入时间',
  `sortOrder` smallint(4) NOT NULL DEFAULT '0' COMMENT '排列顺序',
  `isDelete` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已删除',
  `isBest` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否精品',
  `isNew` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否新品',
  `isHot` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否热销',
  `isPromote` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否特价',
  `bonusTypeId` tinyint(3) NOT NULL DEFAULT '0' COMMENT '红包类型id',
  `suppliersId` smallint(5) NOT NULL DEFAULT '0' COMMENT '供货商id',
  `isCheck` tinyint(1) NOT NULL DEFAULT '0' COMMENT '供货商商品审核标识，0，未审核；1，已审核',
  `lastUpdate` int(10) NOT NULL DEFAULT '0' COMMENT '最后更新时间',
  `goodsType` smallint(5) NOT NULL DEFAULT '0' COMMENT '商品类型ID',
  `sellerNote` varchar(255) NOT NULL DEFAULT '' COMMENT '商家备注',
  `giveIntegral` int(11) NOT NULL DEFAULT '-1' COMMENT '送消费积分数',
  `rankIntegral` int(11) NOT NULL DEFAULT '-1' COMMENT '送等级积分数',
  PRIMARY KEY (`goodsid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='商品数据表';

-- ----------------------------
-- Records of pz_goods-del
-- ----------------------------

-- ----------------------------
-- Table structure for pz_goodstype
-- ----------------------------
DROP TABLE IF EXISTS `pz_goodstype`;
CREATE TABLE `pz_goodstype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `catname` varchar(60) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goodstype
-- ----------------------------
INSERT INTO `pz_goodstype` VALUES ('4', '书');
INSERT INTO `pz_goodstype` VALUES ('5', '音乐');

-- ----------------------------
-- Table structure for pz_goods_attr
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods_attr`;
CREATE TABLE `pz_goods_attr` (
  `goods_attr_id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsid` int(11) DEFAULT '0' COMMENT '商品编号',
  `attrid` smallint(5) DEFAULT '0' COMMENT '属性编号',
  `attrvalue` text COMMENT '属性值',
  `attrprice` int(4) DEFAULT '0' COMMENT '属性价格',
  PRIMARY KEY (`goods_attr_id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goods_attr
-- ----------------------------
INSERT INTO `pz_goods_attr` VALUES ('44', '13', '4', '商品别名', '0');
INSERT INTO `pz_goods_attr` VALUES ('43', '13', '3', '英文片名', '0');
INSERT INTO `pz_goods_attr` VALUES ('42', '13', '2', '中文片名', '0');
INSERT INTO `pz_goods_attr` VALUES ('45', '13', '5', 'DTS', '0');
INSERT INTO `pz_goods_attr` VALUES ('46', '13', '6', '片装数', '0');
INSERT INTO `pz_goods_attr` VALUES ('47', '13', '7', '中国', '0');
INSERT INTO `pz_goods_attr` VALUES ('48', '13', '8', '中文', '0');
INSERT INTO `pz_goods_attr` VALUES ('49', '13', '9', '导演', '0');
INSERT INTO `pz_goods_attr` VALUES ('50', '13', '10', '主唱', '0');
INSERT INTO `pz_goods_attr` VALUES ('51', '13', '11', '流行', '0');
INSERT INTO `pz_goods_attr` VALUES ('52', '13', '12', '10m', '0');
INSERT INTO `pz_goods_attr` VALUES ('53', '13', '13', '有', '0');
INSERT INTO `pz_goods_attr` VALUES ('54', '13', '14', 'SD5456', '0');
INSERT INTO `pz_goods_attr` VALUES ('55', '13', '15', 'WD458', '0');
INSERT INTO `pz_goods_attr` VALUES ('56', '13', '16', '发行公司', '0');
INSERT INTO `pz_goods_attr` VALUES ('57', '13', '17', 'test', '0');
INSERT INTO `pz_goods_attr` VALUES ('58', '13', '18', 'U盘1', '10');
INSERT INTO `pz_goods_attr` VALUES ('59', '13', '18', 'U盘2', '20');
INSERT INTO `pz_goods_attr` VALUES ('60', '13', '18', 'U盘3', '30');
INSERT INTO `pz_goods_attr` VALUES ('61', '13', '18', 'U盘4', '40');

-- ----------------------------
-- Table structure for pz_goods_gallery
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods_gallery`;
CREATE TABLE `pz_goods_gallery` (
  `img_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `goods_id` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `img_url` varchar(255) NOT NULL DEFAULT '' COMMENT '实际图片url',
  `img_desc` varchar(255) NOT NULL DEFAULT '' COMMENT '图片描述',
  `thumb_url` varchar(255) NOT NULL DEFAULT '' COMMENT '缩略图地址',
  `img_original` varchar(255) NOT NULL DEFAULT '' COMMENT '原始图片地址',
  PRIMARY KEY (`img_id`),
  KEY `goods_id` (`goods_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goods_gallery
-- ----------------------------
INSERT INTO `pz_goods_gallery` VALUES ('1', '13', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '', '');
INSERT INTO `pz_goods_gallery` VALUES ('2', '13', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '', '');
INSERT INTO `pz_goods_gallery` VALUES ('3', '13', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '', '');
INSERT INTO `pz_goods_gallery` VALUES ('4', '13', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '', '');
INSERT INTO `pz_goods_gallery` VALUES ('5', '13', '/2016/06/15/v0rajwenn_0xg19ozwbawfspb5ttekhp.jpg', '', '', '');

-- ----------------------------
-- Table structure for pz_goods_node
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods_node`;
CREATE TABLE `pz_goods_node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT '0',
  `name` varchar(50) DEFAULT '',
  `brief` varchar(255) DEFAULT '',
  `nodepath` varchar(255) DEFAULT '',
  `link` varchar(100) DEFAULT '',
  `weight` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goods_node
-- ----------------------------
INSERT INTO `pz_goods_node` VALUES ('1', '0', '首页', '', ',1,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('3', '1', '家用家电', '国际豆腐干豆腐干', ',1,3,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('4', '1', '手机、数码', '', ',1,4,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('5', '1', '图片', '', ',1,5,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('6', '1', '国内', '', ',1,6,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('7', '1', '社会', '', ',1,7,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('8', '1', '聚合', '网易聚合阅读', ',1,8,', '', '1');
INSERT INTO `pz_goods_node` VALUES ('9', '3', '大家电', '测试1测试', ',1,3,9,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('10', '1', '数读', '阿萨德', ',1,10,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('11', '8', '聚合军事', '', ',1,8,11,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('12', '11', '两会观点', '', ',1,8,11,12,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('13', '9', '平板电视', '', ',1,3,9,13,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('14', '9', '空调', '', ',1,3,9,14,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('15', '9', '冰箱', '', ',1,3,9,15,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('16', '9', '洗衣机', '', ',1,3,9,16,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('17', '9', '家庭影院', '', ',1,3,9,17,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('18', '3', '生活电器', '', ',1,3,18,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('19', '18', '电风扇', '', ',1,3,18,19,', '', '0');
INSERT INTO `pz_goods_node` VALUES ('20', '18', '冷风扇', '', ',1,3,18,20,', '', '0');

-- ----------------------------
-- Table structure for pz_goods_type_attr
-- ----------------------------
DROP TABLE IF EXISTS `pz_goods_type_attr`;
CREATE TABLE `pz_goods_type_attr` (
  `attrid` int(11) NOT NULL AUTO_INCREMENT,
  `catid` smallint(5) DEFAULT '0' COMMENT '商品类型编号',
  `attrname` varchar(60) DEFAULT '' COMMENT '属性名称',
  `inputtype` tinyint(1) DEFAULT '0' COMMENT '属性输入方式，0为单行文本框   1为下拉框，2为多行文本',
  `attrtype` tinyint(1) DEFAULT '1' COMMENT '0为属性，1为规格',
  `attrvalue` text COMMENT '属性可选值',
  `weight` tinyint(3) DEFAULT NULL,
  PRIMARY KEY (`attrid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='此表用来维护商品的属性信息';

-- ----------------------------
-- Records of pz_goods_type_attr
-- ----------------------------
INSERT INTO `pz_goods_type_attr` VALUES ('3', '5', '英文片名', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('10', '5', '主唱', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('2', '5', '中文片名', '0', '0', 'ddasdasd\n不知道\nasdasd\nasdasd\nasdasd\nasdasd', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('11', '5', '所属类别', '1', '0', '古典\n流行\n摇滚\n乡村\n民谣\n爵士\n蓝调\n电子\n舞曲 \n国乐\n民族\n怀旧\n经典\n人声\n合唱\n发烧\n试音\n儿童\n胎教\n轻音乐\n世界音乐\n庆典音乐\n影视音乐\n新世纪音乐\n大自然音乐', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('4', '5', '商品别名', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('5', '5', '介质/格式', '1', '0', 'HDCD\nDTS\nDVD\nDVD9\nVCD\nCD\nTAPE\nLP', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('6', '5', '片装数', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('7', '5', '国家地区', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('8', '5', '语种', '1', '0', '中文\n英文\n法文\n西班牙文', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('9', '5', '导演/指挥', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('12', '5', '长度', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('13', '5', '歌词', '1', '0', '有\n无', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('14', '5', '碟片代码', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('15', '5', 'ISRC码', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('16', '5', '发行公司', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('17', '5', 'test', '0', '0', '', '0');
INSERT INTO `pz_goods_type_attr` VALUES ('18', '5', '邮寄方式', '1', '1', 'U盘1\nU盘2\nU盘3\nU盘4', '0');

-- ----------------------------
-- Table structure for pz_goodtree
-- ----------------------------
DROP TABLE IF EXISTS `pz_goodtree`;
CREATE TABLE `pz_goodtree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT '0' COMMENT '父节点id',
  `name` varchar(50) DEFAULT '' COMMENT '节点名称',
  `brief` varchar(255) DEFAULT '' COMMENT '描述',
  `nodepath` varchar(255) DEFAULT '',
  `link` varchar(100) DEFAULT '' COMMENT '自定义连接地址',
  `weight` int(11) DEFAULT '0' COMMENT '权重',
  `display` int(255) DEFAULT '0' COMMENT '是否显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_goodtree
-- ----------------------------
INSERT INTO `pz_goodtree` VALUES ('1', '0', '首页', '', ',1,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('3', '1', '国际', '国际豆腐干豆腐干', ',1,3,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('4', '1', '排行', '', ',1,4,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('5', '1', '图片', '', ',1,5,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('6', '1', '国内', '', ',1,6,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('7', '1', '社会', '', ',1,7,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('8', '1', '聚合', '网易聚合阅读', ',1,8,', '', '1', '0');
INSERT INTO `pz_goodtree` VALUES ('9', '3', '国际评论', '测试1测试', ',1,3,9,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('10', '1', '数读', '', ',1,10,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('11', '8', '聚合军事', '', ',1,8,11,', '', '0', '0');
INSERT INTO `pz_goodtree` VALUES ('12', '11', '两会观点', '', ',1,8,11,12,', '', '0', '0');

-- ----------------------------
-- Table structure for pz_guestbook
-- ----------------------------
DROP TABLE IF EXISTS `pz_guestbook`;
CREATE TABLE `pz_guestbook` (
  `gbid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT '0' COMMENT '用户ID',
  `des` varchar(2000) CHARACTER SET utf8 DEFAULT '' COMMENT '留言内容',
  `pgbid` int(11) DEFAULT '0' COMMENT '父节点id',
  `username` varchar(30) CHARACTER SET utf8 DEFAULT '' COMMENT '用户名',
  `brief` varchar(2000) CHARACTER SET utf8 DEFAULT '' COMMENT '简介',
  `pass` int(2) DEFAULT '0' COMMENT '是否审核，0未审核，1审核',
  `createtime` int(10) DEFAULT '0' COMMENT '添加时间',
  PRIMARY KEY (`gbid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of pz_guestbook
-- ----------------------------
INSERT INTO `pz_guestbook` VALUES ('1', '0', '国台办29日上午举行新闻发布会，发言人安峰山对两岸联系沟通机制停摆一事做了说明。安峰山表示，台湾新执政当局迄今未承认“九二共识”、认同其核心意涵，动摇了两岸互动的政治基础，导致了国台办与陆委会的联系沟通机制、海协会与海基会的协商谈判机制的停摆，责任完全在台湾一方。', '0', '亚历山大安布罗休', '亚历山大安布罗休$15537172114$huabinglan@163.com$河南省郑州市管城区', '1', '1467184181');
INSERT INTO `pz_guestbook` VALUES ('2', '0', '国台办29日上午举行新闻发布会，发言人安峰山对两岸联系沟通机制停摆一事做了说明。安峰山表示，台湾新执政当局迄今未承认“九二共识”、认同其核心意涵，动摇了两岸互动的政治基础，导致了国台办与陆委会的联系沟通机制、海协会与海基会的协商谈判机制的停摆，责任完全在台湾一方。', '0', '亚历山大安布罗休', '亚历山大安布罗休$15537172114$huabinglan@163.com$河南省郑州市管城区', '1', '1467184181');
INSERT INTO `pz_guestbook` VALUES ('3', '0', '国台办29日上午举行新闻发布会，发言人安峰山对两岸联系沟通机制停摆一事做了说明。安峰山表示，台湾新执政当局迄今未承认“九二共识”、认同其核心意涵，动摇了两岸互动的政治基础，导致了国台办与陆委会的联系沟通机制、海协会与海基会的协商谈判机制的停摆，责任完全在台湾一方。', '0', '亚历山大安布罗休', '亚历山大安布罗休$15537172114$huabinglan@163.com$河南省郑州市管城区', '1', '1467184181');
INSERT INTO `pz_guestbook` VALUES ('4', '0', '国台办29日上午举行新闻发布会，发言人安峰山对两岸联系沟通机制停摆一事做了说明。安峰山表示，台湾新执政当局迄今未承认“九二共识”、认同其核心意涵，动摇了两岸互动的政治基础，导致了国台办与陆委会的联系沟通机制、海协会与海基会的协商谈判机制的停摆，责任完全在台湾一方。', '0', '亚历山大安布罗休', '亚历山大安布罗休$15537172114$huabinglan@163.com$河南省郑州市管城区', '1', '1467184181');
INSERT INTO `pz_guestbook` VALUES ('5', '1', 'asdasdasd', '0', 'asd', '', '1', '1467184181');

-- ----------------------------
-- Table structure for pz_node
-- ----------------------------
DROP TABLE IF EXISTS `pz_node`;
CREATE TABLE `pz_node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT '0',
  `name` varchar(50) DEFAULT '',
  `brief` text,
  `nodepath` varchar(255) DEFAULT '',
  `link` varchar(100) DEFAULT '',
  `weight` int(11) DEFAULT '0',
  `article_type` varchar(20) DEFAULT '' COMMENT '文章类型',
  `keyword` varchar(255) DEFAULT '' COMMENT 'seo的关键字',
  `seodes` varchar(500) DEFAULT '' COMMENT 'seo的描述',
  PRIMARY KEY (`id`),
  KEY `id` (`id`) USING BTREE,
  KEY `nodepath` (`nodepath`),
  KEY `pid` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_node
-- ----------------------------
INSERT INTO `pz_node` VALUES ('1', '0', '网站节点', '', ',1,', '/', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('3', '1', '国际', '国际豆腐干豆腐干', ',1,3,', '/guoji_3m20', '0', 'photo', 'dd asd ', '关键字关键字关键字');
INSERT INTO `pz_node` VALUES ('4', '1', '排行', '', ',1,4,', '/paihang_4', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('5', '1', '图片', '', ',1,5,', '/tupian_5', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('6', '1', '国内', '', ',1,6,', '/guonei_6', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('7', '1', '社会', '', ',1,7,', '/shehui_7', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('8', '1', '聚合', '网易聚合阅读', ',1,8,', '/juhe_8', '1', null, '', '');
INSERT INTO `pz_node` VALUES ('9', '3', '国际评论', '测试1测试', ',1,3,9,', '/guojipinglun_9', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('10', '1', '数读', '', ',1,10,', '/shudu_10', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('11', '8', '聚合军事', '', ',1,8,11,', '/juhejunshi_11', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('12', '11', '两会观点', '', ',1,8,11,12,', '/lianghuiguandian_11', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('15', '3', '媒体', '', ',1,3,15,', '/meiti_15', '0', null, '', '');
INSERT INTO `pz_node` VALUES ('16', '1', '家居', '', ',1,16,', '/jiaju_16', '0', null, '', '');

-- ----------------------------
-- Table structure for pz_pinpai
-- ----------------------------
DROP TABLE IF EXISTS `pz_pinpai`;
CREATE TABLE `pz_pinpai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT '' COMMENT '品牌名称',
  `link` varchar(200) CHARACTER SET utf8 DEFAULT '' COMMENT '连接地址',
  `brief` varchar(1000) CHARACTER SET utf8 DEFAULT '' COMMENT '描述',
  `weight` int(11) DEFAULT '0' COMMENT '权重',
  `logo` varchar(255) CHARACTER SET latin1 DEFAULT '' COMMENT 'logo',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of pz_pinpai
-- ----------------------------
INSERT INTO `pz_pinpai` VALUES ('11', '樊文花', 'http://www.baidu.com', '樊文花  樊文花', '0', '2016/06/15/wky3x0i3ttwq7awldxhzt65wbot_r68i.jpg');

-- ----------------------------
-- Table structure for pz_role
-- ----------------------------
DROP TABLE IF EXISTS `pz_role`;
CREATE TABLE `pz_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupid` int(11) DEFAULT '0' COMMENT '用户组id',
  `name` varchar(255) DEFAULT '' COMMENT '角色名称',
  `des` varchar(1000) DEFAULT '' COMMENT '角色描述',
  `state` int(255) DEFAULT '0' COMMENT '角色状态',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_role
-- ----------------------------
INSERT INTO `pz_role` VALUES ('3', '3', '主编', '', '0');
INSERT INTO `pz_role` VALUES ('4', '3', '编辑', '', '0');

-- ----------------------------
-- Table structure for pz_rolemenu
-- ----------------------------
DROP TABLE IF EXISTS `pz_rolemenu`;
CREATE TABLE `pz_rolemenu` (
  `id` int(11) NOT NULL,
  `roleid` int(11) NOT NULL DEFAULT '0' COMMENT '角色id',
  `menuid` int(11) DEFAULT '0' COMMENT '菜单id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_rolemenu
-- ----------------------------

-- ----------------------------
-- Table structure for pz_user
-- ----------------------------
DROP TABLE IF EXISTS `pz_user`;
CREATE TABLE `pz_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '',
  `nickname` varchar(30) DEFAULT '' COMMENT '昵称',
  `password` varchar(100) NOT NULL DEFAULT '',
  `state` int(255) NOT NULL DEFAULT '0' COMMENT '状态',
  `salt` varchar(10) NOT NULL DEFAULT 'dx#$59',
  `userGroupId` int(11) DEFAULT '0' COMMENT '用户组id',
  `roleId` int(11) DEFAULT '0' COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_user
-- ----------------------------
INSERT INTO `pz_user` VALUES ('1', 'root', '左盐', 'bb2cafa845f2b405d8ccbd6e00b87f88', '0', '14FDUoW0(6', '0', '0');

-- ----------------------------
-- Table structure for pz_usergroup
-- ----------------------------
DROP TABLE IF EXISTS `pz_usergroup`;
CREATE TABLE `pz_usergroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '' COMMENT '用户组名称',
  `des` varchar(1000) DEFAULT '' COMMENT '用户组描述',
  `state` int(4) DEFAULT '0' COMMENT '用户组状态',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_usergroup
-- ----------------------------
INSERT INTO `pz_usergroup` VALUES ('1', '超级管理员', '超级管理员', '0');
INSERT INTO `pz_usergroup` VALUES ('3', '编辑部', '编辑部', '0');

-- ----------------------------
-- Table structure for pz_user_admin
-- ----------------------------
DROP TABLE IF EXISTS `pz_user_admin`;
CREATE TABLE `pz_user_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL DEFAULT '',
  `nickname` varchar(30) DEFAULT '' COMMENT '昵称',
  `password` varchar(100) NOT NULL DEFAULT '',
  `state` int(255) NOT NULL DEFAULT '0' COMMENT '状态',
  `salt` varchar(10) NOT NULL DEFAULT 'dx#$59',
  `userGroupId` int(11) DEFAULT '0' COMMENT '用户组id',
  `roleId` int(11) DEFAULT '0' COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pz_user_admin
-- ----------------------------
INSERT INTO `pz_user_admin` VALUES ('1', 'root', '左盐', 'bb2cafa845f2b405d8ccbd6e00b87f88', '0', '14FDUoW0(6', '0', '0');
