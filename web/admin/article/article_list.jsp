<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>article_list</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/admin_list.css"/>
</head>

<body>
<div class="layui-fluid">
    <div class="layui-row layui-anim layui-anim-upbit">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">文章列表
                    <span class="btn_right">
								<button type="button" id="deleteall" title="批量删除"
                                        class="layui-btn layui-btn-danger layui-btn-xs" style="display: none;"><i
                                        class="layui-icon">&#xe640;</i>批量删除</button>
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <header>
                        <form class="layui-form" action="">
                            <div class="layui-form-item">
                                <label class="layui-form-label">标题:</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="title" placeholder="标题" autocomplete="off"
                                           class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">顶置:</label>
                                <div class="layui-input-inline">
                                    <select name="istop" id="articleStatus2" title="请选择是否置顶">
                                        <option value=""></option>
                                        <option value="1">顶置</option>
                                        <option value="0">未顶置</option>
                                    </select>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">可见性:</label>
                                <div class="layui-input-inline">
                                    <select name="isvisible" id="articleStatus3" title="可见性">
                                        <option value=""></option>
                                        <option value="1">可见</option>
                                        <option value="0">不可见</option>
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
                    <%--数据表格--%>
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
    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del"><i
            class="layui-icon layui-icon-delete"></i>删除</a>
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/article_list.js"></script>
</body>

</html>