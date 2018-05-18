/*
Navicat MySQL Data Transfer

Source Server         : hcmus-book
Source Server Version : 50722
Source Host           : 127.0.0.1:8000
Source Database       : hcmus-book

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-05-18 20:50:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `bookID` int(11) NOT NULL AUTO_INCREMENT,
  `bookName` varchar(255) NOT NULL,
  `bookQuantityleft` int(11) NOT NULL,
  `bookPrice` decimal(10,0) NOT NULL,
  `bookImage` varchar(255) NOT NULL,
  `bookDescription` longtext NOT NULL,
  PRIMARY KEY (`bookID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('1', 'Harry Potter', '4998', '135000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F1.jpg?alt=media&token=dc388222-3fbe-49bf-96dc-0c21cfe846b9', 'Khi một lá thư được gửi đến cho cậu bé Harry Potter bình thường và bất hạnh, cậu khám phá ra bí mật đã được che giấu cả một thập kỉ');
INSERT INTO `books` VALUES ('2', 'Out of the Box', '4998', '120000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F2.jpg?alt=media&token=8b136642-f0f2-4b8b-b2c2-654d57d317dd', 'Giúp bạn thay đổi cách tư duy trong công việc cũng như cuộc sống.');
INSERT INTO `books` VALUES ('3', 'Dutch', '4998', '95000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F3.jpg?alt=media&token=892babc0-ce2d-4a95-a312-390080d07414', 'Về cuộc sống cũng như đồ ăn, nước uống, thú vui của người Hà Lan');
INSERT INTO `books` VALUES ('4', 'History of modern architechture', '4999', '90000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F4.jpg?alt=media&token=44da7722-cec0-4001-b364-d049b69a9dc6', 'Nói về tất cả lịch sử của nền văn minh nhân loại.');
INSERT INTO `books` VALUES ('5', 'Between Planes', '5000', '90000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F5.jpg?alt=media&token=8128515d-e11e-479b-90aa-e5695fd300b4', 'Chuyến phiêu lưu của 1 cô bé đến một thế giới khác lạ song song với thể giới thực. Ở đó cô khám phá ra nhiều điều kì thú.');
INSERT INTO `books` VALUES ('6', 'The Legend of Avondel', '5000', '120000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F6.jpg?alt=media&token=df13f8b1-29c6-4078-91e0-ead8d9b617a3', 'Những cuộc chiến đẫm máu, khóc liệt của những chiến binh huyền thoại.');
INSERT INTO `books` VALUES ('7', 'The List', '4999', '90000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F7.jpg?alt=media&token=433bf557-3581-461f-9ba5-b3bf5b2215cc', 'Cuộc phiêu lưu trong mơ của 1 cậu bé 8 tuổi. Qua ánh nhìn của 1 đứa bé, nhiều điều giản đơn của cuộc sống được tô đậm một cách rõ nét hơn.');
INSERT INTO `books` VALUES ('8', 'I am not your perfect mexican daughter', '5000', '93000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F8.jpg?alt=media&token=f600d1bb-bd12-4a78-b6f1-2d26b6a9106c', 'Về cuộc sống của 1 cô gái mới lớn mới di chuyển đến thành phố định cư.');
INSERT INTO `books` VALUES ('9', 'The Insufferable of being Mladen', '5000', '86000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F9.jpg?alt=media&token=5a968226-cf6e-45d1-8f8b-e356a612258e', 'Bàn về nhiều cách nhìn nhận của cuộc sống. Cho chúng ta cách nhìn một cách chân thật hơn về những con người và vạn vật xung quanh chúng ta.');
INSERT INTO `books` VALUES ('10', 'Online to in person', '5000', '85000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F10.jpg?alt=media&token=80698742-e464-4235-ac3a-3384ad3e8f60', 'Sách nói về sự ảnh hưởng của công nghệ lên đời sống của mỗi con người.');
INSERT INTO `books` VALUES ('11', 'Danger Street', '5000', '90000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F11.jpg?alt=media&token=4cc91ec9-3248-4411-9fa3-e39a777233d5', 'Sách nói về những vụ giết người đẫm máu, cũng như con đường truy tiềm tội phạm của nhân vật chính');
INSERT INTO `books` VALUES ('12', 'Export Oriented Units', '5000', '100000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F12.jpg?alt=media&token=3f5b8b88-adb3-4320-b789-3f6f5f41ef80', 'Sách nói về luật xuất nhập khẩu.');
INSERT INTO `books` VALUES ('13', 'A Game Of Thrones', '5000', '120000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F13.jpg?alt=media&token=bb25b4ee-50e0-4191-830b-187082080538', 'Sách nói về cuộc tranh giành ngồi vàng của 7 gia tộc Lannister, Start, Targaryen, Baratheon, Tyrell, Martel, Greyjoy.');
INSERT INTO `books` VALUES ('14', 'Harry Potter - Deathly Hallow', '4999', '135000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F14.jpg?alt=media&token=cf3d19be-f685-43bf-bdc8-90be52e605a3', 'Truyện kể về những chuyến phiêu lưu của một cậu bé tên Harry Potter trong thế giới phù thủy cùng với 2 người bạn là Ron và Hermione.');
INSERT INTO `books` VALUES ('15', 'Boring Girl', '5000', '96000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F15.jpg?alt=media&token=380499c5-908b-4fcb-8234-49cdcf0f52c9', 'Sách kể về đời sống của tác giả Sara Taylor qua cách nhìn nhận của cô về cách tiếp xúc của người thân và gia đình.');
INSERT INTO `books` VALUES ('16', 'Fearless Beauty', '5000', '98000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F16.jpg?alt=media&token=aedb9f05-d8c4-4bd0-970c-c2eede7c040d', 'Sách tôn vinh nét đẹp của phụ nữ.');
INSERT INTO `books` VALUES ('17', 'Under the Dome', '5000', '94000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F17.jpg?alt=media&token=516fd7fe-f830-4bca-8da8-0521c55c6ca0', 'Sách nêu ra giả thuyết rằng tất cả con người trên trái đất đều sống trên 1 mặt đất phẳng và dưới một mái vòm làm bằng kính rất lớn .');
INSERT INTO `books` VALUES ('18', 'The Wright Method', '5000', '110000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F18.jpg?alt=media&token=9f992918-93ab-404f-a0b1-1c024665c131', 'Sách hướng dẫn những mẹo nhỏ giúp bạn sinh hoạt tốt hơn trong cuộc sống.');
INSERT INTO `books` VALUES ('19', 'The road', '4999', '131000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F19.jpg?alt=media&token=a33dc1c6-ce3d-498c-ac3d-d852646cf703', 'Sách kể về một chuyến phiêu lưu xuyên quốc gia của 2 người bạn. ');
INSERT INTO `books` VALUES ('20', 'Wonder', '4999', '135000', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/book-image%2F20.jpg?alt=media&token=2eeed23d-e6cd-4c1e-8bd4-a366ebab5268', 'Sách nói về cuộc sống của một cậu bé bị cô lập bởi người xung quanh. Giúp bạn hiểu biết thêm nhiều về cách đối xử cũng như cách hòa nhập với người xung quanh.');

-- ----------------------------
-- Table structure for order_detail
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `orderID` int(11) NOT NULL,
  `detailID` int(11) NOT NULL AUTO_INCREMENT,
  `bookID` int(11) NOT NULL,
  `quantityOrder` int(11) NOT NULL,
  PRIMARY KEY (`detailID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_detail
-- ----------------------------
INSERT INTO `order_detail` VALUES ('18', '26', '1', '1');
INSERT INTO `order_detail` VALUES ('18', '27', '3', '1');
INSERT INTO `order_detail` VALUES ('18', '28', '2', '1');
INSERT INTO `order_detail` VALUES ('19', '29', '4', '1');
INSERT INTO `order_detail` VALUES ('19', '30', '7', '1');
INSERT INTO `order_detail` VALUES ('20', '31', '19', '1');
INSERT INTO `order_detail` VALUES ('20', '32', '14', '1');
INSERT INTO `order_detail` VALUES ('20', '33', '20', '1');

-- ----------------------------
-- Table structure for order_history
-- ----------------------------
DROP TABLE IF EXISTS `order_history`;
CREATE TABLE `order_history` (
  `orderID` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `createBy` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `totalPayment` int(11) NOT NULL,
  `area` varchar(255) NOT NULL,
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_history
-- ----------------------------
INSERT INTO `order_history` VALUES ('18', '2018-05-10 05:05:43', '5', 'APPROVE', '350000', 'Quận 1');
INSERT INTO `order_history` VALUES ('19', '2018-05-10 05:07:58', '5', 'PENDING', '180000', 'Quận 3');
INSERT INTO `order_history` VALUES ('20', '2018-05-10 08:15:25', '5', 'PENDING', '401000', 'Quận 3');

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `postBy` int(11) NOT NULL,
  `cond` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('1', 'Cần bán sách cũ', 'Mèo dạy hải âu bay', '<p>Nội dung hay, cuốn hút, hấp dẫn, kịch tích</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2F5d596e5f-dce5-4e64-a88d-a96d5fd47fa7.jpg?alt=media&token=4f4bb309-c163-4feb-bfb1-d42dd4a8485d', '30000', '4', '10', 'APPROVE');
INSERT INTO `posts` VALUES ('2', 'Cần bán sách cũ ', 'Hà Nội 36 phố phường', '<p>Sách cũ cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fae327c4a-cb16-4914-891b-ab861b5fd162.jpg?alt=media&token=c0beacb7-c9a6-430c-b1e2-c686ee31b836', '50000', '4', '10', 'APPROVE');
INSERT INTO `posts` VALUES ('3', 'Sách hay chọn lọc', 'The Last Leaf', '<p>Văn học nước ngoài</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2F4c566f06-edf8-4d3b-b152-f9d6e2d11c20.jpg?alt=media&token=22ac8903-7145-40f3-99cd-788f00aa57b5', '60000', '4', '10', 'APPROVE');
INSERT INTO `posts` VALUES ('4', 'Thanh lý sách cũ', 'Ca dao trữ tình Việt Nam', '<p>Ca dao chọn lọc</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fdecf4cee-4cb5-4fe1-8869-440174a7f55f.jpg?alt=media&token=859a16cd-3974-4a7d-8c19-40e9ba965d44', '30000', '4', '9', 'APPROVE');
INSERT INTO `posts` VALUES ('5', 'Bán sách cũ', 'Chúng ta rồi sẽ ổn thôi', '<p>Nội dung hay, cuốn hút</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fdc693e21-521f-4317-8387-d8b559a0722f.jpg?alt=media&token=51351350-5bef-4458-aae1-c8ff556cced4', '60000', '4', '10', 'APPROVE');
INSERT INTO `posts` VALUES ('6', 'Sách hay cần thanh lý', 'Có hai con mèo ngồi bên cửa sổ', '<p>Sách của tác giả Nguyễn Nhật Ánh</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fcecb406c-261e-4f25-8d72-472517cd88b0.jpg?alt=media&token=d8a4c997-8172-477d-a9f6-d8aa0c0442b0', '50000', '4', '10', 'APPROVE');
INSERT INTO `posts` VALUES ('7', 'Ngôn tình hay', 'Còn chút gì để nhớ', '<p>Nội dung hay, hấp dẫn, đã đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fbca7950d-9d1a-43fd-bee4-84c1e601dd10.jpg?alt=media&token=25514f75-53c4-4b62-925e-db5b766f933d', '45000', '4', '9', 'APPROVE');
INSERT INTO `posts` VALUES ('8', 'Truyện ngắn cần thanh lý', 'Hai mặt cuộc đời', '<p>Đã đọc xong nên cần bán lại cho bạn nào muốn đọc</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fff02b810-6b92-4199-80db-4db0a92461a3.jpg?alt=media&token=1294c13a-c903-4e05-a243-4ebca17a3428', '20000', '4', '9', 'APPROVE');
INSERT INTO `posts` VALUES ('9', 'Tuyển tập thơ hay', 'Ẩn Hương', '<p>Tuyển tập thơ hay</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fd4bb88b4-274e-48e6-b149-7335f6300a03.jpg?alt=media&token=6e133d3d-cdc9-4649-9339-d86159adde31', '40000', '4', '8', 'APPROVE');
INSERT INTO `posts` VALUES ('10', 'Tiểu thuyết ngắn, hay', 'Chuyện Làng', '<p>Tiếu thuyết với nội dung hấp dẫn, lôi cuốn</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2F9379ca5b-85fd-4019-800e-75976cdedf5b.jpg?alt=media&token=23d6fb0f-a552-4c3a-b6fc-c7ef146cfdd9', '45000', '4', '8', 'PENDING');
INSERT INTO `posts` VALUES ('11', 'Cần thanh lý', 'Sài Gòn ART BOOK', '<p>Dành cho ai muốn tìm hiểu về văn hóa sài gòn</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Ff5983cdc-27da-4620-9f64-507e98c09f42.jpg?alt=media&token=de0c23c3-2730-453e-9087-5af0a162d5fe', '50000', '4', '9', 'PENDING');
INSERT INTO `posts` VALUES ('12', 'Truyện ngắn hay', 'Sói mặt đơ và cô bitch quàng khăn đỏ', '<p>Nội dung hấp dẫn, lôi cuốn, đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Feffba4e3-b188-4173-ab21-98fa56dc1d35.jpg?alt=media&token=06443ee1-f4b7-4e1e-b78a-64c8de2df648', '45000', '4', '8', 'PENDING');
INSERT INTO `posts` VALUES ('13', 'Truyện ngắn hay', 'Sói mặt đơ và cô bitch quàng khăn đỏ', '<p>Nội dung hấp dẫn, lôi cuốn, đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Feffba4e3-b188-4173-ab21-98fa56dc1d35.jpg?alt=media&token=06443ee1-f4b7-4e1e-b78a-64c8de2df648', '45000', '4', '8', 'PENDING');
INSERT INTO `posts` VALUES ('14', 'Truyện ngắn hay', 'Sói mặt đơ và cô bitch quàng khăn đỏ', '<p>Nội dung hấp dẫn, lôi cuốn, đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Feffba4e3-b188-4173-ab21-98fa56dc1d35.jpg?alt=media&token=06443ee1-f4b7-4e1e-b78a-64c8de2df648', '45000', '4', '8', 'PENDING');
INSERT INTO `posts` VALUES ('15', 'Sách hay của tác giả Nguyễn Nhật Ánh', 'Hai con mèo ngồi bên cửa sổ', '<p>Nội dung hay, đã đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fe2576a55-f7e3-4612-b8bc-7cd6c3a5a2f1.jpg?alt=media&token=d0acd93b-49b7-42c8-87a7-db2baa2706c3', '25000', '4', '8', 'PENDING');
INSERT INTO `posts` VALUES ('16', 'Sách hay của tác giả Nguyễn Nhật Ánh', 'Hai con mèo ngồi bên cửa sổ', '<p>Đã đọc xong nên cần bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2Fe2576a55-f7e3-4612-b8bc-7cd6c3a5a2f1.jpg?alt=media&token=d0acd93b-49b7-42c8-87a7-db2baa2706c3', '30000', '4', '9', 'PENDING');
INSERT INTO `posts` VALUES ('17', 'Sách hay của tác giả Kỳ Nam', 'Sói mặt đơ và cô Bitch quàng khăn đỏ', '<p>Nội dung hay, do k còn dùng nên bán lại</p>\n', 'https://firebasestorage.googleapis.com/v0/b/ebook-471d6.appspot.com/o/images%2F634f66c7-0517-47d4-9bbd-d1aab5d104ad.jpg?alt=media&token=b6342b37-2e79-4101-84db-0927d6a716cf', '50000', '5', '8', 'PENDING');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userAccount` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userAddress` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'sơn', 'root', 'root', '32/10', '1', '2018-04-26 07:16:24', '2018-04-26 07:16:24', 'Nam', '0908749096');
INSERT INTO `users` VALUES ('2', 'sơn', 'root', 'root', '32/10', '1', '2018-04-26 07:16:43', '2018-04-26 07:16:43', 'Nam', '0908749096');
INSERT INTO `users` VALUES ('3', 'sơn', 'root', 'root', '32/10', '1', '2018-04-26 07:17:42', '2018-04-26 07:17:42', 'Nam', '0908749096');
INSERT INTO `users` VALUES ('4', 'son cong trinh', 'user', 'user', '32/10', null, '2018-04-27 07:17:29', '2018-04-27 07:17:29', 'Nam', '0908749096');
INSERT INTO `users` VALUES ('5', 'Trịnh Công Sơn', 'user2', '123456', '32/10', null, '2018-04-27 07:34:40', '2018-04-27 07:34:40', 'Nam', '0908749096');
INSERT INTO `users` VALUES ('6', 'Trịnh Sơn', 'congson0710', '123456', '32/10 Nguyễn Cửu Vân', null, '2018-05-17 07:11:55', '2018-05-17 07:11:55', 'Nam', '01889352374');
INSERT INTO `users` VALUES ('7', 'Trịnh Sơn', 'boy_sky1102', '123456', '32/10 Nguyễn Cửu Vân', null, '2018-05-17 07:15:59', '2018-05-17 07:15:59', 'Nam', '01889352374');
