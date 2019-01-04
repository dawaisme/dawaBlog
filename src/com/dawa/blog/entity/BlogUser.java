package com.dawa.blog.entity;

/**
 *  create table blog_user
 *  (
 *   u_id number(10) primary key,  --用户id
 *   u_username varchar2(20) not null,--账号
 *   u_password varchar2(50) not null,--密码
 *   u_alias varchar2(20) not null,--昵称
 *   u_sex varchar2(20) not null,--性别
 *   u_image varchar2(200) default '/res/images/my/login.jpg' not null, --头像
 *   u_status varchar2(20) default '正常', --状态  默认正常
 *   create_date date default sysdate, --用户创建时间
 *   u_date date default sysdate--最近登录时间
 * );
 */
public class BlogUser {
    private int u_id;
    private String u_username;
    private String u_password;//密码
    private String u_alias; //昵称
    private String u_sex; //性别
    private String u_image; //用户头像路径
    private String u_status; //用户状态
    private String create_date; //用户创建时间
    private String u_date;  //最近登录时间

    public BlogUser() {
    }

    public BlogUser(int u_id, String u_username, String u_password, String u_alias, String u_sex, String u_image, String u_status, String create_date, String u_date) {
        this.u_id = u_id;
        this.u_username = u_username;
        this.u_password = u_password;
        this.u_alias = u_alias;
        this.u_sex = u_sex;
        this.u_image = u_image;
        this.u_status = u_status;
        this.create_date = create_date;
        this.u_date = u_date;
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }

    public String getU_username() {
        return u_username;
    }

    public void setU_username(String u_username) {
        this.u_username = u_username;
    }

    public String getU_password() {
        return u_password;
    }

    public void setU_password(String u_password) {
        this.u_password = u_password;
    }

    public String getU_alias() {
        return u_alias;
    }

    public void setU_alias(String u_alias) {
        this.u_alias = u_alias;
    }

    public String getU_sex() {
        return u_sex;
    }

    public void setU_sex(String u_sex) {
        this.u_sex = u_sex;
    }

    public String getU_image() {
        return u_image;
    }

    public void setU_image(String u_image) {
        this.u_image = u_image;
    }

    public String getU_status() {
        return u_status;
    }

    public void setU_status(String u_status) {
        this.u_status = u_status;
    }

    public String getCreate_date() {
        return create_date;
    }

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public String getU_date() {
        return u_date;
    }

    public void setU_date(String u_date) {
        this.u_date = u_date;
    }

    @Override
    public String toString() {
        return "BlogUser{" +
                "u_id=" + u_id +
                ", u_username='" + u_username + '\'' +
                ", u_password='" + u_password + '\'' +
                ", u_alias='" + u_alias + '\'' +
                ", u_sex='" + u_sex + '\'' +
                ", u_image='" + u_image + '\'' +
                ", u_status='" + u_status + '\'' +
                ", create_date='" + create_date + '\'' +
                ", u_date='" + u_date + '\'' +
                '}';
    }
}
