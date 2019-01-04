<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>qquser_list</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/admin_list.css"/>
</head>

<body>
<div class="layui-fluid">
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card layui-anim layui-anim-upbit">
                <div class="layui-card-header">QQ用户
                    <span class="btn_right">
								<button id="deleteall" title="批量删除" class="layui-btn layui-btn-danger layui-btn-xs"
                                        style="display: none;"><i class="layui-icon">&#xe640;</i>批量删除</button>
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <header>
                        <form class="layui-form" action="">
                            <div class="layui-form-item">
                                <label class="layui-form-label">用户名:</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="username" placeholder="用户名" autocomplete="off"
                                           class="layui-input">
                                </div>
                            </div>


                            <div class="layui-form-item">
                                <label class="layui-form-label">昵称:</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="nickname" placeholder="昵称" autocomplete="off"
                                           class="layui-input">
                                </div>
                            </div>

                            <div class="layui-form-item">
                                <label class="layui-form-label">性别:</label>
                                <div class="layui-input-inline">
                                    <select name="gender" title="性别">
                                        <option value=""></option>
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                    </select>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">状态:</label>
                                <div class="layui-input-inline">
                                    <select name="status" title="状态">
                                        <option value=""></option>
                                        <option value="1">正常</option>
                                        <option value="0">禁用</option>
                                    </select>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <div class="layui-input-inline" style="width: 190px;">
                                    <button class="layui-btn layui-btn-normal" lay-submit lay-filter="formDemo">查询
                                    </button>
                                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                                </div>
                            </div>
                        </form>
                    </header>
                    <div>
                        <table id="demo" lay-filter="test"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/html" id="barDemo">
    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del"><i
            class="layui-icon layui-icon-delete"></i>删除</a>
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/qquser_list.js"></script>
</body>

</html>