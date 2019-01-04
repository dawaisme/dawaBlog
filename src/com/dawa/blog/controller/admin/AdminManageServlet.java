package com.dawa.blog.controller.admin;

import com.dawa.blog.biz.*;
import com.dawa.blog.biz.impl.*;
import com.dawa.blog.controller.BaseServlet;
import com.dawa.blog.entity.*;
import com.dawa.blog.utils.FileNameUtil;
import com.dawa.blog.utils.PageBean;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.IOException;
import java.util.List;

/**
 * @author dawa
 */
@WebServlet(name = "AdminManageServlet", urlPatterns = "/admin/admin.do")
@MultipartConfig
public class AdminManageServlet extends BaseServlet {
    private ArticleTypeBiz articleTypeBiz = new ArticleTypeBizImpl();
    private ArticleBiz articleBiz = new ArticleBizImpl();
    private RelationBiz relationBiz = new RelationBizImpl();
    private BlogAdminBiz blogAdminBiz = new BlogAdminBizImpl();
    private BlogUserBiz blogUserBiz = new BlogUserBizImpl();

    //管理员用户的操作
    /**
     * //查询管理员用户列表
     */
    public void getAllAdminUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<BlogAdmin> allAdminUser = blogAdminBiz.getAllAdminUser();
        Gson gson = new Gson();
        String s = gson.toJson(allAdminUser);
        System.out.println(s);
        response.getWriter().write(s);
    }

    /**
     * //查看单个用户详情 ById
     */
    public void getAdminUserDetailById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        BlogAdmin blogAdmin = blogAdminBiz.getAdminUserDetailById(id);
        Gson gson = new Gson();
        String s = gson.toJson(blogAdmin);
        System.out.println(s);
        response.getWriter().write(s);
    }

    // 博客用户的操作
    /**
     * 得到所有的用户
     */
    public void getAllUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<BlogUser> allUser = blogUserBiz.getAllUser();
        Gson gson = new Gson();
        String s = gson.toJson(allUser);
        System.out.println(s);
        response.getWriter().write(s);
    }


    //文章的操作
    /**
     * //得到所有的文章 (分页操作)
     */
    public void getALlArticle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String currentPage = request.getParameter("page");
        String pageSize = request.getParameter("limit");
        PageBean pageBean = new PageBean();
        if (pageSize != null) {
            //设置每页大小
            pageBean.setPageSize(Integer.parseInt(pageSize));
        }
        if (currentPage != null) {
            //设置每页大小
            pageBean.setCurrentPage(Integer.parseInt(currentPage));
        }
        //设置总行数
        pageBean.setAllRows(articleBiz.getArticleCount());
        articleBiz.getAllArticleBySplit(pageBean);
        //将取得的数据,转换为json格式.
        Gson gson = new Gson();
        String toJson = gson.toJson(pageBean.getList());
        //
        //{{"code":0,"msg":"","count":1000,"data":}
        String result = "{\"code\":200,\"msg\":\"\",\"count\":" + pageBean.getAllRows() + ",\"data\":" + toJson + "}";
        response.getWriter().write(result);
    }

    /**
     * //删除文章 (根据文章ID,删除文章)
     */
    public void deleteArticle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1,2,3,21,22,23,24,25,26,27  将格式转换为int 数组
        String json = request.getParameter("json");
        if (json != null) {
            // 切分数组
            String[] split = json.split(",");
            //数组的长度,等于切分后的数组的数组
            int[] ids = new int[split.length];
            for (int i = 0; i < split.length; i++) {
                ids[i] = Integer.parseInt(split[i]);
            }
            //删除执行
            String s = articleBiz.deleteArticle(ids);
            response.getWriter().write(s);
        }
    }

    //添加文章
    public void addArticle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String title = request.getParameter("title");
        String summary = request.getParameter("summary");
        String content = request.getParameter("content");
        String file = request.getParameter("file");
        String summaryimg = request.getParameter("summaryimg");
        String is_view = request.getParameter("isview");
        String is_top = request.getParameter("istop");
        String labelIds = request.getParameter("labelIds");
        String classifyIds = request.getParameter("classifyIds");
        String idss = labelIds + "," + classifyIds;
        int[] ids = null;
        //做字符串转数组的操作,  做批量添加关系的时候用.
        if (labelIds != null && classifyIds != null) {
            String[] split = idss.split(",");
            ids = new int[split.length];
            for (int i = 0; i < ids.length; i++) {
                ids[i] = Integer.parseInt(split[i]);
            }
        }
        Article article = new Article();
        article.setA_title(title);
        article.setA_brief(summary);
        article.setA_image(summaryimg);
        article.setA_content(content);
        article.setIs_view(is_view);
        article.setIs_top(is_top);
        //执行添加. 业务中包含了标签的业务操作.
        articleBiz.addArticle(article, ids);
        response.sendRedirect(request.getContextPath() + "/admin/article/article_list.jsp");
    }

    //查看文章
    public void getArticleById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        Article article = articleBiz.getArticleById(id);
        Gson gson = new Gson();
        //要回显的文章数据.
        String data = gson.toJson(article);
        //查看关系表,by 文章ID  // 要回显的关系数据.

        List<ArticleType> articleTypes = relationBiz.getRelationByAId(id);
        String s = "{\"data\":" + data + ",\"ids\":" + gson.toJson(articleTypes) + "}";
        response.getWriter().write(s);
    }

    /**
     * 修改文章
     */
    public void updateArticle(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取数据.
        int id = Integer.parseInt(request.getParameter("id"));
        String title = request.getParameter("title");
        String summary = request.getParameter("summary");
        String content = request.getParameter("content");
        String file = request.getParameter("file");
        String summaryimg = request.getParameter("summaryimg");
        String is_view = request.getParameter("isview");
        String is_top = request.getParameter("istop");
        String labelIds = request.getParameter("labelIds");
        String classifyIds = request.getParameter("classifyIds");
        String idss = labelIds + "," + classifyIds;
        int[] ids = null;
        //做字符串转数组的操作
        if (labelIds != null && classifyIds != null) {
            String[] split = idss.split(",");
            ids = new int[split.length];
            for (int i = 0; i < ids.length; i++) {
                ids[i] = Integer.parseInt(split[i]);
            }
        }

        Article article = new Article();
        article.setA_id(id);
        article.setA_title(title);
        article.setA_brief(summary);
        article.setA_image(summaryimg);
        article.setA_content(content);
        article.setIs_view(is_view);
        article.setIs_top(is_top);

        articleBiz.updateArticle(article, ids);
        response.sendRedirect(request.getContextPath() + "/admin/article/article_list.jsp");
    }

    /**
     * //文章图片上传.
     */
    public void uploadImg(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Part part = request.getPart("file");
        //接住文件名
        String realFileName = FileNameUtil.getRealFileName(part.getHeader("Content-Disposition"));
        //构建存储在服务器端指定目录下的文件名,要使用UUID生成唯一名字
        String saveFileName = FileNameUtil.getUUIDFileName() + FileNameUtil.getFileType(realFileName);
        //取出真正的远程的Tomcat目录下发布出去的项目的指定的目录路径
        String path = request.getServletContext().getRealPath("/res/images/upload/article");
        //真正的将文件写在指定的位置.
        part.write(path + "/" + saveFileName);
        //{"path":"/res/images/upload/article/saveFileName"}
        String p = "{\"path\":\"/res/images/upload/article/" + saveFileName + "\"}";
        System.out.println(p);
        response.getWriter().write(p);
    }


    // 文章类别的操作

    /**
     * //添加文章类型的方法
     */

    public void addArticleType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //前台ajax传来的是json参数.如何接收

        String name = request.getParameter("articleTypeName");
        int type = Integer.parseInt(request.getParameter("articleTypeType"));
        String color = request.getParameter("articleTypeColor");
        ArticleType articleType = new ArticleType();

        articleType.setT_name(name);
        articleType.setT_color(color);
        articleType.setTypeType(new TypeType(type));

        int i = articleTypeBiz.addArticleType(articleType);
        response.sendRedirect(request.getContextPath() + "/admin/article/article_classification_label.jsp");

    }

    /**
     * //修改文章分类
     */
    public void updateArticleType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");
        int type = Integer.parseInt(request.getParameter("type"));
        String color = request.getParameter("color");

        ArticleType articleType = new ArticleType();
        articleType.setT_id(id);
        articleType.setT_name(name);
        articleType.setT_color(color);
        articleType.setTypeType(new TypeType(type));
        //执行修改
        articleTypeBiz.updateArticleType(articleType);
        response.sendRedirect(request.getContextPath() + "/admin/article/article_classification_label.jsp");
    }

    /**
     * //删除文章分类
     */
    public void delArticleType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        //执行删除
        String s = articleTypeBiz.delArticleType(new ArticleType(id));
        response.getWriter().write(s);
    }

    /**
     * 查询出所有的文章分类
     */
    public void getAllArticleType(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<ArticleType> label = articleTypeBiz.getAllArticleTypeByTypeId(1);
        List<ArticleType> classify = articleTypeBiz.getAllArticleTypeByTypeId(2);
        Gson gson = new Gson();

        String labels = gson.toJson(label);
        String classifys = gson.toJson(classify);
        //{"labels":labels,"classifys",classifys}
        String json = "{\"labels\":" + labels + ",\"classifys\":" + classifys + "}";
        response.getWriter().write(json);

    }

}
