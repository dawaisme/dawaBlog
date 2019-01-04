package com.dawa.blog.dao.impl;

import com.dawa.blog.dao.ArticleDao;
import com.dawa.blog.entity.Article;
import com.dawa.blog.utils.DBUtils;
import com.dawa.blog.utils.PageBean;
import org.apache.commons.dbutils.QueryRunner;

import java.sql.Clob;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class ArticleDaoImpl implements ArticleDao {
    private QueryRunner runner = new QueryRunner(DBUtils.dataSource);

    //得到所有的文章
    @Override
    public List<Article> getAllArticle() throws SQLException {
        List<Article> list = new ArrayList<>();

        String sql = "select a_id,a_title,a_brief,a_content,a_image,is_view,is_top,a_author,a_pviews,create_time,update_time from article";
        Object[] objects = {};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        if (rs != null) {
            while (rs.next()) {
                Article article = new Article();
                article.setA_id(rs.getInt("a_id"));
                article.setA_title(rs.getString("a_title"));
                article.setA_brief(rs.getString("a_brief"));
                //clob数据
                Clob clob = rs.getClob("a_content");
                //处理Clob类型数据
                String a_content = "";
                if (clob != null) {
                    a_content = clob.getSubString((long) 1, (int) clob.length());
                }
                article.setA_content(a_content);

                article.setA_image(rs.getString("a_image"));
                article.setIs_view(rs.getString("is_view"));
                article.setIs_top(rs.getString("is_top"));
                article.setA_author(rs.getString("a_author"));
                article.setA_pviews(rs.getInt("a_pviews"));
                Date create_time = rs.getDate("create_time");
                Date update_time = rs.getDate("update_time");
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                //格式化时间
                article.setCreate_time(sdf.format(create_time));
                article.setUpdate_time(sdf.format(update_time));
                list.add(article);
            }
        }
        return list;
    }

    //分页查询所有文章
    @Override
    public void getAllArticleBySplit(PageBean pageBean) throws Exception {
        //起始记录 (当前页-1)*每页条数  终止记录:当前页*每页条数
        String sql = "select * from (select rownum rn,temp.* from (select * from article order by a_id desc) temp )  where rn > ? and rn<= ?";
        Object[] objects = {(pageBean.getCurrentPage() - 1) * pageBean.getPageSize(), pageBean.getCurrentPage() * pageBean.getPageSize()};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        if (rs != null) {
            while (rs.next()) {
                Article article = new Article();
                article.setA_id(rs.getInt("a_id"));
                article.setA_title(rs.getString("a_title"));
                article.setA_brief(rs.getString("a_brief"));
                //clob数据
                Clob clob = rs.getClob("a_content");
                //处理Clob类型数据
                String a_content = "";
                if (clob != null) {
                    a_content = clob.getSubString((long) 1, (int) clob.length());
                }
                article.setA_content(a_content);

                article.setA_image(rs.getString("a_image"));
                article.setIs_view(rs.getString("is_view"));
                article.setIs_top(rs.getString("is_top"));
                article.setA_author(rs.getString("a_author"));
                article.setA_pviews(rs.getInt("a_pviews"));
                Date create_time = rs.getDate("create_time");
                Date update_time = rs.getDate("update_time");
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                //格式化时间
                article.setCreate_time(sdf.format(create_time));
                article.setUpdate_time(sdf.format(update_time));
                pageBean.getList().add(article);
            }
        }
    }

    //得到文章总数
    @Override
    public int getArticleCount() {
        String sql = "select count(*) shu from article";
        Object[] objects = {};
        DBUtils.myExecuteQuery(sql, objects);
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        try {
            if (rs != null) {
                while (rs.next()) {
                    return rs.getInt("shu");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    //删除文章 (根据ID删除)
    @Override
    public void deleteArticle(int[] ids) throws Exception {
        String sql = "delete from article where a_id = ?";
        Object[][] objects = new Object[ids.length][1];
        for (int i = 0; i < ids.length; i++) {
            objects[i][0] = ids[i];
        }
        runner.batch(sql, objects);
    }

    //添加文章
    @Override
    public void addArticle(Article article) throws Exception {
        String sql = "insert into article(a_id,a_title,a_brief,a_content,a_image,is_view,is_top) values(article_a_id.nextval,?,?,?,?,?,?)";
        Object[] objects = {article.getA_title(), article.getA_brief(), article.getA_content(), article.getA_image(), article.getIs_view(), article.getIs_top()};
        DBUtils.myExecuteUpdate(sql, objects);
    }

    //得到最近添加文章的ID 用于事务
    @Override
    public int getCurrAId() {
        int id = 0;
        String sql = "select article_a_id.currval num from dual";
        Object[] objects = {};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        try {
            if (rs != null) {
                while (rs.next()) {
                    id = rs.getInt("num");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return id;
    }

    //查看文章 ById
    @Override
    public Article getArticleById(int id) throws Exception {
        Article article = new Article();
        String sql = "select a_id,a_title,a_brief,a_content,a_image,is_view,is_top,a_author,a_pviews,create_time,update_time from article where a_id=?";
        Object[] objects = {id};
        ResultSet rs = DBUtils.myExecuteQuery(sql, objects);
        if (rs != null) {
            while (rs.next()) {
                article.setA_id(rs.getInt("a_id"));
                article.setA_title(rs.getString("a_title"));
                article.setA_brief(rs.getString("a_brief"));
                //clob数据
                Clob clob = rs.getClob("a_content");
                //处理Clob类型数据
                String a_content = "";
                if (clob != null) {
                    a_content = clob.getSubString((long) 1, (int) clob.length());
                }
                article.setA_content(a_content);
                article.setA_image(rs.getString("a_image"));
                article.setIs_view(rs.getString("is_view"));
                article.setIs_top(rs.getString("is_top"));
                article.setA_author(rs.getString("a_author"));
                article.setA_pviews(rs.getInt("a_pviews"));
                Date create_time = rs.getDate("create_time");
                Date update_time = rs.getDate("update_time");
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                //格式化时间
                article.setCreate_time(sdf.format(create_time));
                article.setUpdate_time(sdf.format(update_time));
            }
        }
        return article;
    }

    //更新文章
    @Override
    public void updateArticle(Article article) throws Exception {
        String sql = "update article set a_title=?,a_brief=?,a_content=?,a_image=?,is_view=?,is_top=?,update_time=sysdate where a_id=?";
        Object[] objects = {article.getA_title(), article.getA_brief(), article.getA_content(), article.getA_image(), article.getIs_view(), article.getIs_top(), article.getA_id()};
        runner.update(sql, objects);
    }

}
