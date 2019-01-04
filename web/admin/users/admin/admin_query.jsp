<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>admin_query</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
</head>

<body>
<div class="layui-row">
    <div class="layui-col-md12">
        <table class="layui-table" lay-skin="line">
            <tbody>
            <tr>
                <td>用户名：</td>
                <td name="username"></td>
                <td>昵称：</td>
                <td name="nickname"></td>
            </tr>
            <tr>
                <td>性别：</td>
                <td name="sex"></td>
                <td>生日：</td>
                <td name="birthday"></td>
            </tr>
            <tr>
                <td>电话：</td>
                <td name="phone"></td>
                <td>邮箱：</td>
                <td name="email"></td>
            </tr>
            <tr>
                <td>创建时间：</td>
                <td name="createtime"></td>
                <td>最近修改时间：</td>
                <td name="updatetime"></td>
            </tr>
            <tr>
                <td>用户状态：</td>
                <td name="status"></td>
                <td>头像：</td>
                <td name="headurl">
                    <a href="" target='view_window'>
                        <img src="" style="height: 50px;width: 50px;border-radius: 50%;border: none;"/>
                    </a>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js?"></script>
<script>
    layui.use(['layer', 'form'], function () {
        var layer = layui.layer,
            $ = layui.$;
        var uid = getUrlParam("uid");
        initData(uid);

        //初始化页面数据
        function initData(uid) {
            //用户数据
            $.ajax({
                url: IP + '/admin/admin.do?cmd=getAdminUserDetailById&id=' + uid,
                type: 'post',
                success: function (result, status, xhr) {
                    layer.closeAll('loading');
                    $("td[name='username']").html(result.a_username);
                    $("td[name='nickname']").html(result.a_alias);
                    $("td[name='sex']").html(result.a_sex + "");
                    $("td[name='birthday']").html("-");
                    $("td[name='phone']").html("-");
                    $("td[name='email']").html("-");
                    $("td[name='createtime']").html(result.create_date);
                    $("td[name='updatetime']").html(result.update_date);
                    $("td[name='status']").html(result.a_status);
                    $("td[name='headurl']").children('a').attr('href', result.a_image)
                        .children('img').attr('src', result.a_image);
                    $.each(getDictionary("userStatus"), function (idx, obj) {
                        if (result.a_status === obj.k) {
                            $("td[name='status']").html(obj.v + "")
                        }
                    });

                }
            });
        }
    });
</script>
</body>

</html>