package com.dawa.blog.entity;

import java.io.Serializable;

/**
 *   t_id number(10) primary key, --标签,分类 ID
 *   t_name varchar2(20) not null, --标签,分类 名称
 *   t_color varchar2(20) default '#FFFFFF' not null,--标签,分类 颜色
 *   type_id number(10) not null  references type_type(type_id)  --标签,分类 类型
 */
public class ArticleType implements Serializable {
    private int t_id;
    private String t_name;
    private String t_color;
    private TypeType typeType; //外键关系

    public ArticleType() {
    }

    public ArticleType(int t_id, String t_name, String t_color, TypeType typeType) {
        this.t_id = t_id;
        this.t_name = t_name;
        this.t_color = t_color;
        this.typeType = typeType;
    }

    public ArticleType(int t_id) {
        this.t_id = t_id;
    }

    public int getT_id() {
        return t_id;
    }

    public void setT_id(int t_id) {
        this.t_id = t_id;
    }

    public String getT_name() {
        return t_name;
    }

    public void setT_name(String t_name) {
        this.t_name = t_name;
    }

    public String getT_color() {
        return t_color;
    }

    public void setT_color(String t_color) {
        this.t_color = t_color;
    }

    public TypeType getTypeType() {
        return typeType;
    }

    public void setTypeType(TypeType typeType) {
        this.typeType = typeType;
    }

    @Override
    public String toString() {
        return "ArticleType{" +
                "t_id=" + t_id +
                ", t_name='" + t_name + '\'' +
                ", t_color='" + t_color + '\'' +
                ", typeType=" + typeType +
                '}';
    }
}
