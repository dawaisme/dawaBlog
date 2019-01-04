package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.RelationBiz;
import com.dawa.blog.dao.RelationDao;
import com.dawa.blog.dao.impl.RelationDaoImpl;
import com.dawa.blog.entity.ArticleType;

import java.util.List;

/**
 * @author dawa
 */
public class RelationBizImpl implements RelationBiz {
    private RelationDao relationDao = new RelationDaoImpl();

    /**
     * //查询关系列表 根据文章ID查询
     */
    @Override
    public List<ArticleType> getRelationByAId(int aId) {
        return relationDao.getRelationByArticleId(aId);
    }

    /**
     * //删除关系列表 根据文章ID删除
     */
    @Override
    public void delRelationById(int aId) {
        try {
            relationDao.delRelationByArticleId(aId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
