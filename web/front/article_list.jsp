<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>dawa大娃bigbaby-文章列表</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/web/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/web/article_list.css"/>
</head>

<body>
<!--顶部导航条-->
<header class="myheader animated top is_top_true">
    <!-- 底部信息 -->
    <div class="layui-container">
        <!--logo部分-->
        <div class="logo">
            <a href="javascript:">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                     viewBox="0 0 170.000000 45.000000" preserveAspectRatio="xMidYMid meet"
                     color-interpolation-filters="sRGB" class="el-tooltip" style="margin: auto;">
                    <g fill="#F75733" class="icon-svg-group iconsvg" transform="translate(0,0)">
                        <g transform="translate(0,0)">
                            <g class="iconsvg-namesvg" transform="translate(0,0)">
                                <g>
                                    <path transform="translate(-2.16,33.16)"
                                          d="M37.76-4.64L34.84 2.76L24.48 2.76L24.48-7.44L16.12-7.44L16.12-21.60L20.44-21.60L20.44-11.72L24.48-11.72L24.48-24.68L15.64-24.68L15.64-29L24.48-29L24.48-33.16L28.80-33.16L28.80-29L37.80-29L37.80-24.68L28.80-24.68L28.80-11.72L33.04-11.72L33.04-21.60L37.36-21.60L37.36-7.44L28.80-7.44L28.80-1.52L31.92-1.52L33.76-6.20ZM14.92-6L2.32-6L2.32-10.16L7.44-17.96L2.36-17.96L2.36-22.16L8.92-33.16L12.60-30.92L7.40-22.24L10.24-22.24L11.92-24.76L15.52-22.44L7.56-10.32L14.92-10.32ZM14.96 1.88L2.16 1.88L2.16-2.40L14.96-2.40ZM77.92-3.64L71.92-3.64L74.48-1.12L70.64 2.68L66.88-1.12L69.36-3.64L50.60-3.64L53.12-1.12L49.32 2.68L45.48-1.12L48-3.64L42.04-3.64L42.04-7.56L47.16-7.56L47.16-25.56L57.84-25.56L57.84-27.44L42.92-27.44L42.92-31.40L57.84-31.40L57.84-33.08L62.16-33.08L62.16-31.40L77.04-31.40L77.04-27.44L62.16-27.44L62.16-25.56L72.84-25.56L72.84-7.56L77.92-7.56ZM56.68-10.08L59-12.40L56.68-14.76L59-17.08L56.68-19.36L58.92-21.60L51.12-21.60L51.12-7.56L59.20-7.56ZM68.88-21.60L61.08-21.60L63.32-19.40L61-17.08L63.32-14.76L60.96-12.40L63.32-10.08L60.80-7.56L68.88-7.56ZM83.08-9.80L88.08-9.80L88.08-20.56L100.36-20.56L100.36-26.16L91.20-26.16L85.40-19.40L82.12-22.16L88.12-29.24L88.12-33.08L92.44-33.08L92.44-30.44L116.60-30.44L116.60-26.16L104.68-26.16L104.68-20.56L116.60-20.56L116.60-16.24L104.68-16.24L104.68-9.80L117.84-9.80L117.84-5.48L104.68-5.48L104.68 2.76L100.36 2.76L100.36-5.48L83.08-5.48ZM92.36-9.80L100.36-9.80L100.36-16.24L92.36-16.24ZM157.24-6.52L153.40 2.76L144.48 2.76L142.32-18.16L133.60-18.08L133.56-22.36L141.88-22.40L140.84-32.52L145.12-32.96L146.20-22.44L157.68-22.56L157.72-18.28L146.64-18.20L148.36-1.56L150.52-1.56L153.28-8.16ZM135.28-30.40L132.20-26.56L132.20 2.68L127.88 2.68L127.88-21.16L125.64-18.40L122.24-21.08L131.92-33.08ZM149.76-28.40L153.56-32.24L157.40-28.40L153.56-24.60Z"></path>
                                </g>
                                <!---->
                            </g>
                            <g fill="#F75733" class="iconsvg-slogansvg"
                               transform="translate(0.001953125,40.1618766784668)">
                                <!---->
                                <rect x="94.828125" height="1" y="5.125" width="60.73046875"></rect>
                                <!---->
                                <g>
                                    <path transform="translate(-0.1875,8.71875)"
                                          d="M6.56 0L5.72-2.48L2.25-2.48L1.36 0L0.19 0L3.42-8.58L4.73-8.58L7.83 0L6.56 0ZM3.98-7.31L2.63-3.52L5.30-3.52L4.03-7.31L3.98-7.31ZM9.56-3.14L9.56-3.14L9.56-3.14Q9.61-0.75 11.25-0.70L11.25-0.70L11.25-0.70Q12.89-0.84 12.94-2.81L12.94-2.81L12.94-2.81Q12.98-5.48 11.25-5.48L11.25-5.48L11.25-5.48Q9.52-5.48 9.56-3.14ZM12.94-6.28L13.92-6.28L13.92-0.52L13.92-0.52Q14.02 2.53 11.06 2.53L11.06 2.53L11.06 2.53Q8.86 2.53 8.63 0.66L8.63 0.66L9.70 0.66L9.70 0.66Q9.89 1.69 11.11 1.69L11.11 1.69L11.11 1.69Q12.98 1.69 12.89-0.42L12.89-0.42L12.89-0.70L12.89-0.66L12.89-0.66Q12.33 0.09 11.20 0.09L11.20 0.09L11.20 0.09Q8.58 0 8.44-3.33L8.44-3.33L8.44-3.33Q8.58-6.33 11.06-6.47L11.06-6.47L11.06-6.47Q12.23-6.47 12.94-5.39L12.94-5.39L12.94-6.28ZM19.69-1.97L19.69-1.97L20.72-1.97L20.72-1.97Q20.53-0.89 19.59-0.23L19.59-0.23L19.59-0.23Q19.08 0.09 17.91 0.09L17.91 0.09L17.91 0.09Q15.23 0 15.09-2.95L15.09-2.95L15.09-2.95Q15.19-6.38 18.09-6.47L18.09-6.47L18.09-6.47Q20.77-6.42 20.81-2.77L20.81-2.77L16.22-2.77L16.22-2.77Q16.22-0.70 18.05-0.70L18.05-0.70L18.05-0.70Q19.36-0.80 19.69-1.97ZM16.22-3.61L16.22-3.61L19.73-3.61L19.73-3.61Q19.59-5.48 17.95-5.48L17.95-5.48L17.95-5.48Q16.41-5.34 16.22-3.61ZM25.03-3.14L25.03-3.14L25.03-3.14Q25.22-6.33 27.94-6.47L27.94-6.47L27.94-6.47Q30.66-6.33 30.84-3.14L30.84-3.14L30.84-3.14Q30.66 0 27.94 0.09L27.94 0.09L27.94 0.09Q25.22 0 25.03-3.14ZM26.11-3.14L26.11-3.14L26.11-3.14Q26.25-0.80 27.94-0.75L27.94-0.75L27.94-0.75Q29.63-0.80 29.77-3.14L29.77-3.14L29.77-3.14Q29.63-5.48 27.94-5.53L27.94-5.53L27.94-5.53Q26.25-5.48 26.11-3.14ZM34.41-6.28L34.41-5.39L33.33-5.39L33.33 0L32.30 0L32.30-5.39L31.45-5.39L31.45-6.28L32.30-6.28L32.30-7.31L32.30-7.31Q32.30-8.72 33.89-8.72L33.89-8.72L33.89-8.72Q34.17-8.72 34.41-8.67L34.41-8.67L34.41-7.78L34.41-7.78Q34.17-7.78 33.94-7.78L33.94-7.78L33.94-7.78Q33.33-7.78 33.33-7.03L33.33-7.03L33.33-6.28L34.41-6.28ZM38.72-6.28L39.80-6.28L39.80 0L38.72 0L38.72-6.28ZM39.80-8.58L39.80-7.41L38.72-7.41L38.72-8.58L39.80-8.58ZM46.41-4.27L46.41-4.27L46.41 0L45.38 0L45.38-3.84L45.38-3.84Q45.47-5.58 44.02-5.48L44.02-5.48L44.02-5.48Q42.42-5.39 42.38-3.42L42.38-3.42L42.38 0L41.30 0L41.30-6.28L42.33-6.28L42.33-5.39L42.33-5.39Q43.08-6.47 44.25-6.47L44.25-6.47L44.25-6.47Q46.36-6.42 46.41-4.27ZM53.06-4.27L53.06-4.27L53.06 0L52.03 0L52.03-3.84L52.03-3.84Q52.13-5.58 50.67-5.48L50.67-5.48L50.67-5.48Q49.08-5.39 49.03-3.42L49.03-3.42L49.03 0L47.95 0L47.95-6.28L48.98-6.28L48.98-5.39L48.98-5.39Q49.73-6.47 50.91-6.47L50.91-6.47L50.91-6.47Q53.02-6.42 53.06-4.27ZM54.28-3.14L54.28-3.14L54.28-3.14Q54.47-6.33 57.19-6.47L57.19-6.47L57.19-6.47Q59.91-6.33 60.09-3.14L60.09-3.14L60.09-3.14Q59.91 0 57.19 0.09L57.19 0.09L57.19 0.09Q54.47 0 54.28-3.14ZM55.36-3.14L55.36-3.14L55.36-3.14Q55.50-0.80 57.19-0.75L57.19-0.75L57.19-0.75Q58.88-0.80 59.02-3.14L59.02-3.14L59.02-3.14Q58.88-5.48 57.19-5.53L57.19-5.53L57.19-5.53Q55.50-5.48 55.36-3.14ZM66.23-4.13L66.23-4.13L65.20-4.13L65.20-4.13Q65.06-5.48 63.75-5.48L63.75-5.48L63.75-5.48Q62.06-5.39 61.97-3.14L61.97-3.14L61.97-3.14Q61.97-0.70 63.70-0.70L63.70-0.70L63.70-0.70Q64.97-0.80 65.20-2.20L65.20-2.20L66.23-2.20L66.23-2.20Q65.86 0.05 63.70 0.09L63.70 0.09L63.70 0.09Q60.98 0 60.89-2.95L60.89-2.95L60.89-2.95Q60.98-6.38 63.89-6.47L63.89-6.47L63.89-6.47Q65.95-6.42 66.23-4.13ZM71.58-1.97L71.58-1.97L72.61-1.97L72.61-1.97Q72.42-0.89 71.48-0.23L71.48-0.23L71.48-0.23Q70.97 0.09 69.80 0.09L69.80 0.09L69.80 0.09Q67.13 0 66.98-2.95L66.98-2.95L66.98-2.95Q67.08-6.38 69.98-6.47L69.98-6.47L69.98-6.47Q72.66-6.42 72.70-2.77L72.70-2.77L68.11-2.77L68.11-2.77Q68.11-0.70 69.94-0.70L69.94-0.70L69.94-0.70Q71.25-0.80 71.58-1.97ZM68.11-3.61L68.11-3.61L71.63-3.61L71.63-3.61Q71.48-5.48 69.84-5.48L69.84-5.48L69.84-5.48Q68.30-5.34 68.11-3.61ZM79.03-4.27L79.03-4.27L79.03 0L78 0L78-3.84L78-3.84Q78.09-5.58 76.64-5.48L76.64-5.48L76.64-5.48Q75.05-5.39 75-3.42L75-3.42L75 0L73.92 0L73.92-6.28L74.95-6.28L74.95-5.39L74.95-5.39Q75.70-6.47 76.88-6.47L76.88-6.47L76.88-6.47Q78.98-6.42 79.03-4.27ZM85.55-4.13L85.55-4.13L84.52-4.13L84.52-4.13Q84.38-5.48 83.06-5.48L83.06-5.48L83.06-5.48Q81.38-5.39 81.28-3.14L81.28-3.14L81.28-3.14Q81.28-0.70 83.02-0.70L83.02-0.70L83.02-0.70Q84.28-0.80 84.52-2.20L84.52-2.20L85.55-2.20L85.55-2.20Q85.17 0.05 83.02 0.09L83.02 0.09L83.02 0.09Q80.30 0 80.20-2.95L80.20-2.95L80.20-2.95Q80.30-6.38 83.20-6.47L83.20-6.47L83.20-6.47Q85.27-6.42 85.55-4.13ZM90.89-1.97L90.89-1.97L91.92-1.97L91.92-1.97Q91.73-0.89 90.80-0.23L90.80-0.23L90.80-0.23Q90.28 0.09 89.11 0.09L89.11 0.09L89.11 0.09Q86.44 0 86.30-2.95L86.30-2.95L86.30-2.95Q86.39-6.38 89.30-6.47L89.30-6.47L89.30-6.47Q91.97-6.42 92.02-2.77L92.02-2.77L87.42-2.77L87.42-2.77Q87.42-0.70 89.25-0.70L89.25-0.70L89.25-0.70Q90.56-0.80 90.89-1.97ZM87.42-3.61L87.42-3.61L90.94-3.61L90.94-3.61Q90.80-5.48 89.16-5.48L89.16-5.48L89.16-5.48Q87.61-5.34 87.42-3.61Z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <div class="left layui-hide-xs">
            <ul class="layui-nav">
                <li class="layui-nav-item">
                    <a href="${pageContext.request.contextPath}/front/index.jsp">首页</a>
                </li>
                <li class="layui-nav-item layui-this">
                    <a href="${pageContext.request.contextPath}/front/article_list.jsp">文章归档</a>
                </li>
                <li class="layui-nav-item">
                    <a href="${pageContext.request.contextPath}/front/leave_msg.jsp">留言</a>
                </li>
                <li class="layui-nav-item">
                    <a href="${pageContext.request.contextPath}/front/about.jsp">关于</a>
                </li>
            </ul>
        </div>
        <div class="right">
            <ul class="layui-nav">
                <li class="layui-nav-item layui-hide-sm layui-hide-md layui-hide-lg" id="navs">
                    <a>
                        <i class="layui-icon">&#xe65f;</i>
                    </a>
                </li>
                <li id="login_no" class="layui-nav-item" style="display: none;">
                    <a href="javascript:" onchange="return false" id="login"><img
                            src="${pageContext.request.contextPath}/res/images/my/nologin.png"
                            class="layui-nav-img">立即登录</a>
                    <dl class="layui-nav-child">
                        <dd>
                            <a href="${pageContext.request.contextPath}/front/login.jsp">立即登录</a>
                        </dd>
                        <dd>
                            <a href="javascript:" id="reg">点我注册</a>
                        </dd>
                    </dl>
                </li>
                <li id="login_yes" class="layui-nav-item" style="display: none;">
                    <a><img id="figureurlQq1" class="layui-nav-img" src="#" alt="图片未加载"><b id="nickname">您的昵称</b></a>
                    <dl class="layui-nav-child">
                        <!--
                        <dd>
                            <a href="javascript:;">绑定账号</a>
                        </dd>
                        -->
                        <dd>
                            <a href="javascript:" id="login_out">退出</a>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</header>

<!--主体内容-->
<div class="content">
    <!-- 帖子 -->
    <div class="layui-container mycontent">
        <div class="layui-row">
            <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
                <legend><strong>dawa大娃bigbaby(triedblog)</strong> 目前共有文章： 1,060 篇</legend>
            </fieldset>
            <div class="layui-col-md9 layui-col-sm8 layui-col-xs12 content-left">
                <h4 class="open-all layui-unselect" id="open-all">展开所有月份</h4>
                <div class="layui-collapse">
                    <div class="layui-colla-item">
                        <h2 class="layui-colla-title">2018年四月</h2>
                        <div class="layui-colla-content">
                            <ul>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="layui-colla-item">
                        <h2 class="layui-colla-title">2018年三月</h2>
                        <div class="layui-colla-content">
                            <ul>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="layui-colla-item">
                        <h2 class="layui-colla-title">2018年二月</h2>
                        <div class="layui-colla-content">
                            <ul>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                                <li>22日:
                                    <a target="_blank" href="javascript:">斐讯K3路由器
                                        openwrt搭建mysql报错解决</a>
                                    <span title="评论数量">(0条评论)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <strong style="position: absolute;bottom: 0;left: 0;right: 0;text-align: center;line-height: 30px;">The
                        End</strong>
                </div>
            </div>
            <div class="layui-col-md3 layui-col-sm4 layui-col-xs12 content-right">
                <div>
                    <!-- 文章标签 -->
                    <div class="grid" id="grid">
                        <h3></h3>
                        <div class="content">
                            <li class="myquote">
                                没有什么比年轻时候的贫穷更理直气壮
                            </li>
                            <span class="layui-col-md4 layui-col-sm4 layui-col-xs4">
										<a href="javascript:" atitle="文章"><b>32</b><i
                                                class="layui-icon">&#xe60a;</i></a>
									</span>
                            <span class="layui-col-md4 layui-col-sm4 layui-col-xs4">
										<a href="classify.jsp?__hbt=1524650296533" atitle="分类"><b>8</b><i
                                                class="layui-icon">&#xe61d;</i></a>
									</span>
                            <span class="layui-col-md4 layui-col-sm4 layui-col-xs4 no-right-border">
										<a atitle="标签"><b>14</b><i class="layui-icon">&#xe64d;</i></a>
									</span>
                            <span class="layui-clear no-right-border"></span>
                        </div>
                    </div>
                    <!-- 文章标签 -->
                    <div class="flag">
                        <h3>文章标签</h3>
                        <div class="content">
                            <span class="layui-badge layui-bg-blue">springboot</span>
                            <span class="layui-badge layui-bg-black">springcloud</span>
                            <span class="layui-badge">redis</span>
                            <span class="layui-badge layui-bg-green">java</span>
                            <span class="layui-badge layui-bg-orange">node.js</span>
                            <span class="layui-badge layui-bg-cyan">nginx</span>
                        </div>
                    </div>
                    <!-- 热门文章，后台通过点击量 -->
                    <div class="hot-post">
                        <h3>热门文章</h3>
                        <div class="content">
                            <ul>
                                <li>热门文章1</li>
                                <li>热门文章2</li>
                                <li>热门文章3</li>
                                <li>热门文章4</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 热门推荐文章，后台设置 -->
                    <div class="re-post">
                        <h3>推荐文章</h3>
                        <div class="content">
                            <ul>
                                <li>推荐文章1</li>
                                <li>推荐文章2</li>
                                <li>推荐文章3</li>
                                <li>推荐文章4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 底部信息 -->
<footer class="footer">
    <div class="footavatar">
        <img src="${pageContext.request.contextPath}/res/images/my/favicon.ico" class="footphoto">
        <ul class="footinfo">
            <p class="fname">
                <a href="javascript:">dawa大娃bigbaby</a>
            </p>
            <p class="finfo">性别：^_^ 年龄：22岁</p>
            <p>现居：甲骨文培训基地</p>
        </ul>
    </div>
    <div class="info">
        <p>承认现实生活中的不足之处，并通过自己的努力去弥补这种不足</p>
        <span>
								<a>© 2018 dawa大娃bigbaby-博客</a>
							</span>
        <span class="no-right-border">
								<a href="${pageContext.request.contextPath}/admin/login.jsp" target="_blank">后台登录</a>
							</span>
        <span class="layui-clear no-right-border"></span>
    </div>
</footer>

<!--跳到顶部的小弹框-->
<ul class="layui-fixbar">
    <li class="layui-icon layui-fixbar-top" lay-type="top" style="display: list-item;">&#xe604;</li>
</ul>
</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/web/article_list.js"></script>

</html>