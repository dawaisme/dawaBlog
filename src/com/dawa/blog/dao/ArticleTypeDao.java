package com.dawa.blog.dao;

import com.dawa.blog.entity.ArticleType;

import java.sql.SQLException;
import java.util.List;

public interface ArticleTypeDao {
    /**
     * 添加文章类型
     */
    public int addArticleType(ArticleType articleType) throws Exception;

    /**
     * 修改文章类型
     */
    public int updateArticleType(ArticleType articleType) throws Exception;

    /**
     * 删除文章类型
     */
    public int delArticleType(ArticleType articleType) throws Exception;

    /**
     * 分类查询全部
     */
    public List<ArticleType> getAllArticleTypeByTypeId(int type_id) throws Exception;


    /**
     * 根据文章类型ID,查询该类型的文章数量
     */
    public int getArticleCountByTId(int tId);
}
