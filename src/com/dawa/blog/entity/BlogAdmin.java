package com.dawa.blog.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * 博客管理员实体类
 *   a_id number(10) primary key,  --管理员ID
 *   a_username varchar2(20) not null, --用户名
 *   a_password varchar2(20) not null,  -- 密码
 *   a_sex varchar2(20) not null,  --性别
 *   a_alias varchar2(20) not null, --昵称
 *   a_image varchar2(200) default 'abc.png' not null,--头像
 *   a_status varchar2(20) default '正常', --状态,默认正常
 *   create_date date default sysdate,  --创建时间
 *   update_date date default sysdate  --更新时间
 *
 */
public class BlogAdmin implements Serializable {
    private int a_id;
    private String a_username;
    private String a_password;
    private String a_sex;
    private String a_alias;
    private String a_image;
    private String a_status;
    private String create_date;
    private String update_date;

    public BlogAdmin() {
    }

    public BlogAdmin(int a_id, String a_username, String a_password, String a_sex, String a_alias, String a_image, String a_status, String create_date, String update_date) {
        this.a_id = a_id;
        this.a_username = a_username;
        this.a_password = a_password;
        this.a_sex = a_sex;
        this.a_alias = a_alias;
        this.a_image = a_image;
        this.a_status = a_status;
        this.create_date = create_date;
        this.update_date = update_date;
    }

    public int getA_id() {
        return a_id;
    }

    public void setA_id(int a_id) {
        this.a_id = a_id;
    }

    public String getA_username() {
        return a_username;
    }

    public void setA_username(String a_username) {
        this.a_username = a_username;
    }

    public String getA_password() {
        return a_password;
    }

    public void setA_password(String a_password) {
        this.a_password = a_password;
    }

    public String getA_sex() {
        return a_sex;
    }

    public void setA_sex(String a_sex) {
        this.a_sex = a_sex;
    }

    public String getA_alias() {
        return a_alias;
    }

    public void setA_alias(String a_alias) {
        this.a_alias = a_alias;
    }

    public String getA_image() {
        return a_image;
    }

    public void setA_image(String a_image) {
        this.a_image = a_image;
    }

    public String getA_status() {
        return a_status;
    }

    public void setA_status(String a_status) {
        this.a_status = a_status;
    }

    public String getCreate_date() {
        return create_date;
    }

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public String getUpdate_date() {
        return update_date;
    }

    public void setUpdate_date(String update_date) {
        this.update_date = update_date;
    }

    @Override
    public String toString() {
        return "BlogAdmin{" +
                "a_id=" + a_id +
                ", a_username='" + a_username + '\'' +
                ", a_password='" + a_password + '\'' +
                ", a_sex='" + a_sex + '\'' +
                ", a_alias='" + a_alias + '\'' +
                ", a_image='" + a_image + '\'' +
                ", a_status='" + a_status + '\'' +
                ", create_date=" + create_date +
                ", update_date=" + update_date +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BlogAdmin blogAdmin = (BlogAdmin) o;
        return a_id == blogAdmin.a_id &&
                Objects.equals(a_username, blogAdmin.a_username) &&
                Objects.equals(a_password, blogAdmin.a_password) &&
                Objects.equals(a_sex, blogAdmin.a_sex) &&
                Objects.equals(a_alias, blogAdmin.a_alias) &&
                Objects.equals(a_image, blogAdmin.a_image) &&
                Objects.equals(a_status, blogAdmin.a_status) &&
                Objects.equals(create_date, blogAdmin.create_date) &&
                Objects.equals(update_date, blogAdmin.update_date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(a_id, a_username, a_password, a_sex, a_alias, a_image, a_status, create_date, update_date);
    }
}
