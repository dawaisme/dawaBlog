package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.TypeTypeDao;
import com.dawa.blog.entity.TypeType;
import com.dawa.blog.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

public class TypeTypeDaoImpl implements TypeTypeDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);
    //查询所有分类
    @Override
    public List<TypeType> getAllTypeType() throws SQLException {
        String sql = "select * from type_type";
        return runner.query(sql, new BeanListHandler<>(TypeType.class));
    }
}
