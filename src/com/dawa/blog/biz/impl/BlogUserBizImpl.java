package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.BlogUserBiz;
import com.dawa.blog.dao.BlogUserDao;
import com.dawa.blog.dao.impl.BlogUserDaoImpl;
import com.dawa.blog.entity.BlogUser;

import java.util.List;

public class BlogUserBizImpl implements BlogUserBiz {
    private BlogUserDao blogUserDao = new BlogUserDaoImpl();
    //得到所有的用户
    @Override
    public List<BlogUser> getAllUser() {
        try {
            return blogUserDao.getAllUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
