package com.dawa.blog.dao;

import com.dawa.blog.entity.ArticleType;

import java.util.List;

public interface RelationDao {
    /**
     * //添加关系
     */
    public void addRelation(int a_id,int t_id) throws Exception;

    /**
     * //查看关系 (By ArticleId)  用于添加的事务(回显标签)
     */
    public List<ArticleType> getRelationByArticleId(int articleId);

    //删除关系 (By ArticleId)  用于修改的事务
    public void delRelationByArticleId(int articleId) throws Exception;
}
