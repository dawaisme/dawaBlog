package com.dawa.blog.biz;

import com.dawa.blog.entity.ArticleType;

import java.util.List;

public interface ArticleTypeBiz {
    /**
     * //添加文章类型
     */
    public int addArticleType(ArticleType articleType);

    /**
     * 修改文章类型
     */
    public int updateArticleType(ArticleType articleType) ;

    /**
     * //删除文章类型
     */
    public String delArticleType(ArticleType articleType);

    /**
     * //分类查询全部
     */
    public List<ArticleType> getAllArticleTypeByTypeId(int type_id);

    /**
     * 根据类型ID,得到该类型对应 所有文章的数量
     */
    public int getArticleCountByTId(int tId);
}
