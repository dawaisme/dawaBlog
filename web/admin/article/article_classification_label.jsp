<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>article_classification_label</title>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="bookmark" href="${pageContext.request.contextPath}/res/images/my/favicon.ico"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/layui.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/common.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/res/css/admin/admin_list.css"/>
</head>

<body>
<div class="layui-fluid">
    <div class="layui-row layui-anim layui-anim-upbit layui-col-space15">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">标签、分类
                    <span class="btn_right">
								<button id="adduser" title="添加" class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon">&#xe608;</i>添加</button>
								<button type="button" id="refresh" title="刷新"
                                        class="layui-btn layui-btn-normal layui-btn-xs"><i
                                        class="layui-icon layui-icon-refresh"></i></button>
							</span>
                </div>
                <div class="layui-card-body">
                    <fieldset class="layui-elem-field">
                        <legend style="font-size: 14px;">标签</legend>
                        <div id="lablesManager" class="layui-field-box">
                        </div>
                    </fieldset>
                    <fieldset class="layui-elem-field">
                        <legend style="font-size: 14px;">分类</legend>
                        <div id="classifysManager" class="layui-field-box">

                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</div>

<!--add 点击添加的时候,此表单跳出 JS操作-->
<form class="layui-form" id="add_lable_classify" method="post"
      action="${pageContext.request.contextPath}/admin/admin.do?cmd=addArticleType">
    <div class="layui-form-item">
        <label class="layui-form-label">标签分类</label>
        <div class="layui-input-block">
            <input type="text" name="articleTypeName" required lay-verify="required" placeholder="标签、分类名"
                   autocomplete="off"
                   class="layui-input">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">选择框</label>
        <div class="layui-input-block">
            <select name="articleTypeType" lay-verify="required" title="请选择类型">
                <option value="">请选择类型</option>
                <c:forEach items="${sessionScope.allTypeType}" var="type">
                    <option value="${type.type_id}">${type.type_name}</option>
                </c:forEach>
            </select>
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">标签颜色</label>
        <div class="layui-input-block">
            <input type="hidden" value="" name="articleTypeColor">
            <div id="mycolorpicker"></div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn layui-btn-sm layui-btn-normal" lay-submit lay-filter="addForm">确认添加</button>
        </div>
    </div>
</form>

<!--update-->
<form class="layui-form" lay-filter="upd_lable_classify" id="upd_lable_classify" method="post" action="${pageContext.request.contextPath}/admin/admin.do?cmd=updateArticleType">
    <div class="layui-form-item">
        <label class="layui-form-label">标签分类</label>
        <div class="layui-input-block">
            <input type="hidden" name="id"/>
            <input type="hidden" name="color"/>
            <input type="text" name="name" required lay-verify="required" placeholder="标签、分类名" autocomplete="off"
                   class="layui-input">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">选择框</label>
        <div class="layui-input-block">
            <select name="type" lay-verify="required" title="请选择类型">
                <option value="">请选择类型</option>
                <c:forEach items="${sessionScope.allTypeType}" var="type">
                    <option value="${type.type_id}">${type.type_name}</option>
                </c:forEach>
            </select>
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">标签颜色</label>
        <div class="layui-input-block">
            <div id="mycolorpicker_1"></div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn layui-btn-sm layui-btn-normal" lay-submit lay-filter="updForm">保存修改</button>
        </div>
    </div>
</form>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/res/lay/system/admin/public.js"></script>
<script type="text/javascript"
        src="${pageContext.request.contextPath}/res/lay/system/admin/article_classsfication_label.js"></script>
</body>

</html>