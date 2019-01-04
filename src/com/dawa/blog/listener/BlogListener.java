package com.dawa.blog.listener;

import com.dawa.blog.biz.ArticleBiz;
import com.dawa.blog.biz.impl.ArticleBizImpl;
import com.dawa.blog.utils.PageBean;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.*;

/**
 * @author dawa
 */
@WebListener
public class BlogListener implements ServletContextListener,
        HttpSessionListener, HttpSessionAttributeListener {

    private ArticleBiz articleBiz = new ArticleBizImpl();

    // -------------------------------------------------------
    // ServletContextListener implementation
    // -------------------------------------------------------

    @Override
    public void contextInitialized(ServletContextEvent sce) {
/*
        //监听器: 用来做初始化设置:
        // 1.博客主页数据的初始化读取.
        PageBean pageBean = new PageBean();
        pageBean.setPageSize(5);
        articleBiz.getAllArticleBySplit(pageBean);
        sce.getServletContext().setAttribute("pageBean",pageBean);
*/

    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
      /* This method is invoked when the Servlet Context 
         (the Web application) is undeployed or 
         Application Server shuts down.
      */
    }

    // -------------------------------------------------------
    // HttpSessionListener implementation
    // -------------------------------------------------------

    @Override
    public void sessionCreated(HttpSessionEvent se) {
        /* Session is created. */
        HttpSession session = se.getSession();
        //监听器: 用来做初始化设置:
        // 1.博客主页数据的初始化读取.
        PageBean pageBean = new PageBean();
        pageBean.setPageSize(5);
        articleBiz.getAllArticleBySplit(pageBean);
        session.setAttribute("pageBean",pageBean);

    }

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        /* Session is destroyed. */
    }

    // -------------------------------------------------------
    // HttpSessionAttributeListener implementation
    // -------------------------------------------------------

    @Override
    public void attributeAdded(HttpSessionBindingEvent sbe) {
      /* This method is called when an attribute 
         is added to a session.
      */
    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent sbe) {
      /* This method is called when an attribute
         is removed from a session.
      */
    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent sbe) {
      /* This method is invoked when an attibute
         is replaced in a session.
      */
    }
}
