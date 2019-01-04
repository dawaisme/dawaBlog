<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>update_my_password</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/update_my_base_info.css"/>
</head>

<body>
<div class="layui-fluid">
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card layui-anim layui-anim-upbit">
                <div class="layui-card-header">更改密码
                    <span class="btn_right">
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" action="">
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">用户名：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <b>
                                    <input type="text" name="nickname" value="昵称" disabled required
                                           lay-verify="required" autocomplete="off" class="layui-input readonly" title="昵称">
                                </b>
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">新密码：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="password" name="password" required lay-verify="required|password"
                                       placeholder="新密码" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">确认密码：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="password" name="repassword" required lay-verify="required|password"
                                       placeholder="确认新密码" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs1 layui-hide-xs">&nbsp;</label>
                            <button type="button" class="layui-btn layui-btn-normal" lay-submit
                                    lay-filter="formDemo"><span>保存修改</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/update_my_password.js"></script>
</body>

</html>