<%@ page contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>大娃个人博客管理-后台登录</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/login.css"/>
</head>

<body>
<div class="layui-container">
    <div class="layadmin-user-login-main center">
        <form id="login" class="layadmin-user-login-box layadmin-user-login-body layui-form" method="post"
              action="${pageContext.request.contextPath}/admin/login.do?cmd=login">
            <div class="layui-form-item">
                <div class="logo">
                    <img src="${pageContext.request.contextPath}/favicon.ico"/>
                </div>
                <h3 class="title">欢迎来到大娃博客后台管理系统</h3>
            </div>
            <div class="layui-form-item">
                <input id="username" name="username" lay-verify="required" placeholder="默认账号admin" class="my-layui-input" type="text">
            </div>
            <div class="layui-form-item">
                <input id="password" name="password" lay-verify="required|password" placeholder="默认密码123456" class="my-layui-input"
                       type="password">
            </div>
            <div class="layui-form-item">
                <div class="layui-row">
                    <div class="layui-col-xs7">
                        <input type="hidden" name="code"/>
                        <input type="text" name="random" id="LAY-user-login-vercode" lay-verify="required"
                               placeholder="图形验证码" class="my-layui-input">
                    </div>
                    <div class="layui-col-xs5">
                        <div style="margin-left: 10px;">
                            <img id="codeImg" src="${pageContext.request.contextPath}/admin/login.do?cmd=random"
                                 class="layadmin-user-login-codeimg" alt="验证码未加载" onclick="changeRandom()">
                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-form-item">
                <button class="my-layui-btn" lay-submit lay-filter="LAY-user-login-submit">Login</button>
            </div>
            <div class="layui-form-item">
                <a href="javascript:"><input id="remember" type="checkbox" name="remember" value="记住密码" title="记住密码"></a>
                <span id="loginFlag">${sessionScope.login_flag} <c:remove scope="session" var="login_flag"/></span>
            </div>
        </form>
    </div>
</div>
</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<%--layui业务的JS--%>
<script type="text/javascript" >
    layui.use(['layer', 'form', 'element', 'jquery'], function () {
        var layer = layui.layer,
            element = layui.element,
            form = layui.form,
            $ = layui.jquery;
        form.render();
        //提交
        form.on('submit(LAY-user-login-submit)', function (data) {
            $("#login").submit();
            return false;
        });

        form.verify({
            password: [
                /^[\S]{5,16}$/, '密码必须5到16位，且不能出现空格'
            ]
        });
    });
</script>

<%--自己扩展的JS--%>
<script>
    //修改验证码
    var num = 0;
    window.changeRandom = function changeRandom() {
        num++;
        document.getElementById("codeImg").src = '/admin/login.do?cmd=random&num=' + num;
        document.getElementById("LAY-user-login-vercode").value = "";
    };

    //判断cookie是否记住密码
    var cookie = window.getCookie("username&password");
    if (cookie != null && cookie!=="" && cookie!==undefined ) {
        //cookie存在
        //1.让记住密码按钮,默认为选中状态
        document.getElementById("remember").checked=true;
        var strings = cookie.split("&");
        var username = strings[0];
        var password = strings[1];
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
    } else {
        //cookie不存在. 清空值
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }

</script>
</html>