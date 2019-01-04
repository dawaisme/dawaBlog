package com.dawa.blog.biz;

import com.dawa.blog.entity.ArticleType;

import java.util.List;

public interface RelationBiz {
    /**
     * //查询关系列表 根据文章ID查询
     */
    public List<ArticleType> getRelationByAId(int aId);

    /**
     * //删除关系列表 根据文章ID删除
     */
    public void delRelationById(int aId);
}
