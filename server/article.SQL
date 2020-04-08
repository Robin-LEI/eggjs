# 创建数据库
create database egg_article;

# 使用数据库
use egg_article;

# 创建一张表
create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';