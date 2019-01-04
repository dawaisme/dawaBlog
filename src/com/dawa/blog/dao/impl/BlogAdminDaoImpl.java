package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.BlogAdminDao;
import com.dawa.blog.entity.BlogAdmin;
import com.dawa.blog.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

public class BlogAdminDaoImpl implements BlogAdminDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);

    //根据用户名查询用户
    @Override
    public BlogAdmin selectByUserName(String username) throws SQLException {
        String sql = "select * from blog_admin where a_username=?";
        Object[] objects = {username};
        return runner.query(sql, new BeanHandler<>(BlogAdmin.class),objects);
    }

    //查询所有管理员用户 //需要对时间进行处理.
    @Override
    public List<BlogAdmin> getAllAdminUser() throws Exception {
        String sql = "select * from blog_admin";
        return runner.query(sql, new BeanListHandler<>(BlogAdmin.class));
    }

    //根据ID查询用户
    @Override
    public BlogAdmin getAdminUserDetailById(int id) throws SQLException {
        String sql = "select * from blog_admin where a_id=?";
        Object[] objects = {id};
        return runner.query(sql, new BeanHandler<>(BlogAdmin.class),objects);
    }
}
