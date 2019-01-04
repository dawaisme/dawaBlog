package com.dawa.blog.biz;

import com.dawa.blog.entity.BlogAdmin;

import java.util.HashMap;
import java.util.List;

/**
 * BlogAdminBizs
 */
public interface BlogAdminBiz {
    //登陆业务
    public HashMap adminLogin(BlogAdmin blogAdmin);

    //查询所有管理员用户
    public List<BlogAdmin> getAllAdminUser();

    //得到用户详细信息
    public BlogAdmin getAdminUserDetailById(int id);
}
