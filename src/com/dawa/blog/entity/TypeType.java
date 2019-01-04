package com.dawa.blog.entity;

import java.io.Serializable;

/**
 *   type_id number(10) primary key,  --类别id
 *   type_name varchar2(30) not null -- 类别名称
 */
public class TypeType  implements Serializable {
    private int type_id;
    private String type_name;

    public TypeType() {
    }

    public TypeType(int type_id) {
        this.type_id = type_id;
    }

    public TypeType(int type_id, String type_name) {
        this.type_id = type_id;
        this.type_name = type_name;
    }

    public int getType_id() {
        return type_id;
    }

    public void setType_id(int type_id) {
        this.type_id = type_id;
    }

    public String getType_name() {
        return type_name;
    }

    public void setType_name(String type_name) {
        this.type_name = type_name;
    }

    @Override
    public String toString() {
        return "TypeType{" +
                "type_id=" + type_id +
                ", type_name='" + type_name + '\'' +
                '}';
    }
}
