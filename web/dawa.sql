/*==============================================================*/
/* DBMS name:      ORACLE Version 11g                           */
/* Created on:     2018年12月27日
数据库账号: c##blog    密码 123  */
/*==============================================================*/

drop table blog_admin cascade constraints;
drop table blog_user cascade constraints;
drop table relation cascade constraints;
drop table article cascade constraints;
drop table article_type cascade constraints;
drop table type_type cascade constraints;
commit;
drop sequence blog_admin_a_id;
drop sequence blog_user_u_id;
drop sequence type_type_type_id;
drop sequence article_type_t_id;
drop sequence article_a_id;
drop sequence relation_a_id;
/*==============================================================*/
/* Table: blog_admin 管理员表                                     */
/*==============================================================*/
create table blog_admin
(
  a_id number(10) primary key,  --管理员ID
  a_username varchar2(20) not null, --用户名
  a_password varchar2(50) not null,  -- 密码
  a_sex varchar2(20) not null,  --性别
  a_alias varchar2(20) not null, --昵称
  a_image varchar2(200) default '/res/images/my/login.jpg' not null,--头像
  a_status varchar2(20) default '正常', --状态,默认正常
  create_date date default sysdate,  --创建时间
  update_date date default sysdate  --更新时间
);
create sequence blog_admin_a_id start with 1;

insert into blog_admin(a_id,a_username,a_password,a_alias,a_sex,a_image) values(blog_admin_a_id.nextval,'admin','123456','dawa','男','/res/images/my/login.jpg');
insert into blog_admin(a_id,a_username,a_password,a_alias,a_sex,a_image) values(blog_admin_a_id.nextval,'dawa','000000','dawa','女','/res/images/my/favicon.ico');

/*==============================================================*/
/* Table: blog_user 用户表                                  */
/*==============================================================*/
create table blog_user
(
  u_id number(10) primary key,  --用户id
  u_username varchar2(20) not null,--账号
  u_password varchar2(50) not null,--密码
  u_alias varchar2(20) not null,--昵称
  u_sex varchar2(20) not null,--性别
  u_image varchar2(200) default '/res/images/my/login.jpg' not null, --头像
  u_status varchar2(20) default '正常', --状态  默认正常
  create_date date default sysdate, --用户创建时间
  u_date date default sysdate--最近登录时间
);

create sequence blog_user_u_id start with 1;
insert into blog_user(u_id,u_username,u_password,u_alias,u_sex,u_image) values(blog_user_u_id.nextval,'user','123456','dawa','女','/res/images/my/login.jpg');
insert into blog_user(u_id,u_username,u_password,u_alias,u_sex,u_image) values(blog_user_u_id.nextval,'dawa','123456','大娃','男','/res/images/my/favicon.ico');
/*==============================================================*/
/* Table: type_type 标签,分类类别表                        */
/*==============================================================*/
create table type_type
(
  type_id number(10) primary key,  --类别id
  type_name varchar2(30) not null -- 类别名称
);
create sequence type_type_type_id start with 1;
insert into type_type(type_id,type_name) values(type_type_type_id.nextval,'标签');
insert into type_type(type_id,type_name) values(type_type_type_id.nextval,'分类');

/*==============================================================*/
/* Table: article_type 文章类型表                           */
/*==============================================================*/
create table article_type
(
  t_id number(10) primary key, --标签,分类 ID
  t_name varchar2(20) not null, --标签,分类 名称
  t_color varchar2(20) default '#FFFFFF' not null,--标签,分类 颜色
  type_id number(10) not null  references type_type(type_id)  --标签,分类 类型
);
create sequence article_type_t_id start with 1;
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'java','#7b91fc',1);
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'javascript','#7b91fc',1);
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'html','#7b91fc',1);
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'css','#7b91fc',1);
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'学习笔记','#7b91fc',2);
insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,'日记日志','#7b91fc',2);

/*==============================================================*/
/* Table: article 文章                                   */
/*==============================================================*/
create table article
(
  a_id number(10) primary key, --文章id
  a_title varchar2(100) not null, --文章标题
  a_brief varchar2(200) default ' ', --文章摘要
  a_content clob not null, --文章内容
  a_image varchar2(200) default '/res/images/my/5.jpg', --文章图片
  is_view varchar2(20) default '可见', --是否可见
  is_top varchar2(20) default '不置顶', --是否置顶
  a_author varchar2(20) default 'dawa',  --文章作者
  a_pviews number(10) default 0,  --文章阅读量
  create_time date default sysdate, --文章创建时间
  update_time date default sysdate  --文章最后修改时间
);
create sequence article_a_id start with 1;
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第一篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第二篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第三篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第四篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第五篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第六篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第七篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第八篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第九篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十一篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十二篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十三篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十四篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十五篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十六篇博客','这是我的第一篇博客','第一次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十七篇博客','这是我的第二篇博客','第二次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
insert into article(a_id,a_title,a_brief,a_content) values(article_a_id.nextval,'第十八篇博客','这是我的第三篇博客','第三次写博客,内心好忐忑啊.我好激动啊!啊!啊!');
/*==============================================================*/
/* Table: article 文章表 和 类型表 的关系表  relation               */
/*==============================================================*/
create table relation
(
  a_id number(10) references article(a_id) ,--文章id
  t_id number(10) references article_type(t_id) ,--文章类别 id
  r_id number(10) primary key --关系编号
);
create sequence relation_a_id start with 1;
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,1);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,2);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,3);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,4);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,5);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,1,6);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,2,1);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,2,2);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,2,3);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,2,5);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,3,1);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,3,2);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,3,3);
insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,3,6);
------------------------------------------------------------------------
commit;
select * from blog_admin;
select * from blog_user;
select * from type_type;
select * from article_type;
select * from article;
select * from relation;
commit;
--上面为数据库初稿源码. 禁止修改.

------------------------------------------------------------------------
------------------------------------------------------------------------
--对表的操作
select * from blog_admin where a_username='admin';
update blog_admin set a_password='49ba59abbe56e057' where a_username='admin';
update blog_admin set a_password='8ad9902aecba32e2' where a_username='dawa';
update blog_user set u_image='/res/images/my/favicon.ico' where u_username='dawa';
delete from article where a_id = 35;
-- 修改文章数据
update article set a_title='测试数据',a_brief='测试数据',a_content='测试数据',a_image='/abc.jpg',is_view='不可见',is_top='置顶',update_time=sysdate where a_id=5;
select * from article;
select * from blog_admin;
select a_id,a_username,a_password,a_sex,a_alias,a_image,a_status,to_char(create_date,'yyyy-MM-dd HH:mm:ss'),to_char(update_date,'yyyy-MM-dd HH:mm:ss') from blog_admin;
update blog_admin set update_date=to_char(sysdate,'yyyy-MM-dd HH:mm:ss') where a_id = 2;
insert into blog_user(u_id,u_username,u_password,u_alias,u_sex,u_image) values(blog_user_u_id.nextval,'dawa','123456','大娃','男','/res/images/my/login.jpg');
select to_char(sysdate,'yyyy-MM-dd HH:mm:ss') 创建时间 from dual;
-- 时间格式化 to_char(sysdate,'yyyy-MM-dd')



commit;
------------------------------------------------------------------------
--查看文章类型    类型和分类的多表查询
select t_id,t_name,t_color,a.type_id type_id,type_name from article_type a ,type_type t where a.type_id=t.type_id and  a.type_id=1;
update article_type set t_name='vue.js',type_id=1,t_color='#ffffff' where t_id=4;
delete from article_type where t_id=6;
------------------------------------------------------------------------
------------------------------------------------------------------------
-- 分页查询 article
select count(*) from article; --查询出数据的总条数
select * from article; --最内侧
select rownum rn,temp.* from (select * from article order by a_id) temp; --中间
select * from (select rownum rn,temp.* from (select * from article order by a_id desc ) temp)  where rn > 10 and rn<=15  ;--外侧
------------------------------------------------------------------------
------------------------------------------------------------------------
-- 多表查询 关系表, 文章表, 文章类型表
select relation.r_id r_id,relation.a_id a_id,relation.t_id t_id,t_name,t_color,type_id,a_title,a_brief,a_content,a_image,is_view,is_top,a_author,a_pviews,create_time,update_time
from relation,article,article_type
where relation.a_id=article.a_id and relation.t_id=article_type.t_id
order by r_id;

------------------------------------------------------------------------
------------------------------------------------------------------------
select t_id from relation where a_id=28;
select article_a_id.currval from dual; --查询当前添加的articleID


--------
--根据文章,找类型
select a_id, relation.t_id, r_id, t_name, t_color, type_id from relation,article_type where relation.t_id=article_type.t_id and a_id = 1;
--根据类型, 判断文章个数.
select count (*) count from relation where t_id = 2;