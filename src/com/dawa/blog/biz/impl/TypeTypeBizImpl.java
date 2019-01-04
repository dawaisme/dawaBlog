package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.TypeTypeBiz;
import com.dawa.blog.dao.TypeTypeDao;
import com.dawa.blog.dao.impl.TypeTypeDaoImpl;
import com.dawa.blog.entity.TypeType;
import com.dawa.blog.utils.DBUtils;

import java.util.List;

public class TypeTypeBizImpl implements TypeTypeBiz {
    private TypeTypeDao typeTypeDao = new TypeTypeDaoImpl();

    //得到所有的分类
    @Override
    public List<TypeType> getAllTypeType() {
        try {
            return typeTypeDao.getAllTypeType();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return null;
    }
}
