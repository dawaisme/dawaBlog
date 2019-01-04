package com.dawa.blog.dao;

import com.dawa.blog.entity.TypeType;

import java.util.List;

public interface TypeTypeDao {
    // 类别的查询
    public List<TypeType> getAllTypeType() throws Exception;
}
