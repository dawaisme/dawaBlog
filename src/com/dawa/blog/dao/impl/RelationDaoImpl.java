package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.RelationDao;
import com.dawa.blog.entity.ArticleType;
import com.dawa.blog.entity.Relation;
import com.dawa.blog.entity.TypeType;
import com.dawa.blog.utils.DBUtils;
import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class RelationDaoImpl implements RelationDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);
    //添加关系 / 批量添加.
    @Override
    public void addRelation(int a_id,int t_id) throws SQLException {
        String sql = "insert into relation(r_id,a_id,t_id) values(relation_a_id.nextval,?,?)";
        Object[] objects = {a_id,t_id};
        DBUtils.myExecuteUpdate(sql, objects);
    }

    //查看关系 (By ArticleId)
    @Override
    public List<ArticleType> getRelationByArticleId(int articleId) {
        List<ArticleType> list = new ArrayList<>();
        String sql = "select a_id, relation.t_id, r_id, t_name, t_color, type_id from relation,article_type where relation.t_id=article_type.t_id and a_id =?";
        Object[] objects = {articleId};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        try {
            if (rs != null) {
                while (rs.next()) {
                    ArticleType articleType = new ArticleType();
                    articleType.setT_id(rs.getInt("t_id"));
                    articleType.setT_name(rs.getString("t_name"));
                    articleType.setT_color(rs.getString("t_color"));
                    articleType.setTypeType(new TypeType(rs.getInt("type_id")));
                    list.add(articleType);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    //删除关系 (By ArticleId)  用于修改的事务
    @Override
    public void delRelationByArticleId(int articleId) throws SQLException {
        String sql = "delete from relation where a_id=?";
        Object[] objects = {articleId};
        DBUtils.myExecuteUpdate(sql, objects);
    }
}
