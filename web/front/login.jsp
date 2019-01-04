<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>大娃个人博客前台-登录</title>
    <style>
        #login>div>ul>li {
            color: #fff;
        }
    </style>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/web/login.css"/>

</head>

<body>
<div class="layui-container" id="login_login" >
    <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title">
            <li class="layui-this">登录</li>
            <li>注册</li>
        </ul>
        <div class="layui-tab-content" >
            <!-- 邮箱登录  start -->
            <div class="layui-tab-item layui-show">
                <form class="layui-form layui-form-pane" action="">
                    <div class="layui-form-item">
                        <label class="layui-form-label">用户名</label>
                        <div class="layui-input-block">
                            <input type="text" name="title" lay-verify="required" placeholder="请输入用户名"
                                   autocomplete="off"
                                   class="layui-input">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">密码</label>
                        <div class="layui-input-block">
                            <input type="password" name="password" lay-verify="required" placeholder="请输入密码"
                                   autocomplete="off" class="layui-input">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <div class="layui-col-xs8 layui-col-sm8 layui-col-md8">
                            <div class="layui-row">
                                <label class="layui-form-label">验证码</label>
                                <div class="layui-input-block">
                                    <input type="text" name="check" lay-verify="required" placeholder="请输入验证码"
                                           autocomplete="off" class="layui-input">
                                </div>
                            </div>
                        </div>
                        <div class="layui-col-xs4 layui-col-sm4 layui-col-md4">
                            <img src="https://www.oschina.net/action/user/captcha"/>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <div class="layui-input-block" style="margin-left: 0;">
                            <button type="button" class="layui-btn layui-btn-fluid" lay-submit lay-filter="login">登录
                            </button>
                        </div>
                    </div>
                </form>
                <!-- 其他登录 start -->
                <div class="other-way">
                    <div class="other-way-tilte">其它登录方式</div>
                    <a class="qq-login" href="javascript:" title="QQ登录"></a>
                    <a class="wx-login" href="javascript:" title="微信登录"></a>
                    <a class="wb-login" href="javascript:" title="微博登录"></a>
                </div>
                <!-- 其他登录 end  -->
            </div>
            <!-- 邮箱登录 end -->
            <!-- 邮箱注册 start -->
            <div class="layui-tab-item">

            </div>
            <!-- 邮箱注册 end -->
        </div>
    </div>
</div>
</body>

<!--第三方-->
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/web/login.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/jquery-3.3.1/jquery-3.3.1.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/jquery-3.3.1/Particleground.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/jquery-3.3.1/verificationNumbers.js" ></script>

</html>