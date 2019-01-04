package com.dawa.blog.test;

import com.dawa.blog.biz.RelationBiz;
import com.dawa.blog.biz.impl.RelationBizImpl;
import com.dawa.blog.dao.*;
import com.dawa.blog.dao.impl.*;
import com.dawa.blog.entity.*;
import com.dawa.blog.utils.MD5Utils;
import com.dawa.blog.utils.PageBean;
import com.google.gson.Gson;
import org.apache.log4j.Logger;
import org.junit.Test;

import java.sql.Clob;
import java.util.Arrays;
import java.util.List;

public class myTest {
    private BlogAdminDao blogAdminDao = new BlogAdminDaoImpl();
    private TypeTypeDao typeTypeDao = new TypeTypeDaoImpl();
    private ArticleTypeDao articleTypeDao = new ArticleTypeDaoImpl();
    private ArticleDao articleDao = new ArticleDaoImpl();
    private RelationDao relationDao = new RelationDaoImpl();
    private RelationBiz relationBiz = new RelationBizImpl();
    private BlogUserDao blogUserDao = new BlogUserDaoImpl();

    @Test
    public void testRun() {
        System.out.println("run");
    }

    @Test
    public void testLog4j() {
        Logger logger = Logger.getLogger(myTest.class);
        logger.info("测试数据");
    }

    @Test
    public void testMD5() {
        String md5 = MD5Utils.md5("123456");

        System.out.println(MD5Utils.md5("000000"));
        System.out.println(md5);
    }

    @Test
    public void testAdminDao() {
        try {
            BlogAdmin admin = blogAdminDao.selectByUserName("admin");
            System.out.println(admin);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testTypeTypeDao() {
        try {
            List<TypeType> allTypeType = typeTypeDao.getAllTypeType();
            for (TypeType typeType : allTypeType) {
                System.out.println(typeType.toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testArticleType() {
        ArticleType articleType = new ArticleType();
        articleType.setT_name("linux");
        articleType.setT_color("#999");
        articleType.setTypeType(new TypeType(1));
        articleType.setT_id(8);
        try {
//            int i = articleTypeDao.addArticleType(articleType);
//            int i = articleTypeDao.delArticleType(articleType);
//            int i = articleTypeDao.updateArticleType(articleType);
//            System.out.println("添加行数:" + i);
            List<ArticleType> allArticleTypeByTypeId = articleTypeDao.getAllArticleTypeByTypeId(1);
            for (ArticleType type : allArticleTypeByTypeId) {
                System.out.println(type);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void tesArticleDao(){
        PageBean pageBean = new PageBean();
        try {
            articleDao.getAllArticleBySplit(pageBean);
            for (Object article : pageBean.getList()) {
                System.out.println(article);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testRelationDao (){
        List<ArticleType> list = relationDao.getRelationByArticleId(1);
        Gson gson = new Gson();
        String s = gson.toJson(list);
        System.out.println(s);
    }

    @Test
    public void testRelationBiz (){
        List<ArticleType> relation = relationBiz.getRelationByAId(27);
        Gson gson = new Gson();
        String s = gson.toJson(relation);
        System.out.println(s);
    }

    @Test
    public void testBlogUserDao(){
        try {
            List<BlogUser> allUser = blogUserDao.getAllUser();
            for (BlogUser blogUser : allUser) {
                System.out.println(blogUser);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
