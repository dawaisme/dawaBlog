package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.ArticleTypeDao;
import com.dawa.blog.entity.ArticleType;
import com.dawa.blog.utils.DBUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class ArticleTypeDaoImpl implements ArticleTypeDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);
    //添加文章类型.
    @Override
    public int addArticleType(ArticleType articleType) throws SQLException {
        String sql = "insert into article_type(t_id,t_name,t_color,type_id) values(article_type_t_id.nextval,?,?,?)";
        Object[] objects = {articleType.getT_name(),articleType.getT_color(),articleType.getTypeType().getType_id()};
        return runner.update(sql, objects);
    }

    //修改文章类型.
    @Override
    public int updateArticleType(ArticleType articleType) throws SQLException {
        String sql = "update article_type set t_name=?,type_id=?,t_color=? where t_id=? ";
        Object[] objects = {articleType.getT_name(),articleType.getTypeType().getType_id(),articleType.getT_color(),articleType.getT_id()};
        return runner.update(sql, objects);
    }

    //删除文章类型.
    @Override
    public int delArticleType(ArticleType articleType) throws SQLException {
        String sql = "delete from article_type where t_id=?";
        Object[] objects = {articleType.getT_id()};
        return runner.update(sql, objects);
    }

    /**
     * //分类查询全部
     */
    @Override
    public List<ArticleType> getAllArticleTypeByTypeId(int type_id) throws SQLException {
        String sql = "select t_id,t_name,t_color,a.type_id type_id,type_name from article_type a ,type_type t where a.type_id=t.type_id and  a.type_id=?";
        Object[] objects = {type_id};
        return runner.query(sql, new BeanListHandler<>(ArticleType.class),objects);
    }

    /**
     * 根据文章类型ID,查询该类型的文章数量
     */
    @Override
    public int getArticleCountByTId(int tId) {
        int count = 0;
        String sql = "select count(*) count from relation where t_id =?";
        Object[] objects = {tId};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        if (rs != null) {
            try {
                while (rs.next()) {
                    count = rs.getInt("count");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return count;
    }

}
