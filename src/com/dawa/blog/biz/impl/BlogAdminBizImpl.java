package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.BlogAdminBiz;
import com.dawa.blog.dao.BlogAdminDao;
import com.dawa.blog.dao.impl.BlogAdminDaoImpl;
import com.dawa.blog.entity.BlogAdmin;
import com.dawa.blog.utils.DBUtils;
import com.dawa.blog.utils.MD5Utils;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;

public class BlogAdminBizImpl implements BlogAdminBiz {
    private BlogAdminDao blogAdminDao = new BlogAdminDaoImpl();

    //登陆业务
    @Override
    public HashMap<String, Object> adminLogin(BlogAdmin blogAdmin) {
        HashMap<String, Object> map = new HashMap<>();

        try {
            BlogAdmin admin = blogAdminDao.selectByUserName(blogAdmin.getA_username());
            if (admin != null) {//用户存在.
                // 第一,进行密码判断 (密码进行MD5加密,然后进行匹配)
                if (MD5Utils.md5(blogAdmin.getA_password()).equals(admin.getA_password())) {//密码匹配
                    //第二,判断用户的状态,如果正常则登陆.
                    if ("正常".equals(admin.getA_status())) {//状态为正常
                        map.put("login_flag", "登陆成功");
                        map.put("admin", admin);
                    } else {//状态为禁用
                        map.put("login_flag", "用户为禁用状态");
                    }
                } else {
                    //密码不匹配.
                    map.put("login_flag", "账号或者密码不正确");
                }
            } else {//用户不存在
                map.put("login_flag", "账号或者密码不正确");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return map;
    }

    //查询所有管理员用户
    @Override
    public List<BlogAdmin> getAllAdminUser() {
        try {
            return blogAdminDao.getAllAdminUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    //得到用户详细信息
    @Override
    public BlogAdmin getAdminUserDetailById(int id) {
        try {
            return blogAdminDao.getAdminUserDetailById(id);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
