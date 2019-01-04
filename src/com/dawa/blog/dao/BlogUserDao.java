package com.dawa.blog.dao;

import com.dawa.blog.entity.BlogUser;

import java.util.List;

public interface BlogUserDao {
    //查询所有用户
    public List<BlogUser> getAllUser() throws Exception;

    //添加用户
    public int addBlogUser(BlogUser blogUser) throws Exception;

    //修改用户
    public int updateBlogUser(BlogUser blogUser) throws Exception;

    //删除用户
    public int deleteBlogUser(BlogUser blogUser) throws Exception;

}
