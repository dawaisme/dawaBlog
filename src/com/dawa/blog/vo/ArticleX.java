package com.dawa.blog.vo;

import com.dawa.blog.entity.Article;
import com.dawa.blog.entity.ArticleType;

import java.util.List;

public class ArticleX {
    private Article article;
    private List<ArticleType> typeList;


    public ArticleX() {
    }

    public ArticleX(Article article, List<ArticleType> typeList) {
        this.article = article;
        this.typeList = typeList;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public List<ArticleType> getTypeList() {
        return typeList;
    }

    public void setTypeList(List<ArticleType> typeList) {
        this.typeList = typeList;
    }

    @Override
    public String toString() {
        return "ArticleX{" +
                "article=" + article +
                ", typeList=" + typeList +
                '}';
    }
}

