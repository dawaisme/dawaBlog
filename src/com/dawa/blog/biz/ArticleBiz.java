package com.dawa.blog.biz;

import com.dawa.blog.entity.Article;
import com.dawa.blog.utils.PageBean;

import java.util.List;

public interface ArticleBiz {
    //获取文章列表
    public List<Article> getAllArticle();

    //分页查询文章列表
    public void getAllArticleBySplit(PageBean pageBean);

    //得到文章总数
    public int getArticleCount();

    //删除文章  (单个或者批量)
    public String deleteArticle(int[] ids);

    //添加文章
    public String addArticle(Article article,int[] ids);

    //得到最近添加的文章ID
    public int getCurrAId();

    //查看文章  ByID
    public Article getArticleById(int id);

    //修改文章 ById
    public String updateArticle(Article article,int[] ids);

}
