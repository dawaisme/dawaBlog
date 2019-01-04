<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>admin_update</title>
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
                <div class="layui-card-header">修改信息
                    <span class="btn_right">
								<button type="button" id="back" title="返回"
                                        class="layui-btn layui-btn-normal layui-btn-xs"
                                        onclick="window.history.back(-1);"><i class="layui-icon">&#xe65c;</i>返回上一页</button>
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" lay-filter="admin_base_info">
                        <div class="layui-form-item layui-row">
                            <input type="hidden" name="uid"/>
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">用户名：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="username" disabled required lay-verify="required"
                                       autocomplete="off" class="layui-input readonly" title="用户名">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">昵称：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="nickname" required lay-verify="required|username"
                                       placeholder="请输入昵称" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">电话：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="phone" lay-verify="myphone" placeholder="请填写电话"
                                       autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">邮箱：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input type="text" name="email" lay-verify="myemail" placeholder="请填写邮箱"
                                       autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">生日：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <input id="birthday" type="text" name="birthday" lay-verify="mydate" placeholder="请填写生日"
                                       autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">性别：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12" id="sex">

                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">状态：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12">
                                <select name="status" lay-verify="required" id="userStatus" title="状态">

                                </select>
                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs12">角色：</label>
                            <div class="layui-col-md10 layui-col-sm10 layui-col-xs12" id="role">

                            </div>
                        </div>
                        <div class="layui-form-item layui-row">
                            <label class="my_layui-form-label layui-col-md1 layui-col-sm1 layui-col-xs1 layui-hide-xs">&nbsp;</label>
                            <button class="layui-btn layui-btn-normal" lay-submit lay-filter="formDemo">
                                <span>保存修改</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js?v=dksao923470oer92148"></script>
<script>
    layui.use(['layer', 'form', 'laydate'], function () {
        var layer = layui.layer,
            $ = layui.$,
            form = layui.form,
            laydate = layui.laydate;
        var uid = getUrlParam("uid");
        initData(uid);
        //执行一个laydate实例
        laydate.render({
            elem: '#birthday',
            max: 0,
            format: 'yyyy-MM-dd HH:mm:ss'
        });
        //表单监听提交
        form.on('submit(formDemo)', function (data) {
            var user_data = data.field;
            var roleIds = [];
            $.each($('#role').children('input:checked'), function (idx, obj) {
                roleIds.push($(this).data('id'))
            });
            user_data.roleIds = roleIds;
            user_data = JSON.stringify(user_data)
            $.ajax({
                url: IP + '/api/blog-admin/sysUser',
                type: 'PUT',
                data: user_data,
                success: function (result, status, xhr) {
                    layer.closeAll('loading');
                    layer.msg(result.message, {
                        icon: 1,
                        time: 1000
                    }, function () {
                        window.history.back(-1);
                    });
                }
            });
            return false;
        });
        form.verify({
            username: function (value, item) { //value：表单的值、item：表单的DOM对象
                if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                    return '昵称不能有特殊字符';
                }
                if (!(/^[\S]{2,10}$/.test(value))) {
                    return '昵称必须2到10位，且不能出现空格';
                }
                if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                    return '昵称首尾不能出现下划线\'_\'';
                }
                if (/^\d+$/.test(value)) {
                    return '昵称不能全为数字';
                }
            },
            myphone: function (value, item) {
                if (value) {
                    if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(value))) {
                        return '请填写正确的电话';
                    }
                }
            },
            myemail: function (value, item) {
                if (value) {
                    if (!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value))) {
                        return "请填写正确的邮箱"
                    }
                }
            }
        });

        //初始化页面数据
        function initData(uid) {
            //状态
            showDictSelect("userStatus", "userStatus");
            showDictRadio("sex", "sex");
            //角色
            showRolesCheckbox("role");
            //用户数据
            showUser(uid);
            form.render();
        }

        function showUser(uid) {
            $.ajax({
                url: IP + '/api/blog-admin/sysUser/' + uid,
                type: 'GET',
                success: function (result, status, xhr) {
                    layer.closeAll('loading');
                    form.val("admin_base_info", result.data)
                    $("input[name='sex'][value='" + result.data.sex + "']").attr("checked", "checked")
                    $.each(result.data.roles, function (idx, obj) {
                        $("input[type='checkbox'][data-id='" + obj.id + "']").attr("checked", "checked")
                    });
                    form.render();
                }
            });
        }
    });
</script>
</body>

</html>