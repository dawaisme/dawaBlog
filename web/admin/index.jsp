<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>大娃个人博客-后台管理系统</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/admin.css"/>
</head>

<body class="layui-layout-body">
<div class="layui-layout layui-layout-admin">
    <!-- 左侧导航区域 -->
    <div class="layui-side layui-unselect" style="left: 0;">
        <div class="my-layui-logo">
            <span>博客后台管理系统</span>
        </div>
        <ul class="layui-nav-myitem">
            <%--文章管理--%>
            <li>
                <dt><i class="layui-icon layui-icon-read"></i>&nbsp;文章<i class="layui-icon layui-icon-triangle-r"
                                                                         style="transform: rotate(0deg);"></i></dt>
                <dl>
                    <dd><a data-url="article/article_add.jsp" data-title="发布文章" lay-id="items0">发布文章</a></dd>
                    <dd><a data-url="article/article_list.jsp" data-title="文章管理" lay-id="items1">文章管理</a></dd>
                    <dd><a data-url="article/article_classification_label.jsp" data-title="分类、标签"
                           lay-id="items2">分类、标签</a></dd>
                </dl>
            </li>
            <%--用户中心--%>
            <li>
                <dt><i class="layui-icon layui-icon-user"></i>&nbsp;用户中心<i class="layui-icon layui-icon-triangle-r"
                                                                           style="transform: rotate(0deg);"></i></dt>
                <dl>
                    <dd><a data-url="users/admin/admin_list.jsp" data-title="管理员列表" lay-id="items4">管理员列表</a></dd>
                    <dd><a data-url="users/web/qquser_list.jsp" data-title="用户管理" lay-id="items3">用户管理</a></dd>
                </dl>
            </li>
            <%--我的设置--%>
            <li>
                <dt><i class="layui-icon layui-icon-friends"></i>&nbsp;我的设置<i class="layui-icon layui-icon-triangle-r"
                                                                              style="transform: rotate(0deg);"></i></dt>
                <dl>
                    <dd><a data-url="users/update_my_password.jsp" data-title="密码修改" lay-id="items7">密码修改</a></dd>
                    <dd><a data-url="users/update_my_base_info.jsp" data-title="个人信息修改"
                           lay-id="items8">个人信息修改</a></dd>
                </dl>
            </li>
            <%--系统管理--%>
            <li>
                <dt><i class="layui-icon layui-icon-set"></i>&nbsp;系统管理<i class="layui-icon layui-icon-triangle-r"
                                                                          style="transform: rotate(0deg);"></i></dt>
                <dl>
                    <dd><a data-url="system/web_setting.jsp" data-title="网站设置" lay-id="items11">网站设置</a></dd>
                </dl>
            </li>
        </ul>
    </div>

    <!-- 内容主体 -->
    <div class="layui-body" style="overflow-y: hidden;">
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <header class="layui-header layui-unselect">
            <div class="layui-nav">
                <ul class="layui-nav-left">
                    <li class="layui-nav-item layadmin-flexible" lay-unselect="">
                        <a href="javascript:" layadmin-event="flexible" title="侧边伸缩">
                            <i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item" lay-unselect="">
                        <a href="${pageContext.request.contextPath}/front/index.jsp" target="_blank" title="前台">
                            <i class="layui-icon layui-icon-website"></i>
                        </a>
                    </li>
                </ul>
                <ul class="layui-nav-right">
                    <li class="layui-nav-item" id="user_info" lay-unselect="">
                        <a><img id="headimgurl" src="${sessionScope.admin.a_image}"
                                class="layui-nav-img"><span
                                id="nickname">${sessionScope.admin.a_alias}</span></a>
                        <dl class="layui-nav-child">
                            <dd>
                                <a href="javascript:">修改密码</a>
                            </dd>
                            <hr>
                            <dd>
                                <a href="javascript:">注销</a>
                            </dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item" lay-unselect="">
                        <a href="javascript:" layadmin-event="theme"><i
                                class="layui-icon layui-icon-more-vertical"></i></a>
                    </li>
                </ul>
            </div>
        </header>
        <!-- 主体导航栏 -->
        <nav class="layui-tab" lay-filter="layui-tab" id="wrapper">
            <ul class="layui-tab-title layui-unselect" id="layui-tabs">
                <li class="layui-this layui-tab-index" lay-id='index'><i class="layui-icon layui-icon-home"></i> 首页</li>
            </ul>
            <div id="fengexian">
                <!-- 分割线（去除title的border-bottom后） -->
            </div>
            <!-- 主体内容 -->
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <iframe scrolling="auto" frameborder="0" src="welcome.jsp"
                            style="width:100%;height:100%;"></iframe>
                </div>
            </div>
        </nav>
    </div>

    <div class="layadmin-body-shade" layadmin-event="shade"></div>


    <!--右键菜单的源-->
    <div class="contextMenu" id="myMenu1">
        <ul>
            <li id="deletemyself">关闭当前标签页</li>
            <li id="deleteother">关闭其他标签页</li>
            <li id="deleteall">关闭所有标签页</li>
        </ul>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/jquery-3.3.1/jquery-3.3.1.js"></script>
<!-- 三方 -->
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/iscroll.js"></script>
<script type="text/javascript"
        src="${pageContext.request.contextPath}/res/lay/system/jquery.contextmenu.r2.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/admin.js"></script>
</body>

</html>