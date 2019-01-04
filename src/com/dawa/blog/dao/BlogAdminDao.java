package com.dawa.blog.dao;

import com.dawa.blog.entity.BlogAdmin;

import java.sql.SQLException;
import java.util.List;

/**
 * BlogAdminDao
 */
public interface BlogAdminDao {
    //根据用户名查询管理员用户
    public BlogAdmin selectByUserName(String username) throws Exception;

    //查询所有管理员用户
    public List<BlogAdmin> getAllAdminUser() throws Exception;

    //查询用户详细信息ByID
    public BlogAdmin getAdminUserDetailById(int id) throws SQLException;

    //添加用户

    //修改用户

    //删除用户

}
