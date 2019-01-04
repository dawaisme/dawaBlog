package com.dawa.blog.controller.front;

import com.dawa.blog.biz.ArticleBiz;
import com.dawa.blog.biz.ArticleTypeBiz;
import com.dawa.blog.biz.impl.ArticleBizImpl;
import com.dawa.blog.biz.impl.ArticleTypeBizImpl;
import com.dawa.blog.controller.BaseServlet;
import com.dawa.blog.entity.Article;
import com.dawa.blog.entity.ArticleType;
import com.dawa.blog.utils.PageBean;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "FrontManageServlet",urlPatterns = "/front/front.do")
public class FrontManageServlet extends BaseServlet {
    private ArticleBiz articleBiz = new ArticleBizImpl();
    private ArticleTypeBiz articleTypeBiz = new ArticleTypeBizImpl();

    /**
     *  ajax 获取 标签列表
     */
    public void initTypeAjax(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<ArticleType> allArticleTypeByType1 = articleTypeBiz.getAllArticleTypeByTypeId(1);
        List<ArticleType> allArticleTypeByType2 = articleTypeBiz.getAllArticleTypeByTypeId(2);
        Gson gson = new Gson();
        //标签的列表
        String s1 = gson.toJson(allArticleTypeByType1);
        //分类的列表
        String s2 = gson.toJson(allArticleTypeByType2);
        int articleCount = articleBiz.getArticleCount();
        //{"labels":s1,"fenlei":s2,"articleCount":articleCount}
        String s = "{\"labels\":"+s1+",\"fenlei\":"+s2+",\"articleCount\":"+articleCount+"}";
        response.getWriter().write(s);
    }

    /**
     * 得到文章列表 (分页)
     */
    public void getArticleList(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //页数
        String page = request.getParameter("page");
        String pageSize = request.getParameter("pageSize");
        PageBean pageBean = new PageBean();

        if (page != null) {
            pageBean.setCurrentPage(Integer.parseInt(page));
        }
        if (pageSize != null) {
            pageBean.setPageSize(Integer.parseInt(pageSize));
        }

        articleBiz.getAllArticleBySplit(pageBean);
        Gson gson = new Gson();
        String s = gson.toJson(pageBean);
        response.getWriter().write(s);

    }

    /**
     * 根据文章类型ID,得到对应的文章的数量
     */
    public void getArticleCountByTId(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int tId = Integer.parseInt(request.getParameter("tId"));
        int count = articleTypeBiz.getArticleCountByTId(tId);
        String data = "{\"count\":"+count+"}";
        response.getWriter().write(data);
    }


}
