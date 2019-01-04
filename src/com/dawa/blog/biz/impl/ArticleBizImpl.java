package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.ArticleBiz;
import com.dawa.blog.dao.ArticleDao;
import com.dawa.blog.dao.RelationDao;
import com.dawa.blog.dao.impl.ArticleDaoImpl;
import com.dawa.blog.dao.impl.RelationDaoImpl;
import com.dawa.blog.entity.Article;
import com.dawa.blog.utils.DBUtils;
import com.dawa.blog.utils.PageBean;

import java.util.List;

public class ArticleBizImpl implements ArticleBiz {
    private ArticleDao articleDao = new ArticleDaoImpl();
    private RelationDao relationDao = new RelationDaoImpl();
    //获取所有的文章
    @Override
    public List<Article> getAllArticle() {
        try {
            return articleDao.getAllArticle();
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return null;
    }

    //分页查询文章列表
    @Override
    public void getAllArticleBySplit(PageBean pageBean) {
        try {
            int articleCount = articleDao.getArticleCount();
            pageBean.setAllRows(articleCount);
            articleDao.getAllArticleBySplit(pageBean);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
    }

    //得到文章总数
    @Override
    public int getArticleCount() {
        return articleDao.getArticleCount();
    }

    //删除文章列表 (单个或者批量)
    @Override
    public String deleteArticle(int[] ids) {
        String s;
        try {
            articleDao.deleteArticle(ids);
            s = "删除成功";
        } catch (Exception e) {
            e.printStackTrace();
            s = "删除失败,找到子记录";
        }finally {
            DBUtils.release();
        }
        return s;
    }

    //添加文章  //涉及事务操作.
    @Override
    public String addArticle(Article article,int[] ids) {
        String s;
        try {
            DBUtils.startTransaction();//开启事务
            articleDao.addArticle(article); //添加文章  //a_id=0 ?
            int a_id = getCurrAId(); //得到数据库中,最近添加进来的ID的值.  //a_id=0 ?
            if (ids.length > 0) { //批量添加 关系
                for (int t_id : ids) {
                    relationDao.addRelation(a_id, t_id);//添加关系.
                }
            }
            s = "添加成功";
           DBUtils.commit(); //提交事务
        } catch (Exception e) {
            //回滚
            DBUtils.rollback();
            e.printStackTrace();
            s = "添加失败";
        }finally {
            //关闭资源
            DBUtils.release();
        }
        return s;
    }

    //得到最近添加的文章ID
    @Override
    public int getCurrAId() {
        return articleDao.getCurrAId();
    }

    //查看文章,byID
    @Override
    public Article getArticleById(int id) {
        try {
            return articleDao.getArticleById(id);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            DBUtils.release();
        }
        return null;
    }

    //修改文章 ById
    @Override
    public String updateArticle(Article article,int[] ids) {
        String s ;
        try {
            DBUtils.startTransaction(); //开启事务
            int a_id = article.getA_id();
            //删除所有的标签
            relationDao.delRelationByArticleId(a_id);
            //添加新的标签
            if (ids.length > 0) { //批量添加 关系
                for (int t_id : ids) {
                    relationDao.addRelation(a_id, t_id);//添加关系.
                }
            }
            articleDao.updateArticle(article);  //执行文章的更新
            s = "修改成功";
            DBUtils.commit();
        } catch (Exception e) {
            DBUtils.rollback();  //回滚
            e.printStackTrace();
            s = "修改失败";
            DBUtils.endTransaction(); //关闭事务
        }finally {
            DBUtils.release();
        }
        return s;
    }
}
