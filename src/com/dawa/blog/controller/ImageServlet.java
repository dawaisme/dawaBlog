package com.dawa.blog.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
@WebServlet(name = "ImageServlet",urlPatterns = "/imageServlet.do")
public class ImageServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        this.doPost(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
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
