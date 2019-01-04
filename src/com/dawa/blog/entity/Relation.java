package com.dawa.blog.entity;

/**
 *   a_id number(10) references article(a_id) ,--文章id
 *   t_id number(10) references article_type(t_id) ,--文章类别 id
 *   r_id number(10) primary key --关系编号
 */
public class Relation {
    private int r_id;
    private Article article;
    private ArticleType articleType;

    public Relation() {
    }

    public Relation(int r_id, Article article, ArticleType articleType) {
        this.r_id = r_id;
        this.article = article;
        this.articleType = articleType;
    }

    public int getR_id() {
        return r_id;
    }

    public void setR_id(int r_id) {
        this.r_id = r_id;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public ArticleType getArticleType() {
        return articleType;
    }

    public void setArticleType(ArticleType articleType) {
        this.articleType = articleType;
    }
}
