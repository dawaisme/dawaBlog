package com.dawa.blog.dao;

import com.dawa.blog.entity.Article;
import com.dawa.blog.utils.PageBean;

import java.util.List;

public interface ArticleDao {
    //查询所有文章
    public List<Article> getAllArticle() throws Exception;

    //分页查询所有文章
    public void getAllArticleBySplit(PageBean pageBean) throws Exception;

    //取得文章的总数
    public int getArticleCount();

    //删除文章 (根据ID删除,单个或者批量)
    public void deleteArticle(int[] ids) throws Exception;

    //添加文章
    public void addArticle(Article article) throws Exception;

    //得到最近添加的文章的ID
    public int getCurrAId();

    //查看文章 ById
    public Article getArticleById(int id) throws Exception;

    //更新文章
    public void updateArticle(Article article) throws Exception;

}
