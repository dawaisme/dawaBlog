package com.dawa.blog.entity;

import java.io.Serializable;
import java.util.Objects;

/**
 *   a_id number(10) primary key, --文章id
 *   a_title varchar2(100) not null, --文章标题
 *   a_brief varchar2(200) default ' ', --文章摘要
 *   a_content clob not null, --文章内容
 *   a_image varchar2(200) default 'abc.png', --文章图片
 *   is_view varchar2(20) default '可见', --是否可见
 *   is_top varchar2(20) default '不置顶', --是否置顶
 *   a_author varchar2(20) default 'dawa',  --文章作者
 *   a_pviews number(10) default 0,  --文章阅读量
 *   create_time date default sysdate, --文章创建时间
 *   update_time date default sysdate  --文章最后修改时间
 */
public class Article implements Serializable {
    private int a_id;
    private String a_title;
    private String a_brief;
    private String a_content; //数据库中是clob格式, 在dao取值时候转换
    private String a_image;
    private String is_view;
    private String is_top;
    private String a_author;
    private int a_pviews;
    private String create_time;
    private String update_time;

    public Article() {
    }

    public Article(int a_id, String a_title, String a_brief, String a_content, String a_image, String is_view, String is_top, String a_author, int a_pviews, String create_time, String update_time) {
        this.a_id = a_id;
        this.a_title = a_title;
        this.a_brief = a_brief;
        this.a_content = a_content;
        this.a_image = a_image;
        this.is_view = is_view;
        this.is_top = is_top;
        this.a_author = a_author;
        this.a_pviews = a_pviews;
        this.create_time = create_time;
        this.update_time = update_time;
    }

    public int getA_id() {
        return a_id;
    }

    public void setA_id(int a_id) {
        this.a_id = a_id;
    }

    public String getA_title() {
        return a_title;
    }

    public void setA_title(String a_title) {
        this.a_title = a_title;
    }

    public String getA_brief() {
        return a_brief;
    }

    public void setA_brief(String a_brief) {
        this.a_brief = a_brief;
    }

    public String getA_content() {
        return a_content;
    }

    public void setA_content(String a_content) {
        this.a_content = a_content;
    }

    public String getA_image() {
        return a_image;
    }

    public void setA_image(String a_image) {
        this.a_image = a_image;
    }

    public String getIs_view() {
        return is_view;
    }

    public void setIs_view(String is_view) {
        this.is_view = is_view;
    }

    public String getIs_top() {
        return is_top;
    }

    public void setIs_top(String is_top) {
        this.is_top = is_top;
    }

    public String getA_author() {
        return a_author;
    }

    public void setA_author(String a_author) {
        this.a_author = a_author;
    }

    public int getA_pviews() {
        return a_pviews;
    }

    public void setA_pviews(int a_pviews) {
        this.a_pviews = a_pviews;
    }

    public String getCreate_time() {
        return create_time;
    }

    public void setCreate_time(String create_time) {
        this.create_time = create_time;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }

    @Override
    public String toString() {
        return "Article{" +
                "a_id=" + a_id +
                ", a_title='" + a_title + '\'' +
                ", a_brief='" + a_brief + '\'' +
                ", a_content=" + a_content +
                ", a_image='" + a_image + '\'' +
                ", is_view='" + is_view + '\'' +
                ", is_top='" + is_top + '\'' +
                ", a_author='" + a_author + '\'' +
                ", a_pviews=" + a_pviews +
                ", create_time=" + create_time +
                ", update_time=" + update_time +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return a_id == article.a_id &&
                a_pviews == article.a_pviews &&
                Objects.equals(a_title, article.a_title) &&
                Objects.equals(a_brief, article.a_brief) &&
                Objects.equals(a_content, article.a_content) &&
                Objects.equals(a_image, article.a_image) &&
                Objects.equals(is_view, article.is_view) &&
                Objects.equals(is_top, article.is_top) &&
                Objects.equals(a_author, article.a_author) &&
                Objects.equals(create_time, article.create_time) &&
                Objects.equals(update_time, article.update_time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(a_id, a_title, a_brief, a_content, a_image, is_view, is_top, a_author, a_pviews, create_time, update_time);
    }
}
