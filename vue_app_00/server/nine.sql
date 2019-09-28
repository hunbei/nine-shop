
set names utf8;
-- DROP DATABASE IF EXISTS nineShop;
-- create database nineShop charset=utf8;
use nineShop;
create table user(
	uid int primary key auto_increment,
	uname varchar(32),
	upwd varchar(32),
	upic varchar(32)
);

create table shopcar(
	sid int primary key auto_increment,
	checked boolean,
	sum int,
	proid int,
	userid int,
	FOREIGN KEY(userid) REFERENCES user(uid),
	foreign key(proid) REFERENCES products(pid)
);
create table className(
	cid int primary key auto_increment,
	cname varchar(16)
);

create table products(
	pid int primary key auto_increment,
	pname varchar(32);
	price int,
	detail varchar(255),
	info varchar(50),
	img varchar(15),
	imgs varchar(255),
	classid int,
	foreign key(classid) references className(cid)
);
