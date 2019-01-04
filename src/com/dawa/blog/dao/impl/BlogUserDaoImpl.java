package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.BlogUserDao;
import com.dawa.blog.entity.BlogUser;
import com.dawa.blog.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.SQLException;
import java.util.List;

public class BlogUserDaoImpl implements BlogUserDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);
    //查询所有用户
    @Override
    public List<BlogUser> getAllUser() throws SQLException {
        String sql = "select * from blog_user";
        return runner.query(sql, new BeanListHandler<>(BlogUser.class));
    }

    //添加用户
    @Override
    public int addBlogUser(BlogUser blogUser) {
        String sql = "";
        Object[] objects = {};
        return 0;
    }

    //修改用户
    @Override
    public int updateBlogUser(BlogUser blogUser) {
        return 0;
    }

    //删除用户
    @Override
    public int deleteBlogUser(BlogUser blogUser) {
        return 0;
    }
}
