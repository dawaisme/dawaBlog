package com.dawa.blog.biz.impl;

import com.dawa.blog.biz.ArticleTypeBiz;
import com.dawa.blog.dao.ArticleTypeDao;
import com.dawa.blog.dao.impl.ArticleTypeDaoImpl;
import com.dawa.blog.entity.ArticleType;
import com.dawa.blog.utils.DBUtils;

import java.util.List;

public class ArticleTypeBizImpl implements ArticleTypeBiz {
    private ArticleTypeDao articleTypeDao = new ArticleTypeDaoImpl();

    //添加文章类型
    @Override
    public int addArticleType(ArticleType articleType) {
        try {
            return articleTypeDao.addArticleType(articleType);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return 0;
    }

    //修改文章类型
    @Override
    public int updateArticleType(ArticleType articleType) {
        try {
            return articleTypeDao.updateArticleType(articleType);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return 0;
    }

    //删除文章类型
    @Override
    public String delArticleType(ArticleType articleType) {
        String s;
        try {
            articleTypeDao.delArticleType(articleType);
            s = "删除成功";
        } catch (Exception e) {
            e.printStackTrace();
            s = "删除失败,找到子记录";
        }finally {
            DBUtils.release();
        }
        return s;
    }

    //根据分类,查询所有文章类型
    @Override
    public List<ArticleType> getAllArticleTypeByTypeId(int type_id) {
        try {
            return articleTypeDao.getAllArticleTypeByTypeId(type_id);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            DBUtils.release();
        }
        return null;
    }

    /**
     * 根据类型ID,得到该类型对应 所有文章的数量
     */
    @Override
    public int getArticleCountByTId(int tId) {
        return articleTypeDao.getArticleCountByTId(tId);
    }
}
