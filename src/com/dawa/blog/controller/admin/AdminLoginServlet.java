package com.dawa.blog.controller.admin;

import com.dawa.blog.biz.BlogAdminBiz;
import com.dawa.blog.biz.TypeTypeBiz;
import com.dawa.blog.biz.impl.BlogAdminBizImpl;
import com.dawa.blog.biz.impl.TypeTypeBizImpl;
import com.dawa.blog.controller.BaseServlet;
import com.dawa.blog.entity.BlogAdmin;
import com.dawa.blog.entity.TypeType;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

@WebServlet(name = "AdminLoginServlet", urlPatterns = "/admin/login.do")
public class AdminLoginServlet extends BaseServlet {
    //后台登陆方法
    public void login(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        BlogAdminBiz blogAdminBiz = new BlogAdminBizImpl();
        String username = request.getParameter("username"); //用户名
        String password = request.getParameter("password"); //密码
        String random = request.getParameter("random"); //验证码
        String remember = request.getParameter("remember");//记住密码

        //构建管理员用户对象
        BlogAdmin blogAdmin = new BlogAdmin();
        blogAdmin.setA_username(username);
        blogAdmin.setA_password(password);

        //第一步判断验证码是否正确.如果不正确,直接打回
        if (session.getAttribute("random").equals(random)) { //验证码匹配,进行账号密码匹配

            HashMap map = blogAdminBiz.adminLogin(blogAdmin);
            String login_flag = (String) map.get("login_flag");
            if ("登陆成功".equals(login_flag)) {//返回的状态码为登陆成功,跳转到登陆页面
                session.setAttribute("login_flag", login_flag); //设置登陆状态
                //判断是否要记住密码.
                if ("记住密码".equals(remember)) {//要记住密码
                    Cookie cookie = new Cookie("username&password", username + "&" + password);
                    cookie.setMaxAge(60 * 60 * 60 * 24 * 7); //cookie有效时间7天
                    response.addCookie(cookie);
                } else { //不记住密码
                    Cookie cookie = new Cookie("username&password", "");
                    cookie.setMaxAge(0); //cookie有效时间7天
                    response.addCookie(cookie);
                }
                session.setAttribute("admin",map.get("admin")); //User对象存到session中.

                //在登陆的同时,查询出分类的类别,方便后面使用
                TypeTypeBiz typeTypeBiz = new TypeTypeBizImpl();
                List<TypeType> allTypeType = typeTypeBiz.getAllTypeType();
                session.setAttribute("allTypeType",allTypeType);
                response.sendRedirect(request.getContextPath() + "/admin/index.jsp");//登陆成功,进入系统
            } else {//返回的状态码不是登陆成功, 将存到session中.准备返回给用户
                session.setAttribute("login_flag", login_flag); //设置登陆状态
                response.sendRedirect(request.getContextPath() + "/admin/login.jsp");//登陆失败,从新登陆
            }
        } else {//验证码不正确.打回登陆页面,做出提示
            session.setAttribute("login_flag", "请输入正确的验证码"); //设置登陆状态
            response.sendRedirect(request.getContextPath() + "/admin/login.jsp");//登陆失败,从新登陆
        }
    }

    //后台注销登录方法
    public void logout(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        HttpSession session = request.getSession();
        session.removeAttribute("admin");
        //重定向到登陆页面
        response.sendRedirect(request.getContextPath()+"/admin/login.jsp");

    }

    //随机验证码方法
    public void random(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        response.setContentType("image/jpeg");
        // 设置页面缓存
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        // 在内存中创建图片,宽和高
        int width = 60, height = 20;
        BufferedImage pic = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);
        // 画笔
        Graphics gc = pic.getGraphics();
        // 颜色
        gc.setColor(getRandColor(200, 250));
        gc.fillRect(0, 0, width, height);
        // 设置图像字体
        gc.setFont(new Font("Times New Roman", Font.PLAIN, 20));
        // 设置干扰线
        Random r = new Random();
        for (int i = 0; i < 200; i++) {
            int x1 = r.nextInt(width);
            int y1 = r.nextInt(height);
            int x2 = r.nextInt(15);
            int y2 = r.nextInt(15);
            gc.setColor(getRandColor(160, 200));
            gc.drawLine(x1, y1, x1 + x2, y1 + y2);
        }
        // 设置干扰点
        for (int i = 0; i < 100; i++) {
            int x = r.nextInt(width);
            int y = r.nextInt(height);
            gc.setColor(getRandColor(120, 240));
            gc.drawOval(x, y, 0, 0);
        }
        // 随机产生4个数字的验证码
        String RS = r.nextInt(9000) + 1000 + "";
        // 将r验证码用drawString函数显示到图像里
        gc.setColor(new Color(20 + r.nextInt(110), 20 + r.nextInt(110), 20 + r
                .nextInt(110)));
        gc.drawString(RS, 10, 16);
        // 释放笔资源
        gc.dispose();
        // 存到session中
        session.setAttribute("random", RS);
        // 输出生成后的验证码图像到页面
        ImageIO.write(pic, "JPEG", response.getOutputStream());
    }

    //随机验证码附带方法
    private static Color getRandColor(int min, int max) {
        Random r = new Random();
        if (min > 255)
            min = 255;
        if (max > 255)
            max = 255;
        int red = r.nextInt(max - min) + min;
        int green = r.nextInt(max - min) + min;
        int blue = r.nextInt(max - min) + min;
        return new Color(red, green, blue);
    }
}


